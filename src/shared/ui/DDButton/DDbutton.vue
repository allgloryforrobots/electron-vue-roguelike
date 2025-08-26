<template>
  <button 
    :class="['dd-button', { 'disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
    defineProps<{
        disabled?: boolean
    }>()

    defineEmits<{
        (e: 'click'): void
    }>()
</script>

<style scoped>
    .dd-button {
        background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
        color: var(--accent-color-2);
        border: 1px solid var(--accent-color-1);
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: inherit;
        position: relative;
        overflow: hidden;
        border-radius: 2px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .dd-button:hover:not(.disabled) {
        background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
        color: var(--accent-color-7);
        box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
    }

    .dd-button.disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>