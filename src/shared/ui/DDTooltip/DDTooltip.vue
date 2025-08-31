<template>
  <div 
    class="dd-tooltip-container" 
    ref="containerRef"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot />
  </div>

  <Teleport to="body" v-if="isVisible && tooltip">
    <div 
      class="dd-tooltip-bubble" 
      :class="bubbleClass"
      ref="bubbleRef"
      :style="bubbleStyle"
    >
      {{ tooltip.text }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps<{
  tooltip: {
    text: string
  } | null
}>()

const containerRef = ref<HTMLElement | null>(null)
const bubbleRef = ref<HTMLElement | null>(null)

const position = ref<'right' | 'left' | 'top' | 'bottom'>('right')
const isVisible = ref(false)
const bubblePosition = ref({ top: 0, left: 0 })

// Определяем класс для позиции
const bubbleClass = computed(() => `dd-tooltip-${position.value}`)

// Стили для позиционирования через портал
const bubbleStyle = computed(() => ({
  top: `${bubblePosition.value.top}px`,
  left: `${bubblePosition.value.left}px`,
}))

// Функция для расчета позиции
const calculatePosition = async () => {
  if (!containerRef.value || !bubbleRef.value) return
  
  // Ждем обновления DOM
  await nextTick()
  
  const containerRect = containerRef.value.getBoundingClientRect()
  const bubbleRect = bubbleRef.value.getBoundingClientRect()
  
  // Добавляем scroll offset для абсолютного позиционирования
  const scrollX = window.scrollX || window.pageXOffset
  const scrollY = window.scrollY || window.pageYOffset
  
  // Пробуем разные позиции, начиная с правой
  const positions = ['right', 'left', 'top', 'bottom'] as const
  const offset = 20;
  
  for (const pos of positions) {
    let testLeft = 0
    let testTop = 0
    
    switch (pos) {
      case 'right':
        testLeft = containerRect.right + offset + scrollX
        testTop = containerRect.top + (containerRect.height - bubbleRect.height) / 2 + scrollY
        break
      case 'left':
        testLeft = containerRect.left - bubbleRect.width - offset + scrollX
        testTop = containerRect.top + (containerRect.height - bubbleRect.height) / 2 + scrollY
        break
      case 'top':
        testLeft = containerRect.left + (containerRect.width - bubbleRect.width) / 2 + scrollX
        testTop = containerRect.top - bubbleRect.height - offset + scrollY
        break
      case 'bottom':
        testLeft = containerRect.left + (containerRect.width - bubbleRect.width) / 2 + scrollX
        testTop = containerRect.bottom + offset + scrollY
        break
    }
    
    // Проверяем, будет ли тултип виден в этой позиции
    if (
      testLeft >= scrollX &&
      testLeft + bubbleRect.width <= window.innerWidth + scrollX &&
      testTop >= scrollY &&
      testTop + bubbleRect.height <= window.innerHeight + scrollY
    ) {
      position.value = pos
      bubblePosition.value = { top: testTop, left: testLeft }
      return
    }
  }
  
  // Если ни одна позиция не подходит, используем правую с корректировками
  position.value = 'right'
  bubblePosition.value = {
    top: containerRect.bottom + 10 + scrollY,
    left: containerRect.left + scrollX
  }
}

// Обработчик для скролла и ресайза
const handleScrollResize = () => {
  if (isVisible.value) {
    calculatePosition()
  }
}

// Навешиваем обработчики
onMounted(() => {
  window.addEventListener('scroll', handleScrollResize, true)
  window.addEventListener('resize', handleScrollResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollResize, true)
  window.removeEventListener('resize', handleScrollResize)
})

// Отслеживаем видимость для перерасчета позиции
watch(isVisible, (newVal) => {
  if (newVal) {
    nextTick(() => {
      calculatePosition()
    })
  }
})

// Обработчики для показа/скрытия тултипа
const showTooltip = () => {
  if (props.tooltip) {
    isVisible.value = true
  }
}

const hideTooltip = () => {
  isVisible.value = false
}
</script>

<style>
.dd-tooltip-container {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 10px;
  isolation: isolate;
}

.dd-tooltip-bubble {
  position: fixed;
  width: 300px;
  height: fit-content;
  background: var(--background-color-medium);
  color: var(--accent-color-2);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  z-index: var(--z-tooltip);
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: tooltipFadeIn 0.3s ease;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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