<template>
  <div class="layout">
    <DDNavigation />
    <main class="main-content">
      <router-view /> <!-- Здесь будут отображаться дочерние компоненты -->
    </main>
  </div>
</template>

<script>
import DDNavigation from '@/shared/ui/DDNavigation/DDNavigation.vue';

export default {
  name: 'LayoutWithNavbar',
  components: {
    DDNavigation
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