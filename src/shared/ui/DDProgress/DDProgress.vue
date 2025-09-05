<template>
  <div class="dd-progress">
    <div class="dd-progress-bar" :style="{ width: `${value}%` }"></div>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        value: number
    }>()
</script>

<style scoped>
    .dd-progress {
        width: 100%;
        height: 20px;
        background-color: rgba(25, 21, 20, 0.8);
        border: 1px solid var(--border-color);
        border-radius: 2px;
        overflow: hidden;
    }

    .dd-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--accent-color-8), var(--accent-color-1));
        transition: width 0.3s ease;
    }
</style>