import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GroundCell } from '@/shared/model/Cell/Cell';
import { Tree } from '@/shared/model/Obstacle/Obstacle';
import { useMapStore } from './mapStore';

// Вспомогательная функция для замены Math.random на предсказуемую последовательность
function mockRandomSequence(sequence: number[]) {
  let index = 0;
  return vi.spyOn(Math, 'random').mockImplementation(() => {
    if (index < sequence.length) {
      return sequence[index++];
    }
    return 0; // fallback
  });
}

describe('mapStore (без моков)', () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('инициализируется без карты', () => {
    const store = useMapStore();
    expect(store.map).toBeUndefined();
    expect(store.isMapLoaded).toBe(false);
    expect(store.mapWidth).toBe(0);
    expect(store.mapHeight).toBe(0);
  });

  it('генерирует пустую карту при нулевой плотности деревьев', () => {
    const store = useMapStore();
    store.generateMap({
      width: 5,
      height: 5,
      treeDensity: 0,
      clusterDensity: 0,
    });

    expect(store.map).toBeDefined();
    expect(store.mapHeight).toBe(5);
    expect(store.mapWidth).toBe(5);
    expect(store.isMapLoaded).toBe(true);

    // Проверяем, что все ячейки — GroundCell без препятствий
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        const cell = store.map![y][x];
        expect(cell).toBeInstanceOf(GroundCell);
        expect(cell.obstacle).toBeUndefined();
        expect(cell.isPassable()).toBe(true);
      }
    }
  });

  it('генерирует одиночные деревья при treeDensity > 0', () => {
    // Фиксируем случайность: первые 4 вызова Math.random() дадут координаты (1,1), (2,2) и т.д.
    const randomSpy = mockRandomSequence([
      0.2, 0.2, // x = 1, y = 1 (для карты 5x5: 0..4)
      0.9, 0.9, // x = 4, y = 4
      0.0, 0.0, // x = 0, y = 0
      0.5, 0.5, // для проверки isCellEmpty
    ]);

    const store = useMapStore();
    store.generateMap({
      width: 5,
      height: 5,
      treeDensity: 0.12, // 5*5*0.12 = 3 дерева
      clusterDensity: 0,
    });

    randomSpy.mockRestore();

    // Должно быть ровно 3 дерева
    let treeCount = 0;
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (store.map![y][x].obstacle instanceof Tree) {
          treeCount++;
        }
      }
    }
    expect(treeCount).toBe(3);

    // Проверяем конкретные позиции (в зависимости от последовательности)
    expect(store.map![1][1].obstacle).toBeInstanceOf(Tree);
    expect(store.map![4][4].obstacle).toBeInstanceOf(Tree);
    expect(store.map![0][0].obstacle).toBeInstanceOf(Tree);
  });

  it('getCellsInArea возвращает ячейки в круге заданного радиуса', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const cells = store.getCellsInArea(2, 2, 1); // центр (2,2), радиус 1

    expect(cells.length).toBe(5); // (2,2), (1,2), (3,2), (2,1), (2,3)
    const coords = cells.map(cell => ({ x: cell.x, y: cell.y }));
    expect(coords).toContainEqual({ x: 2, y: 2 });
    expect(coords).toContainEqual({ x: 1, y: 2 });
    expect(coords).toContainEqual({ x: 3, y: 2 });
    expect(coords).toContainEqual({ x: 2, y: 1 });
    expect(coords).toContainEqual({ x: 2, y: 3 });
    expect(coords).not.toContainEqual({ x: 0, y: 0 }); // вне радиуса
  });

  it('getCellsOnRay возвращает ячейки по прямой (алгоритм Брезенхэма)', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const cells = store.getCellsOnRay(0, 0, 2, 2);

    expect(cells.length).toBe(3);
    const coords = cells.map(cell => ({ x: cell.x, y: cell.y }));
    expect(coords).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]);
  });

  it('getCellsInCone возвращает ячейки в конусе 60°', () => {
    const store = useMapStore();
    store.generateMap({ width: 7, height: 7, treeDensity: 0, clusterDensity: 0 });

    // Конус от (3,3) к (5,3) — направление вправо, радиус 2
    const cells = store.getCellsInCone(3, 3, 5, 3, 2);

    // Ожидаем ячейки в пределах ±30° от горизонтали вправо
    const coords = cells.map(c => ({ x: c.x, y: c.y })).sort((a, b) => a.x - b.x || a.y - b.y);

    // Должны быть, например: (4,3), (5,3), (4,2), (4,4) — но не (3,5) или (2,3)
    expect(coords).toContainEqual({ x: 4, y: 3 });
    expect(coords).toContainEqual({ x: 5, y: 3 });
    expect(coords).toContainEqual({ x: 4, y: 2 });
    expect(coords).toContainEqual({ x: 4, y: 4 });

    // Угловые точки вне конуса не должны попасть
    expect(coords).not.toContainEqual({ x: 3, y: 5 });
    expect(coords).not.toContainEqual({ x: 2, y: 3 });
  });

  it('getCellsInSplitArea разделяет ячейки на inner и outer', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const result = store.getCellsInSplitArea(2, 2, 2); // радиус = 2 → half = 1

    // inner: расстояние < 1 → только центр (2,2)
    expect(result.inner.length).toBe(1);
    expect(result.inner[0].x).toBe(2);
    expect(result.inner[0].y).toBe(2);

    // outer: 1 ≤ расстояние ≤ 2 → кольцо
    expect(result.outer.length).toBeGreaterThan(0);
    for (const cell of result.outer) {
      const d = Math.sqrt((cell.x - 2) ** 2 + (cell.y - 2) ** 2);
      expect(d).toBeGreaterThanOrEqual(1);
      expect(d).toBeLessThanOrEqual(2);
    }
  });

  it('setActiveCellPosition и setHoverCellPosition работают корректно', () => {
    const store = useMapStore();
    store.setActiveCellPosition({ x: 1, y: 2 });
    store.setHoverCellPosition({ x: 3, y: 4 });

    expect(store.activeCellPosition).toEqual({ x: 1, y: 2 });
    expect(store.hoverCellPosition).toEqual({ x: 3, y: 4 });

    store.clearHoverCellPosition();
    expect(store.hoverCellPosition).toBeNull();
  });
});