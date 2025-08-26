<template>
  <div class="dd-card">
    <slot />
  </div>
</template>

<!-- <DDCard>
  <h4>Заголовок карточки</h4>
  <p>Содержимое карточки с описанием или другой информацией.</p>
</DDCard> -->

<style scoped>
    .dd-card {
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--border-color);
        padding: 20px;
        border-radius: 4px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .dd-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
    }

    .dd-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        border-color: var(--accent-color-8);
    }
</style>

