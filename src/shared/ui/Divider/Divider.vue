<template>
  <div class="divider" :class="{ 'has-content': hasContent }">
    <slot v-if="hasContent" />
    <span v-else class="hidden-content" aria-hidden="true"></span>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';

const slots = useSlots();
const hasContent = computed(() => {
  return slots.default && slots.default().length > 0;
});
</script>

<style scoped lang="scss">
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 0;
  color: var(--accent-color-6);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border-color);
}

.divider::before {
  margin-right: 15px;
}

.divider::after {
  margin-left: 15px;
}

// Стили для случая без контента
.divider:not(.has-content) {
  &::before,
  &::after {
    margin: 0;
  }
}

// Скрытый элемент для сохранения структуры
.hidden-content {
  display: none;
}
</style>