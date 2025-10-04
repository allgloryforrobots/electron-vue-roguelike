import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { Battler } from '@/shared/model/Battler/Battler';
import { useMapStore } from './MapStore';
import { GroundCell } from '@/shared/model/Cell/Cell';

describe('useMapStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initially has no map', () => {
    const store = useMapStore();
    expect(store.map).toBeUndefined();
    expect(store.isMapLoaded).toBe(false);
    expect(store.mapWidth).toBe(0);
    expect(store.mapHeight).toBe(0);
  });

  it('generates a map with correct dimensions', () => {
    const store = useMapStore();
    store.generateMap({ width: 6, height: 6 });

    expect(store.map).toBeDefined();
    expect(store.isMapLoaded).toBe(true);
    expect(store.mapWidth).toBe(6);
    expect(store.mapHeight).toBe(6);
    expect(store.map?.length).toBe(6);
    expect(store.map?.[0].length).toBe(6);
    expect(store.map?.[0][0]).toBeInstanceOf(GroundCell);
  });

  describe('getBattlersInArea', () => {
    it('returns empty array when map is not loaded', () => {
      const store = useMapStore();
      expect(store.getBattlersInArea(0, 0, 2)).toEqual([]);
    });

    it('returns battlers within circular radius', () => {
      const store = useMapStore();
      store.generateMap({ width: 10, height: 10 });

      // Вручную разместим бойцов
      store.map![2][2].battler = new Battler({ id: 'A' });
      store.map![1][1].battler = new Battler({ id: 'B' });
      store.map![5][5].battler = new Battler({ id: 'C' });

      // Ищем вокруг (2,2) с радиусом 2
      const battlers = store.getBattlersInArea(2, 2, 2);

      // Расстояния:
      // A: (2,2) → 0 ✅
      // B: (1,1) → √2 ≈ 1.41 ✅
      // C: (5,5) → √18 ≈ 4.24 ❌

      expect(battlers).toHaveLength(2);
      const ids = battlers.map(b => b.id);
      expect(ids).toContain('A');
      expect(ids).toContain('B');
      expect(ids).not.toContain('C');
    });

    it('respects map boundaries', () => {
      const store = useMapStore();
      store.generateMap({ width: 3, height: 3 });
      store.map![0][0].battler = new Battler({ id: 'corner' });

      const battlers = store.getBattlersInArea(0, 0, 5); // большой радиус
      expect(battlers).toHaveLength(1);
      expect(battlers[0].id).toBe('corner');
    });
  });

  describe('getBattlersInSplitArea', () => {
    it('splits battlers by half-radius correctly', () => {
      const store = useMapStore();
      store.generateMap({ width: 10, height: 10 });

      // Разместим бойцов
      store.map![3][3].battler = new Battler({ id: 'center' });     // dist = 0
      store.map![2][2].battler = new Battler({ id: 'near'});         // dist ≈ 1.41
      store.map![6][6].battler = new Battler({ id: 'far'});           // dist ≈ 4.24

      const radius = 5;
      const { inner, outer } = store.getBattlersInSplitArea(3, 3, radius);
    //   const half = radius / 2; // 2.5

      // center: 0 < 2.5 → inner
      // near: 1.41 < 2.5 → inner
      // far: 4.24 ≥ 2.5 и ≤ 5 → outer

      expect(inner).toHaveLength(2);
      expect(outer).toHaveLength(1);

      const innerIds = inner.map(b => b.id);
      const outerIds = outer.map(b => b.id);

      expect(innerIds).toContain('center');
      expect(innerIds).toContain('near');
      expect(outerIds).toContain('far');
    });

    it('returns empty arrays when radius <= 0', () => {
      const store = useMapStore();
      store.generateMap({ width: 5, height: 5 });

      const result = store.getBattlersInSplitArea(2, 2, 0);
      expect(result.inner).toEqual([]);
      expect(result.outer).toEqual([]);
    });

    it('includes battler exactly at half-radius in outer zone', () => {
      const store = useMapStore();
      store.generateMap({ width: 10, height: 10 });

      // Поместим бойца ровно на расстоянии = halfRadius
      const centerX = 5;
      const centerY = 5;
      const radius = 4;
    //   const halfRadius = radius / 2; // 2

      // Найдём клетку на расстоянии ≈2 от центра: например, (5, 7) → dy=2, dx=0 → dist=2
      store.map![5][7].battler = new Battler({ id: 'on-border' });

      const { inner, outer } = store.getBattlersInSplitArea(centerX, centerY, radius);

      expect(inner).toHaveLength(0);
      expect(outer).toHaveLength(1);
      expect(outer[0].id).toBe('on-border');
    });
  });
});