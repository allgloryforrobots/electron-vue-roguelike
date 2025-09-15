<template>
  <header class="page-header">
    <h1 class="page-header__title">
      {{ title }}
    </h1>
    <p 
      v-if="subtitle" 
      class="page-header__subtitle"
    >
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
    defineProps<{
        title: string;
        subtitle?: string;
    }>();
</script>

<style scoped lang="scss">
    .page-header {
        text-align: center;
        border-bottom: 1px solid var(--border-color);

        &__title {
            font-size: 20px;
            color: var(--accent-color-2);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            letter-spacing: 2px;
            font-variant: small-caps;
            margin: 4px;
        }

        &__subtitle {
            font-style: italic;
            color: var(--accent-color-6);
            font-size: 1.2rem;
            margin: 0;
        }
    }
</style>