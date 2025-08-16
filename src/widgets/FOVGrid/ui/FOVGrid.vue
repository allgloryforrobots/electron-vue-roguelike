<template>
  <div class="map-grid">
    <template v-for="(row, y) in map" >
      <FOVCell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`" 
        :x="x"
        :y="y"
        :visible="cell"
      />
    </template>
  </div>

</template>

<script lang="ts" setup>
import FOVCell from './FOVCell.vue';

defineProps<{
  map: boolean[][];
}>();
</script>

<style scoped>
</style>