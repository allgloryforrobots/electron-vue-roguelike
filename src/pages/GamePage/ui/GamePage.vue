<script setup lang="ts">
  import { FOVCalculator, FOVGrid } from '@/widgets/FOVGrid';
  import { Grid } from '@/widgets/Grid';
  import { BattlersGrid } from '@/widgets/BattlersGrid';
  import { MapGenerator } from '@/features/mapGeneration';
  import { Navbar } from '@/widgets/Navbar';
  import { onMounted, onUnmounted, ref } from 'vue';
  import { TerrainsTypesEnum } from '@/widgets/Grid';
  import { usePlayerStore } from '@/entities/Player';

  const playerStore = usePlayerStore();

  const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
  const generatedMap = generator.generateMap();
  const map = ref();
  map.value = generatedMap;

  // Функция проверки проходимости клетки
  const isPassable = (x: number, y: number): boolean => {
    if (!map.value) return false;
    return map.value?.[y]?.[x]?.type === TerrainsTypesEnum.EMPTY;
  };

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
    if (isPassable(newX, newY)) {
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
