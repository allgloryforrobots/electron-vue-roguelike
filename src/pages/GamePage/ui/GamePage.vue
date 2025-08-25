<script setup lang="ts">
  import {  FOVGrid } from '@/widgets/FOVGrid';
  import { Grid } from '@/widgets/Grid';
  import { MapGenerator, Pathfinder } from '@/entities/Map';
  import { Navbar } from '@/widgets/Navbar';
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import { usePlayerStore } from '@/entities/Player';
  import { player } from '@/entities/Battler/model/Battler';
  import { moveBattler } from '../lib/movement';
  import { EnemyGenerator } from '@/features/EnemyGenerator';

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
    () => [playerStore.playerX, playerStore.playerY],
    (newCoords, oldCoords) => {
      moveBattler(map.value, player, newCoords, oldCoords);
    },
    { immediate: true }
  );

  playerStore.playerX = 1; 
  playerStore.playerY = 1;

  const handleKeyDown = (event: KeyboardEvent) => {
    let newX = playerStore.playerX;
    let newY = playerStore.playerY;
    
    switch(event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        newY -= 1;
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        newY += 1;
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        newX -= 1;
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        newX += 1;
        break;
      default:
        return;
    }

    // Проверяем, что новые координаты в пределах карты и клетка проходима
    if (Pathfinder.isPassable(newX, newY, map.value)) {
      playerStore.setPlayerX(newX);
      playerStore.setPlayerY(newY);
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
  <Navbar />
  <Grid v-if="map" :map="map"/>
  <BattlersGrid v-if="map"/>
  <FOVGrid v-if="map" :map="map"/>
</template>

<style scoped lang="scss">
</style>
