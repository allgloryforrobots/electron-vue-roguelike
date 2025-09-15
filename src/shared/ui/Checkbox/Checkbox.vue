<template>
  <label class="dd-checkbox-label">
    <input
      type="checkbox"
      :class="['dd-checkbox']"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    {{ label }}
  </label>
</template>

<script setup lang="ts">

// const checkbox1 = ref(false)
    defineProps<{
        modelValue?: boolean
        label?: string
    }>()

    defineEmits<{
        (e: 'update:modelValue', value: boolean): void
    }>()
</script>

<style scoped>
    .dd-checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .dd-checkbox {
        appearance: none;
        width: 18px;
        height: 18px;
        border: 1px solid var(--border-color);
        background-color: rgba(25, 21, 20, 0.8);
        border-radius: 2px;
        position: relative;
        cursor: pointer;
        margin-right: 8px;
    }

    .dd-checkbox:checked {
        background-color: var(--accent-color-8);
        border-color: var(--accent-color-1);
    }

    .dd-checkbox:checked::after {
        content: "✓";
        position: absolute;
        color: var(--accent-color-2);
        font-size: 14px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>