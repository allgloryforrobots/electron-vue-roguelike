<template>
  <div class="toggle">
    <label 
      v-for="(toggle, index) in toggles" 
      :key="index" 
      class="toggle__item"
    >
      <span class="toggle__label">{{ toggle.label }}</span>
      <label class="toggle__switch">
        <input 
          v-model="toggle.checked"
          class="toggle__input" 
          type="checkbox"
          @change="$emit('toggle-change', { index, value: toggle.checked })"
        >
        <span class="toggle__slider"></span>
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
.toggle {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.toggle__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.toggle__label {
  font-size: 14px;
  color: var(--text-color);
}

.toggle__switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle__slider {
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

.toggle__slider::before {
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

.toggle__input:checked + .toggle__slider {
  background-color: var(--accent-color-5);
}

.toggle__input:checked + .toggle__slider::before {
  transform: translateX(26px);
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
}

/* Модификаторы */
.toggle__item--disabled .toggle__label {
  color: var(--text-color-disabled);
}

.toggle__item--disabled .toggle__slider {
  cursor: not-allowed;
  opacity: 0.6;
}

.toggle__item--disabled .toggle__input {
  cursor: not-allowed;
}

.toggle--horizontal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.toggle--compact {
  gap: 10px;
}

.toggle--compact .toggle__item {
  min-height: 32px;
}
</style>