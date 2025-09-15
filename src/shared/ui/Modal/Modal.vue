<template>
  <div class="component-card">
    <h2 class="component-title">
      <i class="fas fa-window-restore"></i> Модальное окно
    </h2>
    <button class="dd-button" @click="showModal">
      Показать модальное окно
    </button>
    
    <div v-if="modalVisible" class="dd-modal-overlay" @click.self="hideModal">
      <div class="dd-modal">
        <div class="dd-modal-header">
          <h3>Подтверждение действия</h3>
          <button class="dd-notification-close" @click="hideModal">
            &times;
          </button>
        </div>
        <div class="dd-modal-body">
          <p>Вы уверены, что хотите покинуть безопасную зону? Враги в окружающих землях очень опасны.</p>
        </div>
        <div class="dd-modal-footer">
          <button class="dd-button" @click="hideModal">
            Отмена
          </button>
          <button class="dd-button confirm-btn" @click="hideModal">
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDModal',
  data() {
    return {
      modalVisible: false
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    }
  }
}
</script>

<style scoped>
.dd-button {
  background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
  color: var(--accent-color-2);
  border: 1px solid var(--accent-color-1);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.dd-button:hover {
  background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
  color: var(--accent-color-7);
  box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
}

.confirm-btn {
  background: linear-gradient(to bottom, var(--accent-color-3), var(--accent-color-4)) !important;
}

.dd-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: dd-fade-in 0.3s ease;
}

@keyframes dd-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.dd-modal {
  background: var(--background-color-medium);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  max-width: 500px;
  width: 90%;
  animation: dd-modal-in 0.3s ease;
}

@keyframes dd-modal-in {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.dd-modal-header {
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dd-modal-body {
  padding: 20px;
}

.dd-modal-footer {
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid var(--border-color);
}
</style>