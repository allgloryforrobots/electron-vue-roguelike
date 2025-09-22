<template>
  <div class="select-wrapper">
    <select
      class="select"
      :value="modelValue"
      @change="handleChange"
      :class="{ 'has-value': modelValue }"
    >
      <option disabled value="" class="default-option">
        Please select one
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div class="select-arrow">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="var(--accent-color-2)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    options: string[]
    modelValue?: string | null
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
    .select-wrapper {
        position: relative;
        display: inline-block;
        width: 500px;
    }

    .select {
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
        &:not(.has-value) {
            color: rgba(212, 163, 115, 0.6);
        }
    }

    /* Скрываем дефолтный пункт ТОЛЬКО в выпадающем списке */
    .select option.default-option {
        display: none;
    }

    /* Показываем дефолтный пункт когда select закрыт и значение не выбрано */
    .select:not(.has-value) {
        option.default-option {
            display: block;
        }
    }

    .select:focus {
        outline: none;
        border-color: var(--accent-color-1);
        box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
    }

    .select-arrow {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .select option:not(.default-option) {
        display: block;
        color: var(--accent-color-2);
        
        &:hover {
            background-color: red !important;
        }
    }
</style>