<template>
    <input
        :class="['dd-input']"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        v-bind="$attrs"
    >
</template>

<script setup lang="ts">
    defineProps<{
        modelValue?: string
    }>()

    defineEmits<{
        (e: 'update:modelValue', value: string): void
    }>()
</script>

<style scoped>
    .dd-input {
        background-color: rgba(25, 21, 20, 0.8);
        color: var(--accent-color-2);
        border: 1px solid var(--border-color);
        padding: 10px 15px;
        font-family: inherit;
        border-radius: 2px;
        width: 100%;
        transition: all 0.3s ease;
    }

    .dd-input:focus {
        outline: none;
        border-color: var(--accent-color-1);
        box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
    }
</style>