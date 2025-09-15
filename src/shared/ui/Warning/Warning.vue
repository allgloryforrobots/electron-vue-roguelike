<template>
  <div class="dd-warning">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string;
        content: string;
    }>();
</script>

<style scoped lang="scss">
    .dd-warning {
        background: linear-gradient(to right, rgba(209, 96, 61, 0.15), transparent);
        border-left: 4px solid var(--accent-color-3);
        padding: 20px;
        margin: 20px 0;
        border-radius: 0 4px 4px 0;
        position: relative;
    }

    .dd-warning::before {
        content: "⚠";
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background: var(--accent-color-3);
        color: var(--background-color-medium);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }
</style>