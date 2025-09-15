<template>
  <select
    :class="['dd-select']"
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
    defineProps<{
        options: string[]
        modelValue?: string
    }>()
    // const selectOptions = [
    //   'Выберите опцию',
    //   'Опция 1',
    //   'Опция 2',
    //   'Опция 3'
    // ]

    defineEmits<{
        (e: 'update:modelValue', value: string): void
    }>()
</script>

<style scoped>
    .dd-select {
        background-color: rgba(25, 21, 20, 0.8);
        color: var(--accent-color-2);
        border: 1px solid var(--border-color);
        padding: 10px 15px;
        font-family: inherit;
        border-radius: 2px;
        width: 100%;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D4A373'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 16px;
    }

    .dd-select:focus {
        outline: none;
        border-color: var(--accent-color-1);
        box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
    }
</style>