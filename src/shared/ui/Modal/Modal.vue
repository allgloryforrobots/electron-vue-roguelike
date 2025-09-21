<template>
  <div class="modal-component">
    <button class="button" @click="showModal">
      Показать модальное окно
    </button>
    
    <div v-if="modalVisible" class="modal-overlay" @click.self="hideModal">
      <div class="modal">
        <div class="modal__header">
          <slot name="header" />
          <button class="modal__close" @click="hideModal">
            &times;
          </button>
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
        <div class="modal__footer">
          <slot name="footer">
            <button class="button" @click="hideModal">
              Отмена
            </button>
            <button class="button button--confirm" @click="hideModal">
              Подтвердить
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
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
.modal-component {
  padding: 20px;
}

.modal-component__title {
  color: var(--text-color);
  margin-bottom: 20px;
}

.button {
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

.button:hover {
  background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
  color: var(--accent-color-7);
  box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
}

.button--confirm {
  background: linear-gradient(to bottom, var(--accent-color-3), var(--accent-color-4)) !important;
}

.modal-overlay {
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
  animation: fade-in 0.3s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  background: var(--background-color-medium);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  max-width: 500px;
  width: 90%;
  animation: modal-in 0.3s ease;
}

@keyframes modal-in {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal__header {
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  margin: 0;
  color: var(--text-color);
}

.modal__close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
}

.modal__body {
  padding: 20px;
}

.modal__footer {
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid var(--border-color);
}
</style>