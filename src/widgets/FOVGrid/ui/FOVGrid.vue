<template>
  <MapContainer 
    class="fov-container" 
    :width="mapStore.mapWidth" 
    :height="mapStore.mapHeight"
  >
    <template v-for="(row, y) in fovMap" :key="y">
      <GridCell
        v-for="(isVisible, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :class="{ 
          'not-visible': !isVisible,
          'is-edge': isEdge(x, y) 
        }"
      />
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { FOVCalculator } from '../lib/FOV';
import { usePlayerStore } from '@/entities/Player';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
import { getCellsBehindPlayer } from '../lib/getBackCells';
import { IPosition } from '@/shared/model/Position/Position';
import { useMapStore } from '@/pages/GamePage';
const mapStore = useMapStore();
const playerStore = usePlayerStore();


const fovMap = ref<boolean[][]>([]);
let fovCalculator: FOVCalculator | null = null;

onMounted(() => {
  fovCalculator = new FOVCalculator(mapStore.map);
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

function isEdge(x: number, y: number) {
  return y === 0 ||
  y === fovMap.value.length - 1 ||
  x === 0 ||
  x === fovMap.value[y]?.length - 1
}

function updateFOV() {
  const { x, y } = playerStore.player.position;
  const direction = playerStore.player.direction;
  fovMap.value = fovCalculator!.calculateFOVWithDirection(x, y, direction, 15);

  const { 
    behind, 
    behindDiagonalLeft, 
    behindDiagonalRight 
  } = getCellsBehindPlayer(playerStore.player.position.x, playerStore.player.position.y, playerStore.player.direction);

  function addCell(cell: IPosition) {
      const  {x, y} = cell;
      if (
        y >= 0 &&
        y <= fovMap.value.length &&
        x >= 0 &&
        x <= fovMap.value[y]?.length
    ) {
       fovMap.value[cell.y][cell.x] = true;
    }
  }

  addCell(behind);
  addCell(behindDiagonalLeft);
  addCell(behindDiagonalRight);
  
}
</script>

<style scoped>
.not-visible {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.5);
}

.is-edge {

}

.fov-container {
  overflow: hidden;
}
</style>