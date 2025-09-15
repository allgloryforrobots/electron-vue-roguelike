<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="modelValue ?? false"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: boolean
  label?: string
}>(), {
  modelValue: false,
  label:""
})

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
}

.checkbox__input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid var(--border-color);
  background-color: rgba(25, 21, 20, 0.8);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  margin: 0;
}

.checkbox__input:checked {
  background-color: var(--accent-color-8);
  border-color: var(--accent-color-1);
}

.checkbox__input:checked::after {
  content: "✓";
  position: absolute;
  color: var(--accent-color-2);
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox__label {
  color: var(--text-color);
  font-size: 14px;
  user-select: none;
}
</style>