<template>
  <div class="map-grid">
    <template v-for="(row, y) in fovMap" :key="y">
      <Cell
        v-for="(isVisible, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :class="{ 'not-visible': !isVisible }"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { FOVCalculator } from '../lib/FOV';
import { usePlayerStore } from '@/entities/Player';
import { MapType } from '@/entities/Map/types/GridTypes';
import Cell from '@/widgets/Grid/ui/Cell.vue';

const playerStore = usePlayerStore();

const props = defineProps<{
  map: MapType;
}>();

const fovMap = ref<boolean[][]>([]);
let fovCalculator: FOVCalculator | null = null;

onMounted(() => {
  fovCalculator = new FOVCalculator(props.map);
  updateFOV();
});

watch(
  () => [
    playerStore.player.position.x,
    playerStore.player.position.y,
    playerStore.player.direction
  ],
  () => {
    if (fovCalculator) {
      updateFOV();
    }
  },
  { immediate: false }
);

function updateFOV() {
  const { x, y } = playerStore.player.position;
  const direction = playerStore.player.direction;
  fovMap.value = fovCalculator!.calculateFOVWithDirection(x, y, direction, 12);
}
</script>

<style scoped>
.not-visible {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>