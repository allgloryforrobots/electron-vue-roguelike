<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Базовый компонент карточки
</script>

<style scoped lang="scss">
.card {
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  width: fit-content;
  margin: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-color-8);
  }
}
</style>