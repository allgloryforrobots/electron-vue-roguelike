<template>
  <span class="tooltip-container">
    <span
      class="tooltip-target"
      @mouseover="showTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot></slot>
    </span>
    <span
      v-if="visible"
      class="tooltip"
      :class="position"
      aria-hidden="true"
    >
      {{ text }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: {
    text: {
      type: String,
      required: true,
    },
    position: {
      type: String as () => "top" | "right" | "bottom" | "left",
      default: "top",
      validator: (value: string) => {
        return ["top", "right", "bottom", "left"].includes(value);
      }
    },
  },
  setup() {
    const visible = ref(false);

    const hideTooltip = () => {
      visible.value = false
    }

    const showTooltip = () => {
      visible.value = true
    }

    return {
      visible,
      hideTooltip,
      showTooltip
    }
  },
})
</script>

<style scoped>
.tooltip-container {
  display: inline;
  position: relative;
}

.tooltip-target {
  cursor: pointer;
  color: var(--accent-color-2);
}

.tooltip {
  position: absolute;
  background-color: var(--border-color);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  z-index: var(--z-tooltip);
  pointer-events: none;

  &.top {
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.right {
    top: -4px;
    right: -175%;
  }

  &.bottom {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    top: -4px;
    left: -175%;
  }

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
    opacity: 0.1;
  }
}
</style>
