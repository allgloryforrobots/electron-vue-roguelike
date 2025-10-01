<script setup lang="ts">
  import {  FOVGrid } from '@/widgets/FOVGrid';
  import { Grid } from '@/widgets/Grid';
  import { MapGenerator, moveBattler, Pathfinder } from '@/entities/Map';
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import { usePlayerStore } from '@/entities/Player';
  import { EnemyGenerator } from '@/features/EnemyGenerator';
  import { Direction } from '@/shared/model/Direction/Direction';
  import { BattlersGrid } from '@/widgets/BattlersGrid';


  const playerStore = usePlayerStore();

  const mapGenerator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
  const map = ref();
  map.value = mapGenerator.generateMap();

  // Генерация врагов на готовой карте
  const enemyGenerator = new EnemyGenerator({
    singleEnemyDensity: 0.015,
    squadDensity: 0.003,
    minSquadSize: 4,
    maxSquadSize: 7
  });
  enemyGenerator.generateEnemies(map.value, 50, 30);

  watch(
    () => [playerStore.player.position.x, playerStore.player.position.y],
    (newCoords, oldCoords) => {
      moveBattler(map.value, playerStore.player, newCoords, oldCoords);
    },
    { immediate: true }
  );

  playerStore.player.position.x = 1; 
  playerStore.player.position.y = 1;

  const handleKeyDown = (event: KeyboardEvent) => {
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
      default:
        return;
    }

    // Проверяем, что новые координаты в пределах карты и клетка проходима
    if (Pathfinder.isPassable(newX, newY, map.value)) {
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
</script>

<template>
  <Grid v-if="map" :map="map" />
  <BattlersGrid />
  <FOVGrid v-if="map" :map="map" />
</template>

<style scoped lang="scss">
</style>
