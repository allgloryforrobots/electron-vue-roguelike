<template>
  <div class="slider-item">
    <label v-if="label">{{ label }}</label>
    <div class="slider-wrapper">
      <input 
        ref="sliderInput"
        :value="modelValue"
        type="range" 
        class="range"
        :min="min" 
        :max="max"
        :step="step"
        @input="handleInput($event)"
      >
      <div class="slider-track">
        <div 
          class="slider-fill" 
          :style="{ width: calculateFillWidth() }"
        ></div>
      </div>
    </div>
    <span v-if="showValue" class="slider-value">{{ modelValue }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 50
  },
  label: {
    type: String,
    default: ''
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  showValue: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])
const sliderInput = ref(null)

const calculateFillWidth = () => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100 + '%'
}

const updateSliderStyle = () => {
  if (sliderInput.value) {
    const value = ((props.modelValue - props.min) / (props.max - props.min)) * 100
    sliderInput.value.style.setProperty('--slider-fill', `${value}%`)
  }
}

const handleInput = (event) => {
  const value = Number(event.target.value)
  emit('update:modelValue', value)
  emit('change', value)
  updateSliderStyle()
}

// Инициализация стилей после монтирования
onMounted(() => {
  updateSliderStyle()
})

// Следим за изменением modelValue и обновляем стили
watch(() => props.modelValue, () => {
  updateSliderStyle()
})
</script>

<style scoped>
.slider-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
}

.slider-track {
  position: absolute;
  width: 100%;
  height: 8px;
  background: rgba(56, 47, 39, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

.slider-fill {
  position: absolute;
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color-8), var(--accent-color-1));
  border-radius: 4px;
}

.range {
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  background: transparent;
  outline: none;
  position: relative;
  z-index: 2;
  margin: 0;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: var(--accent-color-1);
  border: 2px solid var(--background-color-medium);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.range::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: var(--accent-color-2);
}

.range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--accent-color-1);
  border: 2px solid var(--background-color-medium);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.range::-moz-range-thumb:hover {
  transform: scale(1.1);
  background: var(--accent-color-2);
}

.range::-webkit-slider-track {
  -webkit-appearance: none;
  background: transparent;
  height: 8px;
}

.range::-moz-range-track {
  background: transparent;
  height: 8px;
  border: none;
}

.slider-value {
  align-self: flex-end;
  font-size: 0.9rem;
  color: var(--accent-color-6);
  font-weight: 500;
  min-width: 30px;
  text-align: right;
}

label {
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 500;
}
</style>