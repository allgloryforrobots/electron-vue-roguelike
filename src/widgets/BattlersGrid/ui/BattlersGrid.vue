<template>
  <MapContainer>
    <GridCell 
      :key="'player'"
      :x="playerStore.player.position.x"
      :y="playerStore.player.position.y"
    >
      🧙
    </GridCell>
  </MapContainer>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/entities/Player';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';

const playerStore = usePlayerStore();
</script>