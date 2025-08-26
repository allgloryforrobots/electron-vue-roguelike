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
  import { Direction, FOVCalculator } from '../lib/FOV';
  import { usePlayerStore } from '@/entities/Player';
  import { MapType } from '@/entities/Map';

  const playerStore = usePlayerStore();

  const props = defineProps<{
    map: MapType;
  }>();

  const fovMap = ref();
  const fov = ref();
  fov.value = new FOVCalculator(props.map);

  watchEffect(() => {
    fovMap.value = fov.value.calculateFOVWithDirection(
      playerStore.playerX, 
      playerStore.playerY, 
      Direction.RIGHT,
      12
    );
  });

</script>

<style scoped>
</style>