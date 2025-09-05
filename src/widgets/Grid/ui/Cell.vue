<template>
  <div 
    :key="x" 
    class="map-cell"
  >
    <div v-if="cell.battler" class="battler">
      {{ cell.battler.image }}
    </div>
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
    position: relative;
  }

  .battler {
    position: absolute;
    z-index: var(--z-battlers);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
