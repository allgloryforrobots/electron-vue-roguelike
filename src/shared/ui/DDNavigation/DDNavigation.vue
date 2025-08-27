<template>
  <div class="component-card">
    <div class="dd-navbar">
      <a 
        v-for="(item, index) in navItems" 
        :key="index" 
        :class="['dd-nav-item', { active: item.active }]"
        href="#"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDNavigation',
  data() {
    return {
      navItems: [
        { title: 'Главная', active: true },
        { title: 'Инвентарь', active: false },
        { title: 'Персонаж', active: false },
        { title: 'Карта', active: false },
        { title: 'Настройки', active: false }
      ]
    }
  }
}
</script>

<style scoped>
.dd-navbar {
  display: flex;
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  border: 1px solid var(--accent-color-1);
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
  width: fit-content;
}

.dd-nav-item {
  padding: 0 10px;
  color: var(--accent-color-2);
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  transition: all 0.3s ease;
  border-right: 1px solid rgba(212, 163, 115, 0.3);
  letter-spacing: 1px;
}

.dd-nav-item:last-child {
  border-right: none;
}

.dd-nav-item:hover, .dd-nav-item.active {
  background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
  color: var(--background-color-medium);
}

@media (max-width: 768px) {
  .dd-navbar {
    flex-direction: column;
  }
  
  .dd-nav-item {
    border-right: none;
    border-bottom: 1px solid rgba(212, 163, 115, 0.3);
  }
  
  .dd-nav-item:last-child {
    border-bottom: none;
  }
}
</style>