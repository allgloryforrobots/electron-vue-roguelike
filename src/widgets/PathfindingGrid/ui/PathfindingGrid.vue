<template>
  <MapContainer :width="mapStore.mapWidth" :height="mapStore.mapHeight">
    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell
        v-for="(_, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :class="{ 'path-cell': mapWithPath?.[y]?.[x] }"
      >
      </GridCell>
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
import { useMapStore } from '@/pages/GamePage';
import { ref, watchEffect } from 'vue';
import { Pathfinder } from '@/entities/Map';
import { usePlayerStore } from '@/entities/Player';
const mapStore = useMapStore();
const mapWithPath = ref();
const playerStore = usePlayerStore();

watchEffect(() => {
  if (mapStore.map) {
    const result = Pathfinder.findPath(mapStore.map, playerStore.player.position.x, playerStore.player.position.y, 45, 25);

    if (result.success) {
      // Визуализируем путь
      mapWithPath.value = Pathfinder.visualizePath(mapStore.map, result.path);
    } else {
      console.log('Путь не найден');
    }
  }

});
</script>

<style scoped>
.cell-value {
  opacity: 0.6;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.path-cell {
  background-color: rgba(255, 152, 0, 0.2);
  border-radius: 2px;
}
</style>