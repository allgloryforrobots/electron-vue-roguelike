<template>
  <div 
    class="custom-select" 
    tabindex="0" 
    :class="{ 'select-open': isOpen }" 
    @click="toggleDropdown"
    @blur="closeDropdown"
  >
    <div class="select-selected" :class="{ 'select-arrow-active': isOpen, 'has-value': modelValue }">
      {{ displayText }}
      <div class="select-arrow">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="var(--accent-color-2)" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>
    <div v-show="isOpen" class="select-items">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="select-item"
        :class="{ 
          'selected': modelValue === option,
          'hover': hoveredIndex === index
        }"
        @mousedown="selectOption(option)"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = -1"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  options: string[]
  modelValue?: string | null
  defaultText: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const hoveredIndex = ref(-1)

const displayText = computed(() => {
  return props.modelValue || props.defaultText
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    hoveredIndex.value = -1
  }
}

const closeDropdown = () => {
  isOpen.value = false
  hoveredIndex.value = -1
}

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  closeDropdown()
}

// Закрытие dropdown при клике вне компонента
const handleClickOutside = (event: MouseEvent) => {
  const selectElement = document.querySelector('.custom-select')
  if (selectElement && !selectElement.contains(event.target as Node)) {
    closeDropdown()
  }
}

// Обработка клавиатуры
const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) return

  switch (event.key) {
    case 'Escape':
      closeDropdown()
      break
    case 'Enter':
      if (hoveredIndex.value >= 0 && hoveredIndex.value < props.options.length) {
        selectOption(props.options[hoveredIndex.value])
      }
      break
    case 'ArrowDown':
      event.preventDefault()
      hoveredIndex.value = Math.min(hoveredIndex.value + 1, props.options.length - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      hoveredIndex.value = Math.max(hoveredIndex.value - 1, 0)
      break
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 500px;
  cursor: pointer;
  outline: none;

  &.select-open {
    z-index: 1000;
  }
}

.select-selected {
  background-color: rgba(25, 21, 20, 0.8);
  color: var(--accent-color-2);
  border: 1px solid var(--border-color);
  padding: 10px 40px 10px 15px;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 42px;
  transition: all 0.2s ease;

  &.has-value {
    color: var(--accent-color-2);
  }

  &:not(.has-value) {
    color: rgba(212, 163, 115, 0.6);
  }

  .select-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease;

    svg {
      transition: transform 0.2s ease;
    }
  }

  &.select-arrow-active {
    border-color: var(--accent-color-1);
    box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);

    .select-arrow svg {
      transform: rotate(180deg);
    }
  }
}

.select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(25, 21, 20, 0.95);
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 2px 2px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1001;
}

.select-item {
  padding: 12px 15px;
  color: var(--accent-color-2);
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(212, 163, 115, 0.1);

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &.hover {
    background-color: var(--accent-color-1);
    color: #191514;
  }

  &.selected {
    background-color: rgba(212, 163, 115, 0.2);
    color: var(--accent-color-1);
    font-weight: 500;

    &:hover {
      background-color: var(--accent-color-1);
      color: #191514;
    }
  }
}

// Скрытие скроллбара для Webkit браузеров
.select-items::-webkit-scrollbar {
  width: 6px;
}

.select-items::-webkit-scrollbar-track {
  background: rgba(25, 21, 20, 0.5);
}

.select-items::-webkit-scrollbar-thumb {
  background: var(--accent-color-1);
  border-radius: 3px;
}

.select-items::-webkit-scrollbar-thumb:hover {
  background: var(--accent-color-2);
}
</style>