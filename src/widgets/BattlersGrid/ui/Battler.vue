<template>
      <div 
        :key="x" 
        class="battler"
      />
</template>

<script lang="ts" setup>

defineProps<{
  x: number;
  y: number;
}>();
</script>

<style scoped>
.battler {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>
