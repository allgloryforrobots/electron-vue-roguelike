<!-- Cell.vue -->
<template>
  <div 
    class="map-cell"
    :style="{
      gridColumn: x + 1,
      gridRow: y + 1
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { Cell } from '@/entities/Map/lib/MapGenerator';

defineProps<{
  x: number;
  y: number;
  cell: Cell;
}>();
</script>

<style scoped>
.map-cell {
  width: var(--cell-size);
  height: var(--cell-size);
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

.test-red {
  outline: 1px solid red;
}
</style>