<template>
  <div class="map-container">
    <div 
      v-for="(row, y) in map" 
      :key="y" 
      class="map-row"
    >
      <div 
        v-for="(cell, x) in row" 
        :key="x" 
        class="map-cell"
        :class="{
          'grass': cell === TerrainsTypesEnum.GRASS,
          'tree': cell === TerrainsTypesEnum.SINGLE_TREE,
          'tree-cluster': cell === TerrainsTypesEnum.CLUSTER_TREE
        }"
        :title="`${x},${y}`"
      >
        <span v-if="cell === TerrainsTypesEnum.SINGLE_TREE">🌲</span>
        <span v-if="cell === TerrainsTypesEnum.CLUSTER_TREE">🌳</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { MapGenerator, TerrainsTypesEnum } from '../lib/GridGeneration'
const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
const generatedMap = generator.generateMap();
const map = ref([]);
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

.map-cell {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.grass {
  background-color: #8bc34a;
}

.tree {
  background-color: #7cb342;
}

.tree-cluster {
  background-color: #689f38;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #388e3c;
}
</style>