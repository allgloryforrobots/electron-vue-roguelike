<template>
      <div 
        :key="x" 
        class="map-cell"
        :class="{
          'grass': cell.type === TerrainsTypesEnum.GRASS,
          'tree': cell.type === TerrainsTypesEnum.SINGLE_TREE,
          'tree-cluster': cell.type === TerrainsTypesEnum.CLUSTER_TREE
        }"
        :title="`${x},${y}`"
      >
        <span v-if="cell.type === TerrainsTypesEnum.SINGLE_TREE">🌲</span>
        <span v-if="cell.type === TerrainsTypesEnum.CLUSTER_TREE">🌳</span>
        <slot />
      </div>
</template>

<script lang="ts" setup>
import { ICell, TerrainsTypesEnum } from '../types/GridTypes';


defineProps<{
  x: number;
  y: number;
  cell: ICell;
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
</style>
