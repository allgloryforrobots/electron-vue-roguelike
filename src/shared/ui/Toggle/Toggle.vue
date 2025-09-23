<template>
  <div class="toggle-container">
    <label v-for="(toggle, index) in toggles" :key="index" class="toggle-item">
      <span>{{ toggle.label }}</span>
      <label class="switch">
        <input 
          v-model="toggle.checked" 
          type="checkbox"
          @change="$emit('toggle-change', { index, value: toggle.checked })"
        >
        <span class="slider"></span>
      </label>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    toggles: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 
          typeof item.label === 'string' && 
          typeof item.checked === 'boolean'
        )
      }
    }
  },
  emits: ['toggle-change']
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
  gap: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
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

.slider:before {
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

input:checked + .slider {
  background-color: var(--accent-color-5);
}

input:checked + .slider:before {
  transform: translateX(26px);
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
}
</style>