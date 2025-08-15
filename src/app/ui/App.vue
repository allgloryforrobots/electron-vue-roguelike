<template>
  <!-- <Grid v-if="map" :map="map"/>
  <FOVGrid v-if="fovMap" :map="fovMap"/> -->
  <RouterView />
</template>

<script setup lang="ts">
  import ExamplesPage from '@/pages/ExamplesPage/ui/ExamplesPage.vue';
  import { FOVCalculator, FOVGrid } from '@/widgets/FOVGrid';
  import { Grid } from '@/widgets/Grid';
  import { MapGenerator } from '@/widgets/Grid';
  import { onMounted, onUnmounted, ref } from 'vue';
  import { useRouter, RouterView } from 'vue-router';
  const router = useRouter();
  const generator = new MapGenerator({ width: 50, height: 30, treeDensity: 0.05, clusterDensity: 0.008 });
  const generatedMap = generator.generateMap();
  const map = ref();
  const fov = ref();
  const fovMap = ref();

  const playerX = ref(0);
  const playerY = ref(0);

  map.value = generatedMap;
  fov.value = new FOVCalculator(map.value);
  fovMap.value = fov.value.calculateFOV(playerX.value, playerY.value, 12);

  // Функция проверки проходимости клетки
  const isPassable = (x: number, y: number): boolean => {
    if (!map.value) return false;
    // Предполагаем, что 0 - проходимая клетка, 1 - непроходимая (стена/препятствие)
    // Настройте это условие в соответствии с вашей системой обозначений
    return map.value[y] !== undefined && map.value[y][x] !== undefined //&& map.value[y][x] === 0;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    let newX = playerX.value;
    let newY = playerY.value;
    
    switch(event.key) {
      case 'ArrowUp':
        newY -= 1;
        break;
      case 'ArrowDown':
        newY += 1;
        break;
      case 'ArrowLeft':
        newX -= 1;
        break;
      case 'ArrowRight':
        newX += 1;
        break;
      default:
        return; // Игнорируем другие клавиши
    }

    // Проверяем, что новые координаты в пределах карты и клетка проходима
    if (isPassable(newX, newY)) {
      playerX.value = newX;
      playerY.value = newY;
      fovMap.value = fov.value?.calculateFOV(playerX.value, playerY.value, 12);
    }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  // router.push({ name: 'examples' })
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

</script>
<style scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>