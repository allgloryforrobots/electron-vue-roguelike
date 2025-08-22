<template>
  <div class="map-grid">
    <template v-for="(row, y) in fovMap" >
      <FOVCell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`" 
        :x="x"
        :y="y"
        :visible="cell"
      />
    </template>
  </div>

</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import FOVCell from './FOVCell.vue';
  import { FOVCalculator } from '../lib/FOV';
  import { usePlayerStore } from '@/entities/Player';
  import { MapType } from '@/widgets/Grid';

  const playerStore = usePlayerStore();

  const props = defineProps<{
    map: MapType;
  }>();

  const fovMap = ref();
  const fov = ref();
  fov.value = new FOVCalculator(props.map);

  watchEffect(() => {
    fovMap.value = fov.value.calculateFOV(
      playerStore.playerX, 
      playerStore.playerY, 
      12
    );
  });

</script>

<style scoped>
</style>