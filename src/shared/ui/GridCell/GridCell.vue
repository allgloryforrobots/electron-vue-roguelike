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
defineProps<{
  x: number;
  y: number;
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
</style>