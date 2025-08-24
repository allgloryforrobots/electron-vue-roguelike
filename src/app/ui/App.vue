<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { elf } from '@/entities/Battler/model/Battler';
import { RouterView } from 'vue-router';
  console.log(elf)
</script>

<style scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
</style>