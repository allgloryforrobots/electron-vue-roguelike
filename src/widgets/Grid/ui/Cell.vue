<template>
      <div 
        :key="x" 
        class="map-cell"
        :class="{
          'grass': cell === TerrainsTypesEnum.GRASS,
          'tree': cell === TerrainsTypesEnum.SINGLE_TREE,
          'tree-cluster': cell === TerrainsTypesEnum.CLUSTER_TREE
        }"
        :title="`${x},${y}`"
      >
        <span v-if="cell === TerrainsTypesEnum.SINGLE_TREE">🌲</span>
        <span v-if="cell === TerrainsTypesEnum.CLUSTER_TREE">🌳</span>
      </div>
</template>

<script lang="ts" setup>
import { TerrainsTypesEnum } from '../types/GridTypes';


defineProps<{
  x: number;
  y: number;
  cell: TerrainsTypesEnum;
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
