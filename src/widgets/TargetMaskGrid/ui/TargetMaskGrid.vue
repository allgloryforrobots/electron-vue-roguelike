<template>
  <MapContainer class="mask_container">
    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        class="mask_cell"
        :class="{
          'mask_cell--in-area': isCellInArea(cell)
        }"
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
import { useMapStore } from '@/pages/GamePage/model/mapStore/mapStore';
import { GroundCell } from '@/shared/model/Cell/Cell';
import { ref } from 'vue';

const mapStore = useMapStore();

const areaCells = ref<GroundCell[]>();

const onHover = (_: MouseEvent, x: number, y: number) => {
  mapStore.setHoverCellPosition({ x, y });

  areaCells.value = mapStore.getCellsInArea(x, y, 2);
  console.log('areaCells', areaCells)
};

const onLeave = () => {
  mapStore.clearHoverCellPosition();
};

const onClick = () => {
  mapStore.onHoverCellClick();
}

const isCellInArea = (cell: GroundCell): boolean => {
  if (areaCells.value?.some(c => c.id === cell.id)) {
    return true;
  }

  return false;
}

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