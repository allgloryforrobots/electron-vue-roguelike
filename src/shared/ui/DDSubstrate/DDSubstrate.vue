<template>
    <div class="dd-substrate">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .dd-substrate {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--border-color);
        border-radius: 4px;
        color: var(--accent-color-2);
    }
</style>