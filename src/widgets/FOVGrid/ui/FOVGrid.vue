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
  import { ref, watch } from 'vue';
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

  watch(
    [() => fov.value, () => playerStore.player.position, () => playerStore.player.direction],
    () => {
      fovMap.value = fov.value.calculateFOVWithDirection(
        playerStore.player.position.x, 
        playerStore.player.position.y, 
        playerStore.player.direction,
        12
      );
    },
    { immediate: true }
);

</script>

<style scoped>
</style>