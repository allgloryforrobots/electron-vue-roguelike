
<template>
    <label class="dd-radio-label">
        <input
        type="radio"
        :class="['dd-radio']"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
        :value="value"
        >
        {{ label }}
    </label>
</template>

<script setup lang="ts">
    defineProps<{
        modelValue?: string
        value: string
        label?: string
    }>()

    defineEmits<{
        (e: 'update:modelValue', value: string): void
    }>()
</script>

<style scoped>
    .dd-radio-label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .dd-radio {
        appearance: none;
        width: 18px;
        height: 18px;
        border: 1px solid var(--border-color);
        background-color: rgba(25, 21, 20, 0.8);
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        margin-right: 8px;
    }

    .dd-radio:checked {
        border-color: var(--accent-color-1);
    }

    .dd-radio:checked::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: var(--accent-color-1);
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>