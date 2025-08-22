<template>
  <div class="map-grid">
      <div 
        :style="cellStyle"
      >
        🧙‍♂️
      </div>
  </div>
</template>

<script lang="ts" setup>
  import { CONSTANTS } from '@/shared/constants/constants';
  import { computed, CSSProperties } from 'vue';
  import { usePlayerStore } from '@/features/Player';

  const playerStore = usePlayerStore();

  const cellStyle = computed<CSSProperties>(() => ({
    position: 'absolute',
    left: `${playerStore.playerX * CONSTANTS.CELL_SIZE}px`,
    top: `${playerStore.playerY * CONSTANTS.CELL_SIZE}px`
  }));
</script>

<style scoped>
</style>