<script setup lang="ts">
import { FOVGrid } from '@/widgets/FOVGrid';
import { Grid } from '@/widgets/Grid';
import { Pathfinder } from '@/entities/Map';
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { usePlayerStore } from '@/entities/Player';
import { Direction } from '@/shared/model/Direction/Direction';
import { BattlersGrid } from '@/widgets/BattlersGrid';
import { PathfindingGrid } from '@/widgets/PathfindingGrid';
import { useMapStore } from '@/entities/Map/model/mapStore/mapStore';
import { TargetMaskGrid } from '@/widgets/TargetMaskGrid';

const playerStore = usePlayerStore();
const mapStore = useMapStore();
mapStore.generateMap({});
mapStore.generateEnemies({});
playerStore.player.position.x = 1; 
playerStore.player.position.y = 1;
const mapWithPath = ref();

const handleKeyDown = (event: KeyboardEvent) => {

  if (!mapStore.map) {
    return;
  }

  let newX = playerStore.player.position.x;
  let newY = playerStore.player.position.y;
  
  switch(event.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      if (playerStore.player.direction !== Direction.UP) {
        playerStore.player.direction = Direction.UP;
        return;
      }
      newY -= 1;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      if (playerStore.player.direction !== Direction.DOWN) {
        playerStore.player.direction = Direction.DOWN;
        return;
      }
      newY += 1;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      if (playerStore.player.direction !== Direction.LEFT) {
        playerStore.player.direction = Direction.LEFT;
        return;
      }
      newX -= 1;
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      if (playerStore.player.direction !== Direction.RIGHT) {
        playerStore.player.direction = Direction.RIGHT;
        return;
      }
      newX += 1;
      break;
  }
  // Проверяем, что новые координаты в пределах карты и клетка проходима
  if (Pathfinder.isPassable(newX, newY, mapStore.map)) {
    playerStore.player.position.x = newX;
    playerStore.player.position.y = newY;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});


watchEffect(() => {
  if (mapStore.map) {
    const result = Pathfinder.findPath(mapStore.map, playerStore.player.position.x, playerStore.player.position.y, 45, 25);

    if (result.success) {
      // Визуализируем путь
      mapWithPath.value = Pathfinder.visualizePath(mapStore.map, result.path);
    } else {
      console.log('Путь не найден');
    }
  }

});
</script>

<template>
  <Grid v-if="mapStore.map" />
  <BattlersGrid v-if="mapStore.map" />
  <FOVGrid v-if="mapStore.map" :map="mapStore.map" :width="mapStore.mapWidth" :height="mapStore.mapHeight" />
  <PathfindingGrid v-if="mapWithPath" :map="mapWithPath" :width="mapStore.mapWidth" :height="mapStore.mapHeight" />
  <TargetMaskGrid v-if="mapStore.map" />
</template>

<style>
</style>
