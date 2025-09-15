<template>
  <div class="achievement">
    <div class="achievement__icon-container">
      <div class="achievement__icon">
        {{ icon }}
      </div>
    </div>
    <div class="achievement__content">
      <h3 class="achievement__title">
        {{ title }}
      </h3>
      <p class="achievement__description">
        {{ description }}
      </p>
      <small v-if="date" class="achievement__date">Получено: {{ date }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string;
        description: string;
        icon?: string;
        date?: string;
    }>();
</script>

<style scoped lang="scss">
    .achievement {
        background: linear-gradient(145deg, rgba(140, 109, 73, 0.2), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--accent-color-8);
        padding: 20px;
        margin: 20px 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .achievement__icon-container {
        width: 50px;
        height: 50px;
        background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        flex-shrink: 0;

		.achievement__icon {
			transform: translateY(-1px);
		}
    }

    .achievement__title {
        color: var(--accent-color-2);
        margin-bottom: 5px;
    }
</style>