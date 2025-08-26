<template>
  <div class="dd-tooltip">
    <slot />
    <div class="dd-tooltip-text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        text: string
    }>()
</script>

<style scoped>
    .dd-tooltip {
        position: relative;
        display: inline-block;
    }

    .dd-tooltip-text {
        visibility: hidden;
        background-color: var(--background-color-medium);
        color: var(--accent-color-2);
        text-align: center;
        border: 1px solid var(--border-color);
        padding: 10px;
        border-radius: 4px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
        width: 200px;
    }

    .dd-tooltip:hover .dd-tooltip-text {
        visibility: visible;
        opacity: 1;
    }
</style>