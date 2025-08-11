<template>
  <Grid v-if="map" :map="map"/>
</template>

<script setup lang="ts">
import { Grid } from '@/widgets/Grid'
import { MapGenerator } from '@/widgets/Grid/lib/GridGeneration';
import { ref } from 'vue';
  const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
  const generatedMap = generator.generateMap();
  const map = ref();
  map.value = generatedMap;
  console.log(map)
</script>
<style>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>