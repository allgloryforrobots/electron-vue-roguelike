<template>
  <div class="select">
    <select
      class="select__native"
      :value="modelValue"
      @change="handleChange"
      :class="{ 'select__native--has-value': modelValue }"
    >
      <option disabled value="" class="select__option select__option--default">
        {{ defaultText }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        class="select__option"
      >
        {{ option }}
      </option>
    </select>
    <div class="select__arrow">
      <svg class="select__arrow-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="var(--accent-color-2)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  options: string[]
  modelValue?: string | null
  defaultText: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  display: inline-block;
  width: 500px;

  &__native {
    background-color: rgba(25, 21, 20, 0.8);
    color: var(--accent-color-2);
    border: 1px solid var(--border-color);
    padding: 10px 40px 10px 15px;
    font-family: inherit;
    border-radius: 2px;
    width: 100%;
    appearance: none;
    cursor: pointer;

    /* Стиль когда значение не выбрано (показываем placeholder) */
    &:not(.select__native--has-value) {
      color: rgba(212, 163, 115, 0.6);
    }

    &:focus {
      outline: none;
      border-color: var(--accent-color-1);
      box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
    }
  }

  /* Скрываем дефолтный пункт ТОЛЬКО в выпадающем списке */
  &__option--default {
    display: none;
  }

  /* Показываем дефолтный пункт когда select закрыт и значение не выбрано */
  &__native:not(.select__native--has-value) {
    .select__option--default {
      display: block;
    }
  }

  &__option {
    display: block;
    color: var(--accent-color-2);

    &:hover {
      background-color: red !important;
    }

    &:not(.select__option--default) {
      display: block;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__arrow-icon {
    /* Стили для иконки стрелки */
  }
}
</style>