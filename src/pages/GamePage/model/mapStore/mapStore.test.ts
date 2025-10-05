import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { Battler } from '@/shared/model/Battler/Battler';
import { useMapStore } from './mapStore';
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
      expect(store.map!.length).toBe(10);
      expect(store.map![0].length).toBe(10);

      store.map![2][2].battler = new Battler({ id: 'A' });
      store.map![1][1].battler = new Battler({ id: 'B' });
      store.map![5][5].battler = new Battler({ id: 'C' });

      const battlers = store.getBattlersInArea(2, 2, 2);
      expect(battlers).toHaveLength(2);
      const ids = battlers.map(b => b.id);
      expect(ids).toContain('A');
      expect(ids).toContain('B');
      expect(ids).not.toContain('C');
    });

    it('respects map boundaries', () => {
      const store = useMapStore();
      store.generateMap({ width: 3, height: 3 });
      expect(store.map!.length).toBe(3);
      expect(store.map![0].length).toBe(3);

      store.map![0][0].battler = new Battler({ id: 'corner' });
      const battlers = store.getBattlersInArea(0, 0, 5);
      expect(battlers).toHaveLength(1);
      expect(battlers[0].id).toBe('corner');
    });
  });

  describe('getBattlersInSplitArea', () => {
    it('splits battlers by half-radius correctly', () => {
      const store = useMapStore();
      store.generateMap({ width: 10, height: 10 });
      expect(store.map!.length).toBe(10);
      expect(store.map![0].length).toBe(10);

      store.map![3][3].battler = new Battler({ id: 'center' });
      store.map![2][2].battler = new Battler({ id: 'near' });
      store.map![6][6].battler = new Battler({ id: 'far' });

      const { inner, outer } = store.getBattlersInSplitArea(3, 3, 5);
      expect(inner).toHaveLength(2);
      expect(outer).toHaveLength(1);
      expect(inner.map(b => b.id)).toEqual(expect.arrayContaining(['center', 'near']));
      expect(outer.map(b => b.id)).toEqual(expect.arrayContaining(['far']));
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
      expect(store.map!.length).toBe(10);
      expect(store.map![0].length).toBe(10);

      store.map![7][5].battler = new Battler({ id: 'on-border' }); // (x=5, y=7)

      const { inner, outer } = store.getBattlersInSplitArea(5, 5, 4);
      expect(inner).toHaveLength(0);
      expect(outer).toHaveLength(1);
      expect(outer[0].id).toBe('on-border');
    });
  });

  describe('getBattlersOnRay', () => {
    it('returns battlers on a horizontal ray (left to right)', () => {
      const store = useMapStore();
      store.generateMap({ width: 10, height: 5 });
      expect(store.map!.length).toBe(5);
      expect(store.map![0].length).toBe(10);

      store.map![2][2].battler = new Battler({ id: 'A' });
      store.map![2][4].battler = new Battler({ id: 'B' });

      const battlers = store.getBattlersOnRay(1, 2, 5, 2);
      expect(battlers).toHaveLength(2);
      expect(battlers.map(b => b.id)).toEqual(['A', 'B']);
    });

    it('returns battlers on a vertical ray (top to bottom)', () => {
      const store = useMapStore();
      store.generateMap({ width: 5, height: 10 });
      expect(store.map!.length).toBe(10);
      expect(store.map![0].length).toBe(5);

      store.map![1][3].battler = new Battler({ id: 'top' });   // (x=3, y=1)
      store.map![3][3].battler = new Battler({ id: 'mid' });   // (x=3, y=3)

      const battlers = store.getBattlersOnRay(3, 0, 3, 4);
      expect(battlers).toHaveLength(2);
      expect(battlers.map(b => b.id)).toEqual(['top', 'mid']);
    });

    it('returns battlers on a diagonal ray', () => {
      const store = useMapStore();
      store.generateMap({ width: 8, height: 8 });
      expect(store.map!.length).toBe(8);
      expect(store.map![0].length).toBe(8);

      store.map![1][1].battler = new Battler({ id: 'start' });
      store.map![3][3].battler = new Battler({ id: 'mid' });
      store.map![5][5].battler = new Battler({ id: 'end' });

      const battlers = store.getBattlersOnRay(1, 1, 5, 5);
      expect(battlers).toHaveLength(3);
      expect(battlers.map(b => b.id)).toEqual(['start', 'mid', 'end']);
    });

    it('returns empty array when no battlers on ray', () => {
      const store = useMapStore();
      store.generateMap({ width: 5, height: 5 });
      const battlers = store.getBattlersOnRay(0, 0, 4, 4);
      expect(battlers).toEqual([]);
    });

    it('respects map boundaries (does not crash on out-of-bounds)', () => {
      const store = useMapStore();
      store.generateMap({ width: 3, height: 3 });
      expect(store.map!.length).toBe(3);
      expect(store.map![0].length).toBe(3);

      store.map![0][0].battler = new Battler({ id: 'corner' });
      const battlers = store.getBattlersOnRay(-2, -2, 5, 5);
      expect(battlers).toHaveLength(1);
      expect(battlers[0].id).toBe('corner');
    });

    it('includes both start and end points if they have battlers', () => {
      const store = useMapStore();
      store.generateMap({ width: 5, height: 5 });
      expect(store.map!.length).toBe(5);
      expect(store.map![0].length).toBe(5);

      store.map![1][1].battler = new Battler({ id: 'start' });
      store.map![4][4].battler = new Battler({ id: 'end' });

      const battlers = store.getBattlersOnRay(1, 1, 4, 4);
      expect(battlers).toHaveLength(2);
      expect(battlers[0].id).toBe('start');
      expect(battlers[1].id).toBe('end');
    });
  });
});