<script setup lang="ts">
    import { computed } from 'vue';

    const props = withDefaults(defineProps<{
        direction?: "horizontal" | "vertical",
        gap?: number,
    }>(), {
        direction: "vertical",
        gap: 50,
    })

    const styles = computed(() => {
        return `gap: ${props.gap}px;`;
    });

    const cls = computed(() => {
        return `direction-${props.direction}`;
    });
</script>

<template>
  <div class="container" :class="cls" :style="styles">
    <slot />
  </div>
</template>

<style scoped lang="scss">
    .container {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
    }

    .direction-horizontal {
        flex-direction: row;
    }
</style>