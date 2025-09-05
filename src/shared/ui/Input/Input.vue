<script setup lang="ts">
import { computed, defineProps } from 'vue'
  const props = defineProps({
    variant: {
      type: String,
      default: "primary",
      validator: (value: string) => ["primary", "dark"].includes(value),
    },
  })

const InputtClass = computed(() => [
  "Inputt-field",
  props.variant,
])
</script>

<template>
  <div class="Inputt-container">
    <Inputt id="Inputt" type="text" :class="InputtClass" placeholder="..." />
  </div>
</template>

<style scoped lang="scss">
.Inputt-container {
  position: relative;
  display: inline-block;
  width: 300px;
  margin: 20px;
}

.Inputt-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--accent-color-8);
  border-radius: 3px;
  background-color: #f8f1e5;
  color: #4c3c29;
  font-size: 16px;
  font-family: 'Georgia', serif;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #d67a3b;
    box-shadow: 0 0 8px rgba(214, 122, 59, 0.7);
  }

  &::placeholder {
    color: #8b5e3c;
    font-style: italic;
  }

  &.dark {
    background-color: transparent;
    color: var(--text-color);
    &:focus {
      box-shadow: 0 0 8px rgba(#79A29E, 0.7);
    }
  }
}
</style>
