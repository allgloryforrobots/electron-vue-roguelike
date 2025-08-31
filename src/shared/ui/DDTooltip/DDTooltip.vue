<template>
  <div class="dd-tooltip-container" ref="containerRef">
    <slot />
    <div 
      class="dd-tooltip-bubble" 
      :class="bubbleClass"
      :style="bubbleStyle"
      ref="bubbleRef"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  text: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const bubbleRef = ref<HTMLElement | null>(null)

const position = ref<'right' | 'left' | 'top' | 'bottom'>('right')
const bubbleStyle = ref({})
const isVisible = ref(false)

// Определяем класс для позиции
const bubbleClass = computed(() => `dd-tooltip-${position.value}`)

// Функция для проверки видимости элемента
const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Функция для расчета позиции
const calculatePosition = () => {
  if (!containerRef.value || !bubbleRef.value) return

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
    
    // Создаем временный элемент для проверки видимости
    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'fixed'
    tempDiv.style.left = `${testLeft}px`
    tempDiv.style.top = `${testTop}px`
    tempDiv.style.width = `${bubbleRect.width}px`
    tempDiv.style.height = `${bubbleRect.height}px`
    tempDiv.style.visibility = 'hidden'
    document.body.appendChild(tempDiv)
    
    const isVisible = isElementInViewport(tempDiv)
    document.body.removeChild(tempDiv)
    
    if (isVisible) {
      position.value = pos
      updateBubbleStyle()
      return
    }
  }
  
  // Если ни одна позиция не подходит, используем правую с корректировками
  position.value = 'right'
  updateBubbleStyle()
}

const updateBubbleStyle = () => {
  if (!containerRef.value) return

  const containerRect = containerRef.value.getBoundingClientRect()
  
  switch (position.value) {
    case 'right':
      bubbleStyle.value = {
        left: '100%',
        top: '50%',
        transform: 'translate(10px, -50%)'
      }
      break
    case 'left':
      bubbleStyle.value = {
        right: '100%',
        top: '50%',
        transform: 'translate(-10px, -50%)'
      }
      break
    case 'top':
      bubbleStyle.value = {
        left: '50%',
        bottom: '100%',
        transform: 'translate(-50%, -10px)'
      }
      break
    case 'bottom':
      bubbleStyle.value = {
        left: '50%',
        top: '100%',
        transform: 'translate(-50%, 10px)'
      }
      break
  }
}

// Обработчики для респонсивности
const handleResize = () => {
  if (isVisible.value) {
    calculatePosition()
  }
}

const handleScroll = () => {
  if (isVisible.value) {
    calculatePosition()
  }
}

// Навешиваем обработчики
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll, true)
})

// Отслеживаем видимость для перерасчета позиции
watch(isVisible, (newVal) => {
  if (newVal) {
    calculatePosition()
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

/* Дополнительные стили для разных позиций */
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

/* Стрелочки для тултипа (опционально) */
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