<script setup lang="ts">
defineProps<{
  onClick?: (event: MouseEvent) => void
}>()
</script>

<template>
  <div class="button" @click="onClick">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
$border-color: #382F27;
.button {
  background-color: var(--accent-color-8);
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
  transition: all 0.3s;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  width: 150px;
  border-radius: 1px;
  position: relative;
  outline: 1px solid rgba(#8C6D49, 0.3);
  outline-offset: 3px;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0));
    filter: blur(10px);
    z-index: -1;
    opacity: 0.3;
  }

  &:hover {
    outline: 1px solid rgba(#8C6D49, 0.5);
    background-color: var(--accent-color-1);
  }

  &:active {
    box-shadow: 0 0 8px rgba(#79A29E, 0.7);
  }
}
</style>
