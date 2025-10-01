<template>
  <div class="map-grid">
    <Cell 
      :key="'player'"
      :x="playerStore.player.position.x"
      :y="playerStore.player.position.y"
    >
      🧙
    </Cell>
  </div>
</template>

<script lang="ts" setup>
import Cell from '@/widgets/Grid/ui/Cell.vue';
import { usePlayerStore } from '@/entities/Player';
const playerStore = usePlayerStore();

</script>

<style>
</style>