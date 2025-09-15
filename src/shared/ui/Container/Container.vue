<template>
  <div class="flex-container" :class="containerClass" :style="containerStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  direction?: "horizontal" | "vertical";
  gap?: number;
}>(), {
  direction: "vertical",
  gap: 50,
});

const containerStyle = computed(() => {
  return `gap: ${props.gap}px;`;
});

const containerClass = computed(() => {
  return `flex-container--${props.direction}`;
});
</script>

<style scoped lang="scss">
.flex-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}

.flex-container--horizontal {
  flex-direction: row;
}
</style>