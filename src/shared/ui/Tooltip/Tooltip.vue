<template>
  <span class="tooltip-container">
    <span
      class="tooltip-target"
      @mouseover="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot></slot>
    </span>
    <span
      v-if="visible"
      class="tooltip"
      :style="tooltipStyle"
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
    },
  },
  setup(props) {
    const visible = ref(false);
    const tooltipStyle = ref<Record<string, string>>({})

    const showTooltip = (event: MouseEvent | FocusEvent) => {
      visible.value = true;

      const target = event.target as HTMLElement;
      const { top, left, width, height } = target.getBoundingClientRect()
      const tooltipWidth = 150
      const tooltipHeight = 30

      const style: Record<string, string> = {};
      switch (props.position) {
        case "top":
          style.top = `${top - tooltipHeight}px`
          style.left = `${left + width / 2 - tooltipWidth / 2}px`
          break
        case "right":
          style.top = `${top + height / 2 - tooltipHeight / 2}px`
          style.left = `${left + width}px`
          break
        case "bottom":
          style.top = `${top + height}px`;
          style.left = `${left + width / 2 - tooltipWidth / 2}px`
          break
        case "left":
          style.top = `${top + height / 2 - tooltipHeight / 2}px`
          style.left = `${left - tooltipWidth}px`
          break
      }

      style.position = "absolute"
      tooltipStyle.value = style
    }

    const hideTooltip = () => {
      visible.value = false
    }

    return {
      visible,
      tooltipStyle,
      showTooltip,
      hideTooltip,
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
  z-index: 1000;
  pointer-events: none; /* Prevent interaction with the tooltip */

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
