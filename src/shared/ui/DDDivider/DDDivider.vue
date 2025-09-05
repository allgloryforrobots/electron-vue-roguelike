<template>
  <div class="dd-divider">
    <slot>Или</slot>
  </div>
</template>

<style scoped lang="scss">
    .dd-divider {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 30px 0;
        color: var(--accent-color-6);
    }

    .dd-divider::before,
    .dd-divider::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid var(--border-color);
    }

    .dd-divider::before {
        margin-right: 15px;
    }

    .dd-divider::after {
        margin-left: 15px;
    }
</style>