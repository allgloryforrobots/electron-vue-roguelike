<template>
  <MapContainer
    :width="mapStore.mapWidth" 
    :height="mapStore.mapHeight"
  >
    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :cell="cell"
        :class="{
          'grass': !cell.obstacle,
          'tree': cell.obstacle,
          'tree-cluster': cell.obstacle,
        }"
      >
        <template v-if="cell.obstacle">
          🌳
        </template>
      </GridCell>
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/pages/GamePage';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
const mapStore = useMapStore();

</script>

<style scoped>
.grass { background-color: #8bc34a; }
.tree { background-color: #7cb342; }
.tree-cluster { background-color: #689f38; }
.test-red { outline: 1px solid red; }
</style>