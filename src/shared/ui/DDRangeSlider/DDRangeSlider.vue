<template>
  <div class="component-card">
    <h2 class="component-title"><i class="fas fa-sliders-h"></i> Ползунки</h2>
    <div class="slider-container">
      <div v-for="(slider, index) in sliders" :key="index" class="slider-item">
        <label>{{ slider.label }}</label>
        <input 
          type="range" 
          class="dd-range" 
          v-model="slider.value"
          :min="slider.min" 
          :max="slider.max"
        >
        <span class="slider-value">{{ slider.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDRangeSlider',
  data() {
    return {
      sliders: [
        { label: 'Громкость звука', value: 70, min: 0, max: 100 },
        { label: 'Яркость экрана', value: 80, min: 0, max: 100 },
        { label: 'Чувствительность мыши', value: 50, min: 0, max: 100 }
      ]
    }
  }
}
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.slider-value {
  align-self: flex-end;
  font-size: 0.9rem;
  color: var(--accent-color-6);
}

.dd-range {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: rgba(56, 47, 39, 0.5);
  border-radius: 4px;
  outline: none;
}

.dd-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.dd-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
  cursor: pointer;
  border: 1px solid var(--border-color);
}
</style>