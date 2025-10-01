<template>
  <div 
    class="map-cell"
    :class="{ 'not-visible': !visible }"
    :style="{
      gridColumn: x + 1,
      gridRow: y + 1
    }"
    :title="`${x},${y}`"
  />
</template>

<script lang="ts" setup>
defineProps<{
  x: number;
  y: number;
  visible: boolean;
}>();
</script>

<style scoped>
.map-cell {
  width: var(--cell-size);
  height: var(--cell-size);
  display: flex;
  align-items: center;
  justify-content: center;
  /* фон по умолчанию можно оставить прозрачным или задать в родителе */
}

.not-visible {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>