<!-- const contextItems = ref([
{ label: 'Использовать', icon: 'fas fa-potion', action: () => {} },
{ label: 'Осмотреть', icon: 'fas fa-search', action: () =>  {} },
{ label: 'Передать', icon: 'fas fa-handshake', action: () =>  {} },
{ separator: true },
{ label: 'Выбросить', icon: 'fas fa-trash', danger: true, action: () =>  {} },
{ label: 'Разобрать', icon: 'fas fa-hammer', danger: true, action: () =>  {} }
]) -->

<!-- <DDContextMenu
    :title="'Действия с предметом'"
    :headerIcon="'fas fa-ring'"
    :items="contextItems"
    @item-selected="() => {}"
>
    <template #activator>
    <div class="context-demo-content">
        <i class="fas fa-gem"></i>
        <h3>Драконий самоцвет</h3>
        <p>Щелкните правой кнопкой мыши для действий с предметом</p>
    </div>
    </template>
</DDContextMenu> -->

<template>
  <div>
    <!-- Область для активации контекстного меню -->
    <div 
      class="context-activation-area"
      @contextmenu.prevent="openMenu($event)"
      @click="closeMenu"
    >
      <slot name="activator">
        <div class="default-activator">
          <i class="fas fa-mouse-pointer"></i>
          <p>Щелкните правой кнопкой мыши в этой области</p>
        </div>
      </slot>
    </div>

    <!-- Контекстное меню -->
    <div 
      v-if="visible" 
      class="dd-context-menu" 
      :style="{ top: y + 'px', left: x + 'px' }"
      @click.stop
    >
      <div v-if="title" class="dd-context-header">
        <i v-if="headerIcon" :class="headerIcon"></i>
        <span>{{ title }}</span>
      </div>
      
      <div class="dd-context-items">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          :class="['dd-context-item', { 
            'disabled': item.disabled, 
            'separator': item.separator,
            'danger': item.danger
          }]"
          @click="!item.disabled && !item.separator && selectItem(item)"
        >
          <div v-if="!item.separator" class="dd-context-item-content">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <span v-if="item.shortcut" class="dd-context-shortcut">{{ item.shortcut }}</span>
            <i v-if="item.children" class="fas fa-chevron-right submenu-arrow"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Затемнение фона -->
    <div 
      v-if="visible" 
      class="dd-context-backdrop" 
      @click="closeMenu"
      @contextmenu.prevent="closeMenu"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'DDContextMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    headerIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
      x: 0,
      y: 0
    }
  },
  mounted() {
    // Закрываем меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.visible) {
        this.closeMenu();
      }
    });
  },
  methods: {
    openMenu(event) {
      this.x = event.pageX;
      this.y = event.pageY;
      this.visible = true;
      
      // Проверяем, чтобы меню не выходило за границы экрана
      this.$nextTick(() => {
        const menu = document.querySelector('.dd-context-menu');
        if (menu) {
          const rect = menu.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          if (this.x + rect.width > windowWidth) {
            this.x = windowWidth - rect.width - 10;
          }
          
          if (this.y + rect.height > windowHeight) {
            this.y = windowHeight - rect.height - 10;
          }
        }
      });
    },
    
    closeMenu() {
      this.visible = false;
    },
    
    selectItem(item) {
      if (item.action && typeof item.action === 'function') {
        item.action();
      }
      this.$emit('item-selected', item);
      this.closeMenu();
    }
  }
}
</script>

<style scoped>
.context-activation-area {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.3), rgba(25, 21, 20, 0.5));
  border: 1px dashed var(--border-color);
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: inherit;
}

.default-activator {
  color: var(--accent-color-6);
}

.default-activator i {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

.dd-context-menu {
  position: fixed;
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.95), rgba(25, 21, 20, 0.98));
  border: 1px solid var(--border-color);
  border-radius: 4px;
  min-width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  animation: dd-context-in 0.15s ease;
  overflow: hidden;
}

@keyframes dd-context-in {
  from { 
    opacity: 0; 
    transform: scale(0.95) translateY(-5px); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}

.dd-context-header {
  padding: 12px 15px;
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  color: var(--accent-color-2);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
}

.dd-context-items {
  padding: 5px 0;
}

.dd-context-item {
  padding: 8px 15px;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.dd-context-item:hover {
  background: linear-gradient(to right, rgba(212, 163, 115, 0.2), transparent);
  color: var(--accent-color-2);
}

.dd-context-item.danger:hover {
  background: linear-gradient(to right, rgba(209, 96, 61, 0.2), transparent);
  color: var(--accent-color-3);
}

.dd-context-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dd-context-item.disabled:hover {
  background: transparent;
  color: var(--text-color);
}

.dd-context-item.separator {
  height: 1px;
  padding: 0;
  margin: 5px 10px;
  background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  cursor: default;
}

.dd-context-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.dd-context-item-content i:first-child {
  width: 16px;
  text-align: center;
}

.dd-context-shortcut {
  font-size: 0.8rem;
  color: var(--accent-color-6);
  opacity: 0.7;
}

.submenu-arrow {
  font-size: 0.7rem;
  margin-left: 10px;
}

.dd-context-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
}
</style>