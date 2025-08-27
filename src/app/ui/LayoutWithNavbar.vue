<template>
  <div class="layout">
    <DDNavigation :nav-items="navConfig"/>
    <main class="main-content">
      <router-view /> <!-- Здесь будут отображаться дочерние компоненты -->
    </main>
  </div>
</template>

<script>
import { DDNavigation } from '@/widgets/DDNavigation';

export default {
  components: { DDNavigation },
  data() {
    return {
      navConfig: [
        { title: 'Меню', route: '/' },
        { title: 'Инвентарь', route: '/inventory' },
        { title: 'Персонаж', route: '/character' },
        { title: 'Карта', route: '/map' },
        { title: 'Репутация', route: '/reputation' },
        { title: 'Заметки', route: '/notes' },
        { title: 'Улики', route: '/evidence' },
        { title: 'Советы', route: '/tips' }
      ]
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  overflow: auto;
}
</style>