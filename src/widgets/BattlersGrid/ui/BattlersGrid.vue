<template>
  <div class="map-grid">
    <GridCell 
      :key="'player'"
      :x="playerStore.player.position.x"
      :y="playerStore.player.position.y"
    >
      🧙
    </GridCell>
  </div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/entities/Player';
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
const playerStore = usePlayerStore();

</script>

<style>
</style>