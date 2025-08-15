<template>
  <div class="frame">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$border-color: #382F27;
.frame {
  position: relative;
  max-width: 700px;
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--border-color);
  padding: 20px;
  outline: 1px solid rgba($border-color, 0.3);
  outline-offset: 3px;
  margin: 50px;
  border-radius: 1px;

  &::before,
  &::after {
    content: '⬦ ⬦ ⬦';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    color: var(--border-color);
  }

  &::before {
    top: -30px;
  }

  &::after {
    bottom: -30px;
  }
}

</style>

<script setup lang="ts">
</script>
