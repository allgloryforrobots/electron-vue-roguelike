<template>
  <div class="header">
    <slot />
  </div>
</template>

<style scoped lang="scss">
    .header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--border-color);
        position: relative;
    }

    .header h1 {
        font-size: 2.5rem;
        color: var(--accent-color-2);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        letter-spacing: 2px;
        font-variant: small-caps;
    }

    .header p {
        font-style: italic;
        margin-top: 10px;
        color: var(--accent-color-6);
    }
</style>