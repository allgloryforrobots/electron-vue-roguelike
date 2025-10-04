<template>
  <MapContainer>
    <template v-for="(row, y) in map" :key="y">
      <GridCell
        v-for="(_, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :class="{ 'path-cell': map[y]?.[x] }"
      >
      </GridCell>
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';

defineProps<{
  map: boolean[][];
}>();
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