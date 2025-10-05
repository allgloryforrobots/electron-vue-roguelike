import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { MapGenerator, MapType } from '@/entities/Map';
import { EnemyGenerator } from '@/features/EnemyGenerator';
import { IPosition } from '@/shared/model/Position/Position';
import { GroundCell } from '@/shared/model/Cell/Cell';

interface IGenerateMapOptions {
  width?: number;
  height?: number;
  treeDensity?: number;
  clusterDensity?: number;
}

export const useMapStore = defineStore('map', () => {
  const map = ref<MapType>();
  const isMapLoaded = computed(() => map.value ? true : false);

  // Ширина карты = количество столбцов = x-размер = длина строки
  const mapWidth = computed((): number => {
    if (!map.value || map.value.length === 0) return 0;
    return map.value[0].length;
  });

  // Высота карты = количество строк = y-размер = количество строк
  const mapHeight = computed((): number => {
    if (!map.value) return 0;
    return map.value.length;
  });

  const activeCellPosition = ref<IPosition | null>(null);

  function setActiveCellPosition(position: IPosition) {
    activeCellPosition.value = position;
  }

  const hoverCellPosition = ref<IPosition | null>(null);

  function setHoverCellPosition(position: IPosition) {
    hoverCellPosition.value = position;
  }

  function clearHoverCellPosition() {
    hoverCellPosition.value = null;
  }

  function onHoverCellClick() {
    
  }

  /**
   * Возвращает все ячейки, находящихся в круговой области заданного радиуса
   * с центром в указанной точке на карте.
   *
   * @param x - Координата X центра области (столбец на карте).
   * @param y - Координата Y центра области (строка на карте).
   * @param radius - Радиус поиска (в клетках). Должен быть >= 0.
   * @returns Массив ячеек, находящихся в пределах круга радиуса `radius`.
   */
  function getCellsInArea(x: number, y: number, radius: number): GroundCell[] {
    const cells: GroundCell[] = [];

    if (!map.value || radius < 0) return cells;

    const minX = Math.max(0, x - radius);
    const maxX = Math.min(mapWidth.value - 1, x + radius);
    const minY = Math.max(0, y - radius);
    const maxY = Math.min(mapHeight.value - 1, y + radius);

	for (let currX = minX; currX <= maxX; currX++) {
		for (let currY = minY; currY <= maxY; currY++) {
			const cell = map.value[currY][currX];
				const distance = Math.sqrt((currX - x) ** 2 + (currY - y) ** 2);
				if (distance <= radius) {
					cells.push(cell);
				}
			}
		}

		return cells;
	}

  /**
   * Возвращает все ячейки, находящихся в конусе с углом 60 градусов,
   * направленном от исходной точки к целевой точке, в пределах заданного радиуса.
   *
   * Конус симметричен относительно направления на цель и имеет полный угол 60° (±30°).
   *
   * @param originX - X-координата исходной точки (столбец)
   * @param originY - Y-координата исходной точки (строка)
   * @param targetX - X-координата целевой точки (столбец)
   * @param targetY - Y-координата целевой точки (строка)
   * @param radius - Максимальное расстояние от исходной точки (в клетках)
   * @returns  Массив ячеек, попавших в конус
   */
  function getCellsInCone(
    originX: number,
    originY: number,
    targetX: number,
    targetY: number,
    radius: number
  ): GroundCell[] {
    const cells: GroundCell[] = [];

    if (!map.value || radius <= 0) return cells;

    const dirX = targetX - originX;
    const dirY = targetY - originY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);

    if (dirLength === 0) return cells;

    const normDirX = dirX / dirLength;
    const normDirY = dirY / dirLength;
    const cosHalfAngle = Math.cos(Math.PI / 6); // cos(30°) ≈ 0.866

    const minX = Math.max(0, Math.floor(originX - radius));
    const maxX = Math.min(mapWidth.value - 1, Math.ceil(originX + radius));
    const minY = Math.max(0, Math.floor(originY - radius));
    const maxY = Math.min(mapHeight.value - 1, Math.ceil(originY + radius));

    for (let currX = minX; currX <= maxX; currX++) {
      for (let currY = minY; currY <= maxY; currY++) {
        const cell = map.value[currY][currX];
            const toCellX = currX - originX;
            const toCellY = currY - originY;
            const distance = Math.sqrt(toCellX * toCellX + toCellY * toCellY);

            if (distance > radius) continue;

            const dot = toCellX * normDirX + toCellY * normDirY;
            const cosAngle = dot / distance;

            if (cosAngle >= cosHalfAngle) {
              cells.push(cell);
            }
          }
        }

      return cells;
    }

  /**
   * Возвращает ячейки, разделённых на две группы:
   * - **inner**: находятся строго ближе, чем половина заданного радиуса от центра;
   * - **outer**: находятся на расстоянии от половины радиуса (включительно) до полного радиуса.
   *
   * Область поиска — круг с центром в (x, y) и радиусом `radius`.
   *
   * @param x - Координата X центра области (столбец на карте).
   * @param y - Координата Y центра области (строка на карте).
   * @param radius - Радиус общей области поиска (в клетках). Должен быть > 0.
   * @returns Объект с двумя массивами:
   *   - `inner`: ячейки внутри внутреннего круга (расстояние < radius / 2);
   *   - `outer`: ячейки в кольце между половиной и полным радиусом (radius / 2 ≤ расстояние ≤ radius).
   */
  function getCellsInSplitArea(x: number, y: number, radius: number): { inner: GroundCell[]; outer: GroundCell[] } {
    const inner: GroundCell[] = [];
    const outer: GroundCell[] = [];

    if (!map.value || radius <= 0) {
      return { inner, outer };
    }

    const halfRadius = radius / 2;

    const minX = Math.max(0, x - radius);
    const maxX = Math.min(mapWidth.value - 1, x + radius);
    const minY = Math.max(0, y - radius);
    const maxY = Math.min(mapHeight.value - 1, y + radius);

    for (let currX = minX; currX <= maxX; currX++) {
	for (let currY = minY; currY <= maxY; currY++) {
		const cell = map.value[currY][currX];
          const distance = Math.sqrt((currX - x) ** 2 + (currY - y) ** 2);
          if (distance <= radius) {
            if (distance < halfRadius) {
              inner.push(cell);
            } else {
              outer.push(cell);
            }
          }
      }
    }

    return { inner, outer };
  }

  /**
   * Возвращает все ячейки, находящихся на прямой линии (луче)
   * от начальной точки (x1, y1) до конечной точки (x2, y2) включительно.
   *
   * Используется алгоритм Брезенхэма для определения клеток на линии.
   *
   * @param x1 - Начальная координата X (столбец)
   * @param y1 - Начальная координата Y (строка)
   * @param x2 - Конечная координата X (столбец)
   * @param y2 - Конечная координата Y (строка)
   * @returns Массив ячеек на линии от (x1, y1) до (x2, y2), в порядке следования.
   */
  function getCellsOnRay(x1: number, y1: number, x2: number, y2: number): GroundCell[] {
    const cells: GroundCell[] = [];

    if (!map.value) return cells;

    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;
    let x = x1;
    let y = y1;

    while (true) {
      if (x >= 0 && x < mapWidth.value && y >= 0 && y < mapHeight.value) {
  		const cell = map.value[y][x];
        cells.push(cell);
      }

      if (x === x2 && y === y2) break;

      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }

    return cells;
  }

  // Метод генерации карты
  function generateMap({
    width = 50,
    height = 30,
    treeDensity = 0.05,
    clusterDensity = 0.008,
  }: IGenerateMapOptions) {
    const mapGenerator = new MapGenerator({ width, height, treeDensity, clusterDensity });
    map.value = mapGenerator.generateMap();
  }

  // Метод генерации врагов
  function generateEnemies({
    singleEnemyDensity = 0.015,
    squadDensity = 0.003,
    minSquadSize = 2,
    maxSquadSize = 7,
    minDistanceFromEdges = 3,
    minDistanceBetweenGroups = 5
  }) {
    const enemyGenerator = new EnemyGenerator({
      singleEnemyDensity,
      squadDensity,
      minSquadSize,
      maxSquadSize,
      minDistanceFromEdges,
      minDistanceBetweenGroups
    });

    if (map.value) {
      enemyGenerator.generateEnemies(map.value, mapWidth.value, mapHeight.value);
    }
  }

  return {
    map,
    isMapLoaded,
    mapWidth,
    mapHeight,
    generateMap,
    generateEnemies,
    getCellsInArea,
    getCellsInSplitArea,
    getCellsOnRay,
    setActiveCellPosition,
    setHoverCellPosition,
    clearHoverCellPosition,
    onHoverCellClick,
	getCellsInCone
  };
});