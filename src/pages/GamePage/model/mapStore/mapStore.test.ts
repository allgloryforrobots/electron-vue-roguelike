import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useMapStore } from './mapStore';

describe('mapStore', () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('getCellsInArea returns cells within a circular area of given radius', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const cells = store.getCellsInArea(2, 2, 1); // center (2,2), radius 1

    expect(cells).toHaveLength(5);
    const coords = cells.map(cell => ({ x: cell.x, y: cell.y }));
    expect(coords).toEqual(expect.arrayContaining([
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 3 },
    ]));
    expect(coords).not.toContainEqual({ x: 0, y: 0 });
  });

  it('getCellsOnRay returns cells along a straight line using Bresenham’s algorithm', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const cells = store.getCellsOnRay(0, 0, 2, 2);

    expect(cells).toHaveLength(3);
    const coords = cells.map(cell => ({ x: cell.x, y: cell.y }));
    expect(coords).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]);
  });

  it('getCellsInCone returns cells within a 60° cone directed from origin to target', () => {
    const store = useMapStore();
    store.generateMap({ width: 7, height: 7, treeDensity: 0, clusterDensity: 0 });

    // Cone from (3,3) toward (5,3) → direction: right (0°), radius = 2
    const cells = store.getCellsInCone(3, 3, 5, 3, 2);

    const coords = cells.map(c => ({ x: c.x, y: c.y })).sort((a, b) =>
      a.x !== b.x ? a.x - b.x : a.y - b.y
    );

    // All cells must be within distance <= 2 and angle within ±30° of horizontal right
    for (const { x, y } of coords) {
      const dx = x - 3;
      const dy = y - 3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      expect(dist).toBeLessThanOrEqual(2);

      // Angle from positive X-axis
      const angle = Math.atan2(dy, dx);
      const deg = (angle * 180) / Math.PI;
      // Normalize to [-180, 180] → we expect [-30, +30]
      expect(deg).toBeGreaterThanOrEqual(-30);
      expect(deg).toBeLessThanOrEqual(30);
    }

    // Must include key expected cells
    expect(coords).toContainEqual({ x: 4, y: 3 });
    expect(coords).toContainEqual({ x: 5, y: 3 });
    expect(coords).toContainEqual({ x: 4, y: 2 });
    expect(coords).toContainEqual({ x: 4, y: 4 });

    // Must exclude cells clearly outside cone
    expect(coords).not.toContainEqual({ x: 3, y: 5 }); // straight down — 90°
    expect(coords).not.toContainEqual({ x: 2, y: 3 }); // left — 180°
    expect(coords).not.toContainEqual({ x: 3, y: 1 }); // up — -90°
  });

  it('getCellsInSplitArea splits cells into inner (< r/2) and outer ([r/2, r]) rings', () => {
    const store = useMapStore();
    store.generateMap({ width: 5, height: 5, treeDensity: 0, clusterDensity: 0 });

    const result = store.getCellsInSplitArea(2, 2, 2); // radius = 2 → half = 1

    // Inner: distance < 1 → only (2,2)
    expect(result.inner).toHaveLength(1);
    expect(result.inner[0].x).toBe(2);
    expect(result.inner[0].y).toBe(2);

    // Outer: 1 ≤ distance ≤ 2
    expect(result.outer).toHaveLength(8); // (1,2),(3,2),(2,1),(2,3),(1,1),(1,3),(3,1),(3,3)
    for (const cell of result.outer) {
      const d = Math.sqrt((cell.x - 2) ** 2 + (cell.y - 2) ** 2);
      expect(d).toBeGreaterThanOrEqual(1);
      expect(d).toBeLessThanOrEqual(2);
    }

    // Ensure no overlap
    const innerCoords = result.inner.map(c => `${c.x},${c.y}`);
    const outerCoords = result.outer.map(c => `${c.x},${c.y}`);
    for (const coord of innerCoords) {
      expect(outerCoords).not.toContain(coord);
    }
  });
});