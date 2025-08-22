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

  const props = defineProps<{
    playerX: number;
    playerY: number;
  }>();

  const cellStyle = computed<CSSProperties>(() => ({
    position: 'absolute',
    left: `${props.playerX * CONSTANTS.CELL_SIZE}px`,
    top: `${props.playerY * CONSTANTS.CELL_SIZE}px`
  }));
</script>

<style scoped>
</style>