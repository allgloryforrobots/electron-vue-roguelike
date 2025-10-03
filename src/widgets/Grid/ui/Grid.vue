<template>
  <MapContainer>
    <template v-for="(row, y) in map" :key="y">
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
          'test-red': cell.isPath
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
import { MapType } from '@/entities/Map/types/GridTypes';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';

defineProps<{ map: MapType }>();
</script>

<style scoped>
.grass { background-color: #8bc34a; }
.tree { background-color: #7cb342; }
.tree-cluster { background-color: #689f38; }
.test-red { outline: 1px solid red; }
</style>