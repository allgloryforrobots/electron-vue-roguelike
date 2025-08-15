<script setup lang="ts">
import { computed, defineProps } from "vue"
const props = defineProps({
  variant: {
    type: String,
    default: "health",
    validator: (value: string) => ["health", "mana"].includes(value),
  },
  percent: {
    type: Number,
    default: 100, // Уровень заполнения по умолчанию (в процентах)
    validator: (value: number) => value >= 0 && value <= 100,
  },
})

const barClass = computed(() => [
  "bar",
  props.variant,
])

const barStyle = computed(() => ({
  width: `${props.percent}%`,
}));

</script>

<template>
  <div class="bar-container">
    <div :class="barClass" :style="barStyle"></div>
    <div class="dividers">
      <div class="divider" style="left: 10%;"></div>
      <div class="divider" style="left: 20%;"></div>
      <div class="divider" style="left: 30%;"></div>
      <div class="divider" style="left: 40%;"></div>
      <div class="divider" style="left: 50%;"></div>
      <div class="divider" style="left: 60%;"></div>
      <div class="divider" style="left: 70%;"></div>
      <div class="divider" style="left: 80%;"></div>
      <div class="divider" style="left: 90%;"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bar-container {
  position: relative;
  width: 400px;
  height: 5px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  overflow: hidden;
  margin: 20px 10px;
}

.bar {
  height: 100%;
  position: relative;
  transition: width 0.3s ease;
  filter: blur(2px);
  background: var(--accent-color-3);

  &.mana {
    background: var(--accent-color-6);
  }
}

.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border-color);
}

.dividers {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  pointer-events: none;
}
</style>
