<template>
  <div class="context-menu">
    <!-- Область для активации контекстного меню -->
    <div 
      class="context-menu__activation-area"
      @contextmenu.prevent="openMenu($event)"
      @click="closeMenu"
    >
      <slot name="activator" />
    </div>

    <!-- Контекстное меню -->
    <div 
      v-if="visible" 
      class="context-menu__menu" 
      :style="{ top: y + 'px', left: x + 'px' }"
      @click.stop
    >
      <div v-if="title" class="context-menu__header">
        <i v-if="headerIcon" :class="[headerIcon, 'context-menu__header-icon']"></i>
        <span class="context-menu__header-title">{{ title }}</span>
      </div>
      
      <div class="context-menu__items">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          :class="[
            'context-menu__item',
            {
              'context-menu__item--disabled': item.disabled, 
              'context-menu__item--separator': item.separator,
              'context-menu__item--danger': item.danger
            }
          ]"
          @click="!item.disabled && !item.separator && selectItem(item)"
        >
          <div v-if="!item.separator" class="context-menu__item-content">
            <i v-if="item.icon" :class="[item.icon, 'context-menu__item-icon']"></i>
            <span class="context-menu__item-label">{{ item.label }}</span>
            <span v-if="item.shortcut" class="context-menu__item-shortcut">{{ item.shortcut }}</span>
            <i v-if="item.children" class="fas fa-chevron-right context-menu__submenu-arrow"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Затемнение фона -->
    <div 
      v-if="visible" 
      class="context-menu__backdrop" 
      @click="closeMenu"
      @contextmenu.prevent="closeMenu"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
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
      
      this.$nextTick(() => {
        const menu = document.querySelector('.context-menu__menu');
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
.context-menu {
  position: relative;
}

.context-menu__activation-area {
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

.context-menu__default-activator {
  color: var(--accent-color-6);
}

.context-menu__activator-icon {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

.context-menu__activator-text {
  margin: 0;
}

.context-menu__menu {
  position: fixed;
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.95), rgba(25, 21, 20, 0.98));
  border: 1px solid var(--border-color);
  border-radius: 4px;
  min-width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  animation: context-menu-in 0.15s ease;
  overflow: hidden;
}

@keyframes context-menu-in {
  from { 
    opacity: 0; 
    transform: scale(0.95) translateY(-5px); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}

.context-menu__header {
  padding: 12px 15px;
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  color: var(--accent-color-2);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
}

.context-menu__header-icon {
  font-size: 0.9rem;
}

.context-menu__header-title {
  font-size: 0.9rem;
}

.context-menu__items {
  padding: 5px 0;
}

.context-menu__item {
  padding: 8px 15px;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.context-menu__item:hover {
  background: linear-gradient(to right, rgba(212, 163, 115, 0.2), transparent);
  color: var(--accent-color-2);
}

.context-menu__item--danger:hover {
  background: linear-gradient(to right, rgba(209, 96, 61, 0.2), transparent);
  color: var(--accent-color-3);
}

.context-menu__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.context-menu__item--disabled:hover {
  background: transparent;
  color: var(--text-color);
}

.context-menu__item--separator {
  height: 1px;
  padding: 0;
  margin: 5px 10px;
  background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  cursor: default;
}

.context-menu__item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.context-menu__item-icon {
  width: 16px;
  text-align: center;
  font-size: 0.9rem;
}

.context-menu__item-label {
  flex: 1;
  font-size: 0.9rem;
}

.context-menu__item-shortcut {
  font-size: 0.8rem;
  color: var(--accent-color-6);
  opacity: 0.7;
}

.context-menu__submenu-arrow {
  font-size: 0.7rem;
  margin-left: 10px;
  opacity: 0.7;
}

.context-menu__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
}
</style>