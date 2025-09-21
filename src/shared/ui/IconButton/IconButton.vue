<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps<{
    iconCls: string;
  }>()

  const clazz = computed(() => {
    return  "fa-duotone fa-solid " + props.iconCls;
  });
</script>

<template>
  <div class="diamond">
    <i :class="clazz"></i>
  </div>
</template>

<style scoped lang="scss">
.diamond {
  width: 40px;
  height: 40px;
  background-color: var(--border-color);
  outline: 1px solid var(--accent-color-8);
  outline-offset: 3px;
  transform: rotate(45deg);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: all 0.3s;

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
    opacity: 0.2;
  }

  i {
    color: var(--accent-color-1);
    font-size: 20px;
    transform: rotate(-45deg);
  }

  &:hover {
    outline: 1px solid var(--accent-color-1);
    i {
      color: var(--accent-color-2);
    }
  }

  @keyframes iconBlink {
    0% {

    }
    100% {
      color: var(--accent-color-7);
    }
  }

  &:active {
    box-shadow: 0 0 10px 5px var(--accent-color-6);
    transition: box-shadow 2s ease-in-out;
    i {
      animation: iconBlink 2s forwards;
    }
  }
}
</style>
