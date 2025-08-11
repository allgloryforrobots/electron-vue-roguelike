<template>
      <div 
        :key="x" 
        class="map-cell"
        :class="{
          'not-visible': !visible,
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
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.not-visible {
  background-color: rgba(0, 0, 0, 0.3);
}

</style>
