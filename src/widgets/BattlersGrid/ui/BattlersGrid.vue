<template>
  <div class="map-grid">
      <Cell 
        :x="playerX"
        :y="playerY"
        :style="cellStyle"
      >
        🧙‍♂️
      </Cell>
  </div>
</template>

<script lang="ts" setup>
  import { CONSTANTS } from '@/shared/constants/constants';
  import { computed } from 'vue';

  const props = defineProps<{
    playerX: number;
    playerY: number;
  }>();

  const cellStyle = computed(() => ({
    position: 'absolute',
    left: `${props.playerX * CONSTANTS.CELL_SIZE}px`,
    top: `${props.playerY * CONSTANTS.CELL_SIZE}px`
  }));
</script>

<style scoped>
</style>