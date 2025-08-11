<template>
  <div class="map-container">
    <div 
      v-for="(row, y) in map" 
      :key="y" 
      class="map-row"
    >
        <FOVCell 
            v-for="(cell, x) in row" 
            :key="`${x}${y}`" 
            :x="x"
            :y="y"
            :visible="cell"
        />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FOVCell from './FOVCell.vue';

defineProps<{
  map: boolean[][];
}>();
</script>

<style scoped>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

.map-row {
  display: flex;
}
</style>