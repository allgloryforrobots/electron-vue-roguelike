<template>
  <div class="component-card">
    <nav class="navbar">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        :class="['navbar__item', { 'navbar__item--active': $route.path === item.route }]"
      >
        {{ item.title }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navItems: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  border: 1px solid var(--accent-color-1);
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
  width: fit-content;

  &__item {
    padding: 0 10px;
    color: var(--accent-color-2);
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
    transition: all 0.3s ease;
    border-right: 1px solid rgba(212, 163, 115, 0.3);
    letter-spacing: 1px;
    font-size: 14px;

    &:last-child {
      border-right: none;
    }

    &:hover,
    &--active {
      background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
      color: var(--background-color-medium);
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    
    &__item {
      border-right: none;
      border-bottom: 1px solid rgba(212, 163, 115, 0.3);
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>