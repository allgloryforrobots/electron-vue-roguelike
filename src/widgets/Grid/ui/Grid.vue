<template>
  <div class="map-container">
    <div 
      v-for="(row, y) in map" 
      :key="y" 
      class="map-row"
    >
        <Cell 
            v-for="(cell, x) in row" 
            :key="`${x}${y}`" 
            :x="x"
            :y="y"
            :cell="cell"
        />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MapType } from '../types/GridTypes';
import Cell from './Cell.vue';

defineProps<{
  map: MapType;
}>();
</script>

<style scoped>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-row {
  display: flex;
}
</style>