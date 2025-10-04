import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { MapGenerator, MapType } from '@/entities/Map';
import { EnemyGenerator } from '@/features/EnemyGenerator';

interface IGenerateMapOptions {
  width?: number;
  height?: number;
  treeDensity?: number;
  clusterDensity?: number;
}

export const useMapStore = defineStore('map', () => {
	const map = ref<MapType>();
	const isMapLoaded = computed(() => map.value !== null);

	const mapWidth = computed((): number => {
		if (!map.value) return 0;
		return map.value.length;
	});

	const mapHeight = computed((): number => {
		if (!map.value) return 0;
		return map.value.length > 0 ? (map.value[0].length) : 0;
	});

	// Метод генерации карты с врагами
	function generateMap({
		width = 50,
		height = 50,
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
		generateEnemies
	};
});