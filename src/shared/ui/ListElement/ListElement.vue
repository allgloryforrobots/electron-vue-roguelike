<script setup lang="ts">
import { audioLibrary, playAudio } from '@/shared/utils/useAudio/useAudio'

  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'default',
    },
    tooltip: {
      type: String,
      default: undefined,
    },
  })

  const emit = defineEmits(['click'])

  const handleClick = (event: MouseEvent) => {
    if (!props.disabled) {
      playAudio(audioLibrary.lightSwitch)
      emit('click', event)
    }
  }

const handleMouseEnter = () => {
  if (!props.disabled) {
    playAudio(audioLibrary.hover)
  }
}
</script>

<template>
  <button
    class="list-element"
    :disabled="disabled"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
  >
    <slot />
    <span v-if="tooltip" class="tooltip">
      {{ tooltip }}
    </span>
  </button>
</template>

<style scoped lang="scss">
$border-color: #382F27;

.list-element {
  all: unset;
  position: relative;
  letter-spacing: 1px;
  transition: all 0.1s;
  padding: 8px 18px  ;
  border: 1px solid var(--border-color);
  outline: 1px solid rgba($border-color, 0.3);
  outline-offset: 3px;
  text-align: center;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::before {
    position: absolute;
    transform: scale(1.05);
    background-color:var( --hover-color);
    content: '';
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    z-index: -1;
    filter: blur(15px);
    opacity: 0.5;
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--border-color);
    color: #fff;
    padding: 10px 15px;
    font-size: 14px;
    transition: opacity 0.3s, visibility 0.3s;
    opacity: 0;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    width: 150px;
    border-radius: 1px;

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
  }

  &:hover {
    .tooltip {
      visibility: visible;
      opacity: 1;
    }

    &::before {
      opacity: 1;
    }
  }

  &.square {
    width: 100px;
    height: 100px;
    &::before {
      opacity: 0.2;
    }

    &:hover {
      &::before {
        opacity: 0.4;
      }
    }
  }

  &:active {
    box-shadow: 0 0 4px rgba(#79A29E, 0.5);
  }

}

.list-element ::v-deep(i) {
  font-size: 12px;
}

</style>
