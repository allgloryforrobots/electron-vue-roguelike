import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { MapGenerator, MapType } from '@/entities/Map';
import { EnemyGenerator } from '@/features/EnemyGenerator';
import { Battler } from '@/shared/model/Battler/Battler';

interface IGenerateMapOptions {
  width?: number;
  height?: number;
  treeDensity?: number;
  clusterDensity?: number;
}

export const useMapStore = defineStore('map', () => {
	const map = ref<MapType>();
	const isMapLoaded = computed(() => map.value ? true : false);

	const mapWidth = computed((): number => {
		if (!map.value) return 0;
		return map.value.length;
	});

	const mapHeight = computed((): number => {
		if (!map.value) return 0;
		return map.value.length > 0 ? (map.value[0].length) : 0;
	});

	/**
	 * Возвращает всех бойцов (Battler), находящихся в круговой области заданного радиуса
	 * с центром в указанной точке на карте.
	 *
	 * @param x - Координата X центра области (столбец на карте).
	 * @param y - Координата Y центра области (строка на карте).
	 * @param radius - Радиус поиска (в клетках). Должен быть >= 0.
	 * @returns Массив бойцов, находящихся в пределах круга радиуса `radius`.
	 
	 */
	function getBattlersInArea(x: number, y: number, radius: number): Battler[] {
		const battlers: Battler[] = [];

		if (!map.value || radius < 0) return battlers;

		const minX = Math.max(0, x - radius);
		const maxX = Math.min(mapWidth.value - 1, x + radius);
		const minY = Math.max(0, y - radius);
		const maxY = Math.min(mapHeight.value - 1, y + radius);

		for (let i = minX; i <= maxX; i++) {
			for (let j = minY; j <= maxY; j++) {
				const cell = map.value[i][j];
				if (cell.battler) {
					const distance = Math.sqrt((i - x) ** 2 + (j - y) ** 2);
					if (distance <= radius) {
						battlers.push(cell.battler);
					}
				}
			}
		}

		return battlers;
	}

	/**
	 * Возвращает бойцов, разделённых на две группы:
	 * - **inner**: находятся строго ближе, чем половина заданного радиуса от центра;
	 * - **outer**: находятся на расстоянии от половины радиуса (включительно) до полного радиуса.
	 *
	 * Область поиска — круг с центром в (x, y) и радиусом `radius`.
	 *
	 * @param x - Координата X центра области (столбец на карте).
	 * @param y - Координата Y центра области (строка на карте).
	 * @param radius - Радиус общей области поиска (в клетках). Должен быть > 0.
	 * @returns Объект с двумя массивами:
	 *   - `inner`: бойцы внутри внутреннего круга (расстояние < radius / 2);
	 *   - `outer`: бойцы в кольце между половиной и полным радиусом (radius / 2 ≤ расстояние ≤ radius).
	 */
	function getBattlersInSplitArea(x: number, y: number, radius: number): { inner: Battler[]; outer: Battler[] } {
		const inner: Battler[] = [];
		const outer: Battler[] = [];

		if (!map.value || radius <= 0) {
			return { inner, outer };
		}

		const halfRadius = radius / 2;

		const minX = Math.max(0, x - radius);
		const maxX = Math.min(mapWidth.value - 1, x + radius);
		const minY = Math.max(0, y - radius);
		const maxY = Math.min(mapHeight.value - 1, y + radius);

		for (let i = minX; i <= maxX; i++) {
			for (let j = minY; j <= maxY; j++) {
				const cell = map.value[i][j];
				if (cell.battler) {
					const distance = Math.sqrt((i - x) ** 2 + (j - y) ** 2);
					if (distance <= radius) {
						if (distance < halfRadius) {
							inner.push(cell.battler);
						} else {
							outer.push(cell.battler);
						}
					}
				}
			}
		}

		return { inner, outer };
	}

	// Метод генерации карты с врагами
	function generateMap({
		width = 50,
		height = 30,
		treeDensity = 0.05,
		clusterDensity = 0.008,
		}: IGenerateMapOptions
	) {
		const mapGenerator = new MapGenerator({ width, height, treeDensity, clusterDensity });
		map.value = mapGenerator.generateMap();
	}

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
		getBattlersInArea,
		getBattlersInSplitArea
	};
});