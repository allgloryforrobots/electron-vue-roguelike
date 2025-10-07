<template>
  <MapContainer ref="mapContainerRef" class="mask_container" :width="mapStore.mapWidth" :height="mapStore.mapHeight">
    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        class="mask_cell"
        :data-coords="`${x}-${y}`"
        :title="`x: ${cell.x}, y:${cell.y}`"
        @mouseenter="(event: MouseEvent) => onHover(event, x, y)"
        @mouseleave="onLeave"
        @click="onClick"
      />
    </template>
  </MapContainer>
</template>
<script lang="ts" setup>
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
import { useMapStore } from '@/entities/Map/model/mapStore/mapStore';
import { ref, onBeforeUnmount, ComponentPublicInstance } from 'vue';

const mapStore = useMapStore();
const mapContainerRef = ref<ComponentPublicInstance | null>(null);

const onHover = (_: MouseEvent, x: number, y: number) => {
  mapStore.setHoverCellPosition({ x, y });

  const areaCells = mapStore.getCellsInArea(x, y, 2);
  const container = mapContainerRef.value?.$el as HTMLElement;
  if (!container) return;

  clearAreaHighlight();

  areaCells.forEach(cell => {
    const selector = `[data-coords="${cell.x}-${cell.y}"]`;
    const el = container.querySelector(selector);
    if (el) {
      el.classList.add('mask_cell--in-area');
    }
  });
};

const onLeave = () => {
  mapStore.clearHoverCellPosition();
  const container = mapContainerRef.value?.$el as HTMLElement;
  if (container) {
    clearAreaHighlight();
  }
};

const onClick = () => {
  mapStore.onHoverCellClick();
};

const clearAreaHighlight = () => {
  const container = mapContainerRef.value?.$el as HTMLElement;
  const highlighted = container.querySelectorAll('.mask_cell--in-area');
  highlighted.forEach(el => el.classList.remove('mask_cell--in-area'));
};

// На всякий случай очищаем при размонтировании
onBeforeUnmount(() => {
  clearAreaHighlight();
});
</script>

<style lang='scss' scoped>
.mask_container {
  cursor: none;
}

.mask_cell {
  &:hover {
    background-color: var(--accent-color-4);
  }

  &--in-area {
    box-shadow: inset 0 0 8px 2px var(--accent-color-4);
  }
}
</style>