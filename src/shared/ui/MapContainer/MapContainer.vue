<template>
  <div
    class="map-grid" 
    :style="{
      gridTemplateColumns: `repeat(${props.width}, ${CONSTANTS.CELL_SIZE}px)`,
      gridTemplateRows: `repeat(${props.height}, ${CONSTANTS.CELL_SIZE}px)`,
      width: `${props.width * CONSTANTS.CELL_SIZE}px`,
      height: `${props.height * CONSTANTS.CELL_SIZE}px`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CONSTANTS } from '@/shared/constants/constants';

interface MapGridProps {
  width: number;
  height: number;
}

const props = defineProps<MapGridProps>();
</script>

<style scoped>
.map-grid {
  display: grid;
  position: fixed;
}
</style>