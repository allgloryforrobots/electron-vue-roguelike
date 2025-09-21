<template>
  <div class="footer">
    <slot />
  </div>
</template>

<style scoped lang="scss">
    .footer {
        text-align: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid var(--border-color);
        color: var(--accent-color-6);
        font-size: 0.9rem;
    }
</style>