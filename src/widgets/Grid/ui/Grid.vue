<template>
  <div class="map-grid">
    <template v-for="(row, y) in map" :key="y">
      <GridCell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :cell="cell"
        :class="{
          'grass': cell.type === TerrainsTypesEnum.EMPTY,
          'tree': cell.type === TerrainsTypesEnum.SINGLE_TREE,
          'tree-cluster': cell.type === TerrainsTypesEnum.CLUSTER_TREE,
          'test-red': cell.isPath
        }"
      >
        <template v-if="cell.type === TerrainsTypesEnum.SINGLE_TREE">
          🌲
        </template>
        <template v-if="cell.type === TerrainsTypesEnum.CLUSTER_TREE">
          🌳
        </template>
      </GridCell>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { TerrainsTypesEnum } from '@/entities/Map/types/GridTypes';
import { MapType } from '@/entities/Map/types/GridTypes';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';

defineProps<{
  map: MapType;
}>();
</script>

<style scoped>
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