<template>
  <span :class="['badge', `badge--${props.type}`]">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
    import { withDefaults } from 'vue';
    interface Props {
        type?: 'common' | 'important' | 'warn';
    }
    const props = withDefaults(defineProps<Props>(), {
        type: 'common'
    });
</script>

<style scoped lang="scss">
    .badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: bold;
        margin: 0 5px;

        &--warn {
            background: linear-gradient(145deg, var(--accent-color-3), var(--accent-color-4));
            color: var(--accent-color-2);
        }

        &--important {
            background: linear-gradient(145deg, var(--accent-color-5), var(--accent-color-6));
            color: var(--accent-color-2);
        }

        &--common {
            background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
            color: var(--background-color-medium);
        }
    }
</style>