<template>
  <span :class="['dd-badge', `dd-badge-${type}`]">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
    defineProps<{
        type: 'new' | 'update' | 'popular';
    }>();
</script>

<style scoped lang="scss">
    .dd-badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: bold;
        margin: 0 5px;
    }

    .dd-badge-new {
        background: linear-gradient(145deg, var(--accent-color-3), var(--accent-color-4));
        color: var(--accent-color-2);
    }

    .dd-badge-update {
        background: linear-gradient(145deg, var(--accent-color-5), var(--accent-color-6));
        color: var(--accent-color-2);
    }

    .dd-badge-popular {
        background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
        color: var(--background-color-medium);
    }
</style>