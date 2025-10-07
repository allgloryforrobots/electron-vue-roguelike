<template>
  <MapContainer
    :width="mapStore.mapWidth" 
    :height="mapStore.mapHeight"
  >
    <GridCell 
      :key="'player'"
      :x="playerStore.player.position.x"
      :y="playerStore.player.position.y"
    >
      🧙
    </GridCell>

    <template v-for="(row, y) in mapStore.map" :key="y">
      <GridCell 
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        :cell="cell"
      >
        <template v-if="cell.battler">
          🐉
        </template>
      </GridCell>
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/entities/Player';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
import { useMapStore } from '@/pages/GamePage';
const mapStore = useMapStore();

const playerStore = usePlayerStore();
</script>