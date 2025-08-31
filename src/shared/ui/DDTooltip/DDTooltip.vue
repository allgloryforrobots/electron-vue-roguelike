<template>
  <div class="dd-tooltip-container" ref="containerRef">
    <slot />
    <div 
      class="dd-tooltip-bubble" 
      :class="bubbleClass"
      ref="bubbleRef"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps<{
  text: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const bubbleRef = ref<HTMLElement | null>(null)

const position = ref<'right' | 'left' | 'top' | 'bottom'>('right')
const isVisible = ref(false)

// Определяем класс для позиции
const bubbleClass = computed(() => `dd-tooltip-${position.value}`)

// Функция для расчета позиции
const calculatePosition = async () => {
  if (!containerRef.value || !bubbleRef.value) return
  
  // Ждем обновления DOM
  await nextTick()
  
  const containerRect = containerRef.value.getBoundingClientRect()
  const bubbleRect = bubbleRef.value.getBoundingClientRect()
  
  // Пробуем разные позиции, начиная с правой
  const positions = ['right', 'left', 'top', 'bottom'] as const
  
  for (const pos of positions) {
    let testLeft = 0
    let testTop = 0
    
    switch (pos) {
      case 'right':
        testLeft = containerRect.right + 10
        testTop = containerRect.top + (containerRect.height - bubbleRect.height) / 2
        break
      case 'left':
        testLeft = containerRect.left - bubbleRect.width - 10
        testTop = containerRect.top + (containerRect.height - bubbleRect.height) / 2
        break
      case 'top':
        testLeft = containerRect.left + (containerRect.width - bubbleRect.width) / 2
        testTop = containerRect.top - bubbleRect.height - 10
        break
      case 'bottom':
        testLeft = containerRect.left + (containerRect.width - bubbleRect.width) / 2
        testTop = containerRect.bottom + 10
        break
    }
    
    // Проверяем, будет ли тултип виден в этой позиции
    if (
      testLeft >= 0 &&
      testLeft + bubbleRect.width <= window.innerWidth &&
      testTop >= 0 &&
      testTop + bubbleRect.height <= window.innerHeight
    ) {
      position.value = pos
      return
    }
  }
  
  // Если ни одна позиция не подходит, используем правую с корректировками
  position.value = 'right'
}

// Обработчик для скролла
const handleScroll = () => {
  if (isVisible.value) {
    calculatePosition()
  }
}

// Навешиваем обработчики
onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
  
  // Инициализируем позиционирование при монтировании
  calculatePosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
})

// Отслеживаем видимость для перерасчета позиции
watch(isVisible, (newVal) => {
  if (newVal) {
    calculatePosition()
  }
})

// Обработчики для показа/скрытия тултипа
const showTooltip = () => {
  isVisible.value = true
  calculatePosition()
}

const hideTooltip = () => {
  isVisible.value = false
}

// Добавляем обработчики событий
onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('mouseenter', showTooltip)
    containerRef.value.addEventListener('mouseleave', hideTooltip)
  }
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('mouseenter', showTooltip)
    containerRef.value.removeEventListener('mouseleave', hideTooltip)
  }
})
</script>

<style scoped>
.dd-tooltip-container {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.dd-tooltip-bubble {
  position: absolute;
  background: var(--background-color-medium);
  color: var(--accent-color-2);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: var(--z-tooltip);
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dd-tooltip-container:hover .dd-tooltip-bubble {
  opacity: 1;
  visibility: visible;
}

/* Позиционирование через классы */
.dd-tooltip-right {
  left: 100%;
  top: 50%;
  transform: translate(10px, -50%);
}

.dd-tooltip-left {
  right: 100%;
  top: 50%;
  transform: translate(-10px, -50%);
}

.dd-tooltip-top {
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, -10px);
}

.dd-tooltip-bottom {
  left: 50%;
  top: 100%;
  transform: translate(-50%, 10px);
}

/* Стрелочки для тултипа */
.dd-tooltip-bubble::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}

.dd-tooltip-right::before {
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--border-color);
}

.dd-tooltip-left::before {
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--border-color);
}

.dd-tooltip-top::before {
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--border-color);
}

.dd-tooltip-bottom::before {
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--border-color);
}
</style>