<template>
  <div class="inventory">
    <div class="inventory__layout">
      <!-- Блок экипировки -->
      <div class="inventory__section">
        <DDHeader title="Экипировка" class="inventory__header" />
        
        <!-- Отображение персонажа со слотами -->
        <div class="inventory__slots">
          <DDSubstrate class="inventory__slot inventory__slot--head" :width="50" square>
            <i class="fa-solid fa-helmet-safety inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.head" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="inventory__slot inventory__slot--body" :width="50" square>
            <i class="fa-solid fa-shirt inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.body" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="inventory__slot inventory__slot--arms" :width="50" square>
            <i class="fa-solid fa-mitten inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.arms" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>

          <DDSubstrate class="inventory__slot inventory__slot--legs" :width="50" square>
            <i class="fa-solid fa-shoe-prints inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.legs" 
              @item-click="handleSlotClick"
            ></div>
          </DDSubstrate>
            
          <DDSubstrate class="inventory__slot inventory__slot--accessory-a" :width="50" square>
            <i class="fa-solid fa-ring inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.accessoryA" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>

          <DDSubstrate class="inventory__slot inventory__slot--accessory-b" :width="50" square>
            <i class="fa-solid fa-ring inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.accessoryB" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>

          <!-- Комплекты оружия -->
          <DDSubstrate class="inventory__slot inventory__slot--right-hand" :width="50" square>
            <i class="fa-solid fa-hand-fist inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.complect1.rightHand" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="inventory__slot inventory__slot--left-hand" :width="50" square>
            <i class="fa-solid fa-shield inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.complect1.leftHand" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <!-- Быстрые слоты -->
          <DDSubstrate class="inventory__slot inventory__slot--quick-a" :width="50" square>
            <i class="fa-solid fa-scroll inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.quickSlotA" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="inventory__slot inventory__slot--quick-b" :width="50" square>
            <i class="fa-solid fa-scroll inventory__slot-icon"></i>
            <div 
              :slot="playerStore.player.inventory.slots.quickSlotB" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
        </div>
      </div>
      
       <!-- Блок инвентаря -->
      <div class="inventory__section">
        <DDHeader title="Рюкзак" class="inventory__header" />
        <div class="inventory-grid">
          <div 
            v-for="(cell, index) in gridCells" 
            :key="index" 
            class="grid-cell"
            @dragover.prevent
            @drop="handleDrop($event, index)"
          ></div>
          
          <!-- Предметы в инвентаре -->
          <div 
            v-for="(item, index) in inventoryItems" 
            :key="'item-'+index"
            class="inventory-item"
            :class="[
              `item-size-${item.width}x${item.height}`,
              { 'item-dragging': draggedItem && draggedItem.id === item.id }
            ]"
            :style="getItemPosition(item)"
            draggable="true"
            @dragstart="handleDragStart($event, item)"
            @dragend="handleDragEnd"
          >
            <div class="item-content">
              <span class="item-marker">{{ item.marker }}</span>
              <i class="fa-solid" :class="item.icon"></i>
              <div class="item-size-badge">{{ item.width }}x{{ item.height }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="inventory__section">
        <DDHeader title="Схрон" class="inventory__header" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { InventorySlotItemType, Item, itemIconsByType, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
    import DDHeader from '@/shared/ui/DDHeader/DDHeader.vue';	
    import DDSubstrate from '@/shared/ui/DDSubstrate/DDSubstrate.vue';
    import { computed, ref } from 'vue';
    
    const playerStore = usePlayerStore();

     // Конфигурация сетки инвентаря
    const gridColumns = 8;
    const gridRows = 6;
    const gridCells = ref(Array(gridColumns * gridRows).fill(0));
    
    // Предметы в инвентаре
    const inventoryItems = ref([
      // Броня (2x2)
      {
        id: 1,
        name: "Стальной полный шлем",
        width: 2,
        height: 2,
        position: { x: 0, y: 0 },
        marker: itemIconsByType.heavy.marker,
        icon: itemIconsByType.heavy.helmet
      },
      // Оружие (1x3)
      {
        id: 2,
        name: "Длинный меч",
        width: 1,
        height: 3,
        position: { x: 3, y: 0 },
        marker: "⚔️",
        icon: "fa-sword"
      },
      // Зелье (1x1)
      {
        id: 3,
        name: "Зелье здоровья",
        width: 1,
        height: 1,
        position: { x: 5, y: 0 },
        marker: "🧪",
        icon: "fa-flask"
      }
    ]);

    // Drag and Drop переменные
    const draggedItem = ref(null);
    const isDragging = ref(false);

    // Вычисляемое свойство для получения всех занятых ячеек
    const occupiedCells = computed(() => {
      const cells = [];
      inventoryItems.value.forEach(item => {
        for (let dy = 0; dy < item.height; dy++) {
          for (let dx = 0; dx < item.width; dx++) {
            const cellX = item.position.x + dx;
            const cellY = item.position.y + dy;
            if (cellX < gridColumns && cellY < gridRows) {
              cells.push({ x: cellX, y: cellY, itemId: item.id });
            }
          }
        }
      });
      return cells;
    });

    const handleSlotClick = () => {
      console.log("Slot clicked");
    }

     const getItemPosition = (item) => {
      // Добавляем отступы между предметами
      const gap = 2;
      return {
        left: `calc(${item.position.x * (50 + gap)}px + ${gap}px)`,
        top: `calc(${item.position.y * (50 + gap)}px + ${gap}px)`,
        width: `calc(${item.width * 50}px + ${(item.width - 1) * gap}px)`,
        height: `calc(${item.height * 50}px + ${(item.height - 1) * gap}px)`,
      };
    }

    const handleDragStart = (event, item) => {
      draggedItem.value = item;
      isDragging.value = true;
      event.dataTransfer.setData('text/plain', item.id.toString());
      console.log("Drag started for item:", item.name);
      
      // Визуальный эффект при начале перетаскивания
      event.target.style.opacity = '0.7';
    }

     const handleDragEnd = (event) => {
      isDragging.value = false;
      draggedItem.value = null;
      console.log("Drag ended");
      
      // Восстанавливаем прозрачность
      if (event.target) {
        event.target.style.opacity = '1';
      }
    }

	const handleDrop = (event, cellIndex) => {
      event.preventDefault();
      if (!draggedItem.value) return;
      
      const x = cellIndex % gridColumns;
      const y = Math.floor(cellIndex / gridColumns);
      
      console.log(`Trying to drop item ${draggedItem.value.name} at position (${x}, ${y})`);
      
      // Проверяем, можно ли разместить предмет в этой позиции
      if (canPlaceItem(draggedItem.value, x, y)) {
        // Обновляем позицию предмета
        const itemIndex = inventoryItems.value.findIndex(item => item.id === draggedItem.value.id);
        if (itemIndex !== -1) {
          inventoryItems.value[itemIndex].position = { x, y };
          console.log(`Item placed at (${x}, ${y})`);
        }
      } else {
        console.log("Cannot place item here - collision detected");
      }
    }

	    // Функция проверки возможности размещения предмета
    const canPlaceItem = (item, targetX, targetY) => {
      // Проверяем, не выходит ли предмет за границы инвентаря
      if (targetX + item.width > gridColumns || targetY + item.height > gridRows) {
        return false;
      }
      
      // Проверяем коллизии с другими предметами (исключая текущий перемещаемый предмет)
      for (let dy = 0; dy < item.height; dy++) {
        for (let dx = 0; dx < item.width; dx++) {
          const checkX = targetX + dx;
          const checkY = targetY + dy;
          
          // Проверяем, занята ли эта ячейка другим предметом
          const isOccupied = occupiedCells.value.some(cell => 
            cell.x === checkX && cell.y === checkY && cell.itemId !== item.id
          );
          
          if (isOccupied) {
            return false;
          }
        }
      }
      
      return true;
    }

    const testItems = [
		// ТЯЖЕЛАЯ БРОНЯ
		new Item({
			name: "Стальной полный шлем",
			codename: "steel_great_helmet",
			slot: InventorySlotItemType.HEAD,
			lockSlots: [],
			itemType: itemTypes.helmet,
			icon: itemIconsByType.heavy.helmet,
			armorType: "heavy",
			marker: itemIconsByType.heavy.marker
		}),
		new Item({
			name: "Наплечье дракона",
			codename: "dragon_pauldrons",
			slot: InventorySlotItemType.LEGS,
			lockSlots: [],
			itemType: itemTypes.boots,
			icon: itemIconsByType.heavy.shoulders,
			armorType: "heavy",
			marker: itemIconsByType.heavy.marker
		}),
		new Item({
			name: "Доспех платиновой стражи",
			codename: "platinum_guard_armor",
			slot: InventorySlotItemType.BODY,
			lockSlots: [],
			itemType: itemTypes.armor,
			icon: itemIconsByType.heavy.chest,
			armorType: "heavy",
			marker: itemIconsByType.heavy.marker
		}),

		// СРЕДНЯЯ БРОНЯ
		new Item({
			name: "Кожаная шляпа следопыта",
			codename: "ranger_leather_hat",
			slot: InventorySlotItemType.HEAD,
			lockSlots: [],
			itemType: itemTypes.helmet,
			icon: itemIconsByType.medium.helmet,
			armorType: "medium",
			marker: itemIconsByType.medium.marker
		}),
		new Item({
			name: "Кольчужный доспех",
			codename: "chainmail_armor",
			slot: InventorySlotItemType.BODY,
			lockSlots: [],
			itemType: itemTypes.armor,
			icon: itemIconsByType.medium.chest,
			armorType: "medium",
			marker: itemIconsByType.medium.marker
		}),
		new Item({
			name: "Щит кольчужного плетения",
			codename: "chainmail_shield",
			slot: InventorySlotItemType.LEFT_HAND,
			lockSlots: [],
			itemType: itemTypes.shield,
			icon: itemIconsByType.medium.shield,
			armorType: "medium",
			marker: itemIconsByType.medium.marker
		}),

		// ЛЕГКАЯ БРОНЯ
		new Item({
			name: "Кожаный клобук",
			codename: "leather_cap",
			slot: InventorySlotItemType.HEAD,
			lockSlots: [],
			itemType: itemTypes.helmet,
			icon: itemIconsByType.light.helmet,
			armorType: "light",
			marker: itemIconsByType.light.marker
		}),
		new Item({
			name: "Кожаная куртка",
			codename: "leather_jacket",
			slot: InventorySlotItemType.BODY,
			lockSlots: [],
			itemType: itemTypes.armor,
			icon: itemIconsByType.light.chest,
			armorType: "light",
			marker: itemIconsByType.light.marker
		}),
		new Item({
			name: "Перчатки ловкости",
			codename: "agility_gloves",
			slot: InventorySlotItemType.ARMS,
			lockSlots: [],
			itemType: itemTypes.gloves,
			icon: itemIconsByType.light.gloves,
			armorType: "light",
			marker: itemIconsByType.light.marker
		}),
    ];
</script>

<style scoped lang="scss">
.inventory {
  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }

  &__slots {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    height: 600px;
    place-items: center;
  }

  &__slot {
    position: relative;
    display: grid;
    place-items: center;

    &--head {
      grid-column: 3;
      grid-row: 1;
    }

    &--body {
      grid-column: 3;
      grid-row: 2;
    }

    &--arms {
      grid-column: 2;
      grid-row: 3;
    }

    &--right-hand {
      grid-column: 1;
      grid-row: 3;
    }

    &--left-hand {
      grid-column: 5;
      grid-row: 3;
    }

    &--legs {
      grid-column: 3;
      grid-row: 5;
    }

    &--accessory-a {
      grid-column: 3;
      grid-row: 3;
    }

    &--accessory-b {
      grid-column: 4;
      grid-row: 3;
    }

    &--quick-a {
      grid-column: 3;
      grid-row: 4;
    }

    &--quick-b {
      grid-column: 4;
      grid-row: 4;
    }
  }

  &__slot-icon {
    position: absolute;
    opacity: 0.1;
  }

  &__item-icons {
    opacity: 0.4;
  }
}

// Стили для сетки инвентаря
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(v-bind('gridColumns'), 50px);
  grid-template-rows: repeat(v-bind('gridRows'), 50px);
  gap: 2px;
  background-color: #333;
  padding: 5px;
  border-radius: 4px;
  position: relative;
}

.grid-cell {
  border: 1px solid #555;
  background-color: #222;
  border-radius: 2px;
}

.inventory-item {
  position: absolute;
  border: 1px solid #888;
  background-color: #444;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  z-index: 10;
  
  .item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    .item-marker {
      font-size: 12px;
      margin-bottom: 2px;
    }
  }
  
  // Размеры предметов
  &.item-size-2x2 {
    width: calc(100px + 2px);
    height: calc(100px + 2px);
  }
  
  &.item-size-1x3 {
    width: calc(50px + 0px);
    height: calc(150px + 4px);
  }
  
  &.item-size-1x1 {
    width: calc(50px + 0px);
    height: calc(50px + 0px);
  }
}
</style>