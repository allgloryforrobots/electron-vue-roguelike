<template>
  <MapContainer class="mask_container">
    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        class="mask_cell"
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

const mapStore = useMapStore();

const onHover = (_: MouseEvent, x: number, y: number) => {
  mapStore.setHoverCellPosition({ x, y });
};

const onLeave = () => {
  mapStore.clearHoverCellPosition();
};

const onClick = () => {
  mapStore.onHoverCellClick();
}

</script>

<style scoped>
.mask_container {
  cursor: none;
}
.mask_cell:hover {
  box-shadow: inset 0 0 8px 2px var(--accent-color-4);
}
</style>