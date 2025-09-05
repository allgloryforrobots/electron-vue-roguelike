<template>
  <div class="map-grid">
    <template v-for="(row, y) in map">
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
          // только для тестов алгоритма нахождения пути
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
  import { TerrainsTypesEnum } from '../../../entities/Map/types/GridTypes';
  import { MapType } from '../../../entities/Map/types/GridTypes';
  import Cell from './Cell.vue';

  defineProps<{
    map: MapType;
  }>();
</script>

<style>
  .map-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-row-length), var(--cell-size));
    grid-auto-columns: var(--cell-size);
    grid-auto-rows: var(--cell-size);
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    width: 100%;
    height: calc(100% - var(--navbar-height));
  }
</style>