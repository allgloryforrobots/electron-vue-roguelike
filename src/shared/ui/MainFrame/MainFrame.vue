<script setup lang="ts">
  import MainFrameHeader from './MainFrameHeader.vue'
  import MainFrameFooter from './MainFrameFooter.vue'
</script>

<template>
  <div class="container">
    <MainFrameHeader>
      <slot name="header">
      </slot>
    </MainFrameHeader>

    <slot />

    <MainFrameFooter>
      <slot name="footer">
      </slot>
    </MainFrameFooter>
  </div>
</template>

<style scoped lang="scss">
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid var(--border-color);
        background-color: var(--background-color-medium);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        position: relative;
        overflow: hidden;
		border-radius: 2px;
    }

    .container::before {
    content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
    }
</style>