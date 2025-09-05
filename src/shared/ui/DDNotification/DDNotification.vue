<template>
  <div class="component-card">
    <h2 class="component-title">
      <i class="fas fa-bell"></i> Уведомления
    </h2>
    <div 
      v-for="(notification, index) in notifications" 
      :key="index" 
      :class="['dd-notification', { hidden: notification.hidden }]"
    >
      <div class="dd-notification-icon">
        <i :class="notification.icon"></i>
      </div>
      <div class="dd-notification-content">
        <strong>{{ notification.title }}</strong>
        <p>{{ notification.message }}</p>
      </div>
      <button class="dd-notification-close" @click="hideNotification(index)">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDNotification',
  data() {
    return {
      notifications: [
        {
          icon: 'fas fa-check',
          title: 'Задание выполнено',
          message: 'Вы успешно завершили квест "Потерянная реликвия"',
          hidden: false
        },
        {
          icon: 'fas fa-exclamation-triangle',
          title: 'Низкий уровень здоровья',
          message: 'Ваше здоровье ниже 25%. Используйте зелье лечения.',
          hidden: false
        }
      ]
    }
  },
  methods: {
    hideNotification(index) {
      this.notifications[index].hidden = true;
    }
  }
}
</script>

<style scoped>
.dd-notification {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-bottom: 15px;
  animation: dd-notification-in 0.3s ease;
}

.dd-notification.hidden {
  display: none;
}

@keyframes dd-notification-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.dd-notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dd-notification-content {
  flex-grow: 1;
}

.dd-notification-close {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.2rem;
}
</style>