<template>
  <div class="highlight">
    <h3 v-if="title">
      {{ title }}
    </h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        title?: string;
    }>();
</script>

<style scoped lang="scss">
    .highlight {
        background: linear-gradient(145deg, rgba(212, 163, 115, 0.1), transparent);
        border: 1px solid var(--accent-color-8);
        padding: 25px;
        margin: 25px 0;
        border-radius: 4px;
        position: relative;
        max-width: 500px;
    }

    .highlight::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
    }
</style>