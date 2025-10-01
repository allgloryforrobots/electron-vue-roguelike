<template>
  <div class="map-grid">
    <template v-for="(row, y) in map" :key="y">
      <Cell 
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
      </Cell>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { TerrainsTypesEnum } from '@/entities/Map/types/GridTypes';
import { MapType } from '@/entities/Map/types/GridTypes';
import Cell from './Cell.vue';

defineProps<{
  map: MapType;
}>();
</script>

<style scoped>
.map-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-width), var(--cell-size));
  grid-template-rows: repeat(var(--grid-height), var(--cell-size));
  
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  width: calc(var(--grid-width) * var(--cell-size));
  height: calc(var(--grid-height) * var(--cell-size));
}
</style>