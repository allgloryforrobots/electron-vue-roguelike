<template>
  <div class="dd-loading">
    <div class="dd-loading-spinner"></div>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        text?: string;
    }>();
</script>

<style scoped lang="scss">
    .dd-loading {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--border-color);
        border-radius: 4px;
        color: var(--accent-color-2);
    }

    .dd-loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid transparent;
        border-top: 2px solid var(--accent-color-1);
        border-radius: 50%;
        animation: dd-spin 1s linear infinite;
    }

    @keyframes dd-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>