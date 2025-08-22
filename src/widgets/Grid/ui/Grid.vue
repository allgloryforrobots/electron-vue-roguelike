<template>
  <div class="map-grid">
    <template v-for="(row, y) in map" >
      <Cell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`" 
        :x="x"
        :y="y"
        :cell="cell"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { MapType } from '../types/GridTypes';
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

  .background_brown-earth {
    background-color: #504129;
    background-image: 
      /* Трещины (более крупный шум) */
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='cracksFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -5 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cracksFilter)' opacity='0.05'/%3E%3C/svg%3E"),
      /* Основной шум */
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
    
    background-size: 
      200px 200px, /* Трещины */
      100px 100px; /* Шум */
    
    background-attachment: fixed;
    background-repeat: repeat;
  }
</style>