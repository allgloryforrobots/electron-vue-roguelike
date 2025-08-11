<template>
  <Grid v-if="map" :map="map"/>
  <FOVGrig v-if="fovMap" :map="fovMap"/>
</template>

<script setup lang="ts">
import { Grid } from '@/widgets/Grid'
import { FOVCalculator } from '@/widgets/Grid/lib/FOV';
import { MapGenerator } from '@/widgets/Grid/lib/GridGeneration';
import FOVGrig from '@/widgets/Grid/ui/FOVGrig.vue';
import { ref } from 'vue';
  const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
  const generatedMap = generator.generateMap();
  const map = ref();
  map.value = generatedMap;
  const fov = new FOVCalculator(map.value);
  const fovMap = fov.calculateFOV(0, 0, 12);

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