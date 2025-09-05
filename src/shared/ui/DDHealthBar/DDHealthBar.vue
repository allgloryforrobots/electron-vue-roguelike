<template>
  <div class="component-card">
    <h2 class="component-title">
      <i class="fas fa-heart"></i> Индикатор здоровья
    </h2>
    <div class="health-container">
      <div v-for="(health, index) in healthBars" :key="index" class="health-item">
        <label>{{ health.label }}</label>
        <div class="dd-health-bar">
          <div 
            class="dd-health-fill" 
            :style="{ 
              width: health.value + '%',
              background: health.background || 'linear-gradient(90deg, var(--accent-color-3), var(--accent-color-4))'
            }"
          ></div>
        </div>
        <span class="health-value">{{ health.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDHealthBar',
  data() {
    return {
      healthBars: [
        { label: 'Здоровье игрока', value: 85 },
        { label: 'Здоровье противника', value: 45, background: 'linear-gradient(90deg, var(--accent-color-3), var(--accent-color-4))' },
        { label: 'Здоровье спутника', value: 65 }
      ]
    }
  }
}
</script>

<style scoped>
.health-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.health-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.health-value {
  align-self: flex-end;
  font-size: 0.9rem;
  color: var(--accent-color-6);
}

.dd-health-bar {
  height: 20px;
  background-color: rgba(56, 47, 39, 0.5);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-color);
}

.dd-health-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease;
  position: relative;
}

.dd-health-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: dd-health-pulse 2s infinite;
}

@keyframes dd-health-pulse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>