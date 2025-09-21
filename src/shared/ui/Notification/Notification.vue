<template>
  <div 
    v-for="(notification, index) in notifications" 
    :key="index" 
    :class="['notification', { hidden: notification.hidden }]"
  >
    <div class="notification-icon">
      <i :class="notification.icon"></i>
    </div>
    <div class="notification-content">
      <strong>{{ notification.title }}</strong>
      <p>{{ notification.message }}</p>
    </div>
    <button class="notification-close" @click="hideNotification(index)">
      &times;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      notifications: [
        {
          icon: 'fa-duotone fa-solid fa-check',
          title: 'Задание выполнено',
          message: 'Вы успешно завершили квест "Потерянная реликвия"',
          hidden: false
        },
        {
          icon: 'fa-duotone fa-solid fa-exclamation-triangle',
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
.notification {
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

.notification.hidden {
  display: none;
}

@keyframes dd-notification-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--background-color);
}

.notification-content {
  flex-grow: 1;
}

.notification-close {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.2rem;
}
</style>