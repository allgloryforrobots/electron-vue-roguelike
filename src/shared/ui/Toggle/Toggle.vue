<template>
  <div class="component-card">
    <h2 class="component-title">
      <i class="fas fa-toggle-on"></i> Переключатели
    </h2>
    <div class="toggle-container">
      <label v-for="(toggle, index) in toggles" :key="index" class="toggle-item">
        <span>{{ toggle.label }}</span>
        <label class="dd-switch">
          <input v-model="toggle.checked" type="checkbox">
          <span class="dd-slider"></span>
        </label>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDToggle',
  data() {
    return {
      toggles: [
        { label: 'Звуковые эффекты', checked: true },
        { label: 'Фоновная музыка', checked: true },
        { label: 'Режим сложности', checked: false }
      ]
    }
  }
}
</script>

<style scoped>
.toggle-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.toggle-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dd-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.dd-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.dd-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 47, 39, 0.5);
  transition: .4s;
  border-radius: 24px;
  border: 1px solid var(--border-color);
}

.dd-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 2px;
  background: linear-gradient(145deg, var(--accent-color-8), var(--border-color));
  transition: .4s;
  border-radius: 50%;
}

input:checked + .dd-slider {
  background-color: var(--accent-color-5);
}

input:checked + .dd-slider:before {
  transform: translateX(26px);
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
}
</style>