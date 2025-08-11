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
import { ref } from 'vue';
import { MapGenerator } from '../lib/GridGeneration';
import Cell from './Cell.vue';

const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
const generatedMap = generator.generateMap();
const map = ref();
map.value = generatedMap;
</script>

<style>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-row {
  display: flex;
}
</style>