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
          'grass': cell === MapGenerator.TERRAIN_TYPES.GRASS,
          'tree': cell === MapGenerator.TERRAIN_TYPES.SINGLE_TREE,
          'tree-cluster': cell === MapGenerator.TERRAIN_TYPES.CLUSTER_TREE
        }"
        :title="`${x},${y}`"
      >
        <span v-if="cell === MapGenerator.TERRAIN_TYPES.SINGLE_TREE">🌲</span>
        <span v-if="cell === MapGenerator.TERRAIN_TYPES.CLUSTER_TREE">🌳</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { MapGenerator } from '../lib/GridGeneration'
const generator = new MapGenerator({ width: 50, height: 30 });
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