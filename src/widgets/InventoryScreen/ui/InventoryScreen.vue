<template>
  <div class="inventory">
    <div class="inventory__layout">
      <!-- Блок экипировки -->
      <div class="inventory__section">
        <DDHeader title="Экипировка" class="inventory__header" />
        
        <!-- Отображение персонажа со слотами -->
        <!-- Отображение персонажа со слотами -->
        <div class="inventory__slots">
          <div 
            v-for="(slot, key) in playerStore.player.inventory.slots" 
            :key="key"
            :class="[
              'inventory__slot', 
              slot.inventoryOptions.slotCls,
              { 'inventory__slot--highlighted': highlightedSlot === slot.codename }
            ]"
            @dragover.prevent="handleSlotDragOver($event, slot.codename)"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, slot.codename)"
          >
            <i :class="[slot.inventoryOptions.slotIcon, 'inventory__slot-icon']"></i>
            <InventoryItem 
              v-if="slot.item"
              :item="slot.item"
              draggable="true"
              @dragstart="handleEquipmentDragStart($event, slot.item, key)"
              @dragend="handleDragEnd"
            />
          </div>
        </div>
      </div>
      
       <!-- Блок инвентаря -->
      <div class="inventory__section">
        <DDHeader title="Рюкзак" class="inventory__header" />
        <div 
          class="inventory__grid"
          ref="gridElement"
          @dragover.prevent="handleGridDragOver($event, 'inventory')"
          @dragleave="handleGridDragLeave"
          @drop="handleGridDrop($event, 'inventory')"
        >
          <InventoryCell 
            v-for="(cell, index) in gridCells" 
            :key="index" 
            class="inventory__grid-cell"
            :highlighted="isCellHighlighted(index, 'inventory')"
            :isFirstRow="Math.floor(index / gridColumns) === 0"
          />
          
          <!-- Предметы в инвентаре -->
          <InventoryItem 
            v-for="(item, index) in inventoryItems" 
            :key="item.id"
            :item="item"
            :style="getItemPosition(item)"
            draggable="true"
            @dragstart="handleDragStart($event, item, 'inventory')"
            @dragend="handleDragEnd"
          />
        </div>
      </div>

      <div class="inventory__section">
        <DDHeader title="Схрон" class="inventory__header" />
        <div 
          class="inventory__grid"
          ref="stashGridElement"
          @dragover.prevent="handleGridDragOver($event, 'stash')"
          @dragleave="handleGridDragLeave"
          @drop="handleGridDrop($event, 'stash')"
        >
          <InventoryCell 
            v-for="(cell, index) in stashGridCells" 
            :key="index" 
            class="inventory__grid-cell"
            :highlighted="isCellHighlighted(index, 'stash')"
          />
          
          <!-- Предметы в схроне -->
          <InventoryItem 
            v-for="(item, index) in stashItems" 
            :key="item.id"
            :item="item"
            :style="getItemPosition(item)"
            draggable="true"
            @dragstart="handleDragStart($event, item, 'stash')"
            @dragend="handleDragEnd"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { InventorySlotItemType, InventorySlotKeys, Item, itemIconsByType, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
    import DDHeader from '@/shared/ui/DDHeader/DDHeader.vue';	
    import { computed, ref, type CSSProperties, onMounted } from 'vue';
    import InventoryCell from './InventoryCell.vue';
    import InventoryItem from './InventoryItem.vue';
    
    interface CellPosition {
      x: number;
      y: number;
    }
    
    const playerStore = usePlayerStore();
    const gridElement = ref<HTMLElement | null>(null);
    const stashGridElement = ref<HTMLElement | null>(null);

    // Конфигурация сетки инвентаря
    const gridColumns = 8;
    const gridRows = 6;
    const gridCells = ref(Array(gridColumns * gridRows).fill(0));
    const stashGridCells = ref(Array(gridColumns * gridRows).fill(0));
    const cellSize = 50; // размер ячейки в пикселях
    const gap = 2; // отступ между ячейками

    // куда тянем в сетку
    const targetPosition = ref<{x: number, y: number} | null>(null);
    
    // Предметы в инвентаре
    const inventoryItems = ref<Item[]>([
      new Item({
        name: "Стальной полный шлем",
        width: 1,
        height: 1,
        position: { x: 0, y: 0 },
        marker: itemIconsByType.heavy.marker,
        icon: itemIconsByType.heavy.helmet,
        codename: "steel_great_helmet",
        slot: [InventorySlotItemType.HEAD],
        lockSlots: [],
        itemType: itemTypes.helmet,
        armorType: "heavy",
      }),
      new Item({
        name: "Длинный меч",
        width: 3,
        height: 1,
        position: { x: 3, y: 2 },
        marker: "⚔️",
        icon: "fa-sword",
        codename: "long_sword",
        slot: [InventorySlotItemType.RIGHT_HAND, InventorySlotItemType.LEFT_HAND],
        lockSlots: [],
        itemType: itemTypes.sword,
      }),
      new Item({
        name: "Зелье здоровья",
        width: 1,
        height: 1,
        position: { x: 5, y: 0 },
        marker: "🧪",
        icon: "fa-flask",
        codename: "potion",
        slot: [InventorySlotItemType.ACCESSORY],
        lockSlots: [],
        itemType: itemTypes.amulet,
      })
    ]);

    // Предметы в схроне
    const stashItems = ref<Item[]>([
      new Item({
        name: "Кольцо маны",
        width: 1,
        height: 1,
        position: { x: 2, y: 2 },
        marker: "💍",
        icon: "fa-ring",
        codename: "potion",
        slot: [InventorySlotItemType.ACCESSORY],
        lockSlots: [],
        itemType: itemTypes.amulet,
      })
    ]);

    // Drag and Drop переменные
    const draggedItem = ref<Item | null>(null);
    const draggedFromSlot = ref<InventorySlotKeys | null>(null); // Добавляем для отслеживания слота экипировки
    const isDragging = ref(false);
    const highlightedCells = ref<number[]>([]);
    const dragPosition = ref<{x: number, y: number} | null>(null);
    const gridRect = ref<DOMRect | null>(null);
    const currentGrid = ref<'inventory' | 'stash' | 'equipment' | null>(null);
    const sourceGrid = ref<'inventory' | 'stash' | 'equipment' | null>(null); // Добавляем equipment как источник
    const highlightedSlot = ref<string | null>(null);

    // Вычисляемое свойство для получения всех занятых ячеек в инвентаре
    const occupiedCells = computed((): CellPosition[] => {
      const cells: CellPosition[] = [];
      inventoryItems.value.forEach(item => {
        // Не включаем перемещаемый предмет в проверку коллизий
        if (draggedItem.value && item.id === draggedItem.value.id) return;
        
        for (let dy = 0; dy < item.height; dy++) {
          for (let dx = 0; dx < item.width; dx++) {
            const cellX = item.position.x + dx;
            const cellY = item.position.y + dy;
            if (cellX < gridColumns && cellY < gridRows) {
              cells.push({ x: cellX, y: cellY });
            }
          }
        }
      });
      return cells;
    });

    // Вычисляемое свойство для получения всех занятых ячеек в схроне
    const occupiedStashCells = computed((): CellPosition[] => {
      const cells: CellPosition[] = [];
      stashItems.value.forEach(item => {
        // Не включаем перемещаемый предмет в проверку коллизий
        if (draggedItem.value && item.id === draggedItem.value.id) return;
        
        for (let dy = 0; dy < item.height; dy++) {
          for (let dx = 0; dx < item.width; dx++) {
            const cellX = item.position.x + dx;
            const cellY = item.position.y + dy;
            if (cellX < gridColumns && cellY < gridRows) {
              cells.push({ x: cellX, y: cellY });
            }
          }
        }
      });
      return cells;
    });

    onMounted(() => {
      if (gridElement.value) {
        gridRect.value = gridElement.value.getBoundingClientRect();
      }
    });


    const getItemPosition = (item: Item): CSSProperties => {
      return {
        left: `${item.position.x * (cellSize + gap) + 5}px`,
        top: `${item.position.y * (cellSize + gap) + 5}px`,
        width: `${item.width * cellSize + (item.width - 1) * gap}px`,
        height: `${item.height * cellSize + (item.height - 1) * gap}px`,
      };
    }

    const handleDragStart = (event: DragEvent, item: Item, source: 'inventory' | 'stash'): void => {
      draggedItem.value = item;
      isDragging.value = true;
      sourceGrid.value = source;
      draggedFromSlot.value = null;

      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', item.id.toString());
        event.dataTransfer.effectAllowed = 'move';
      }
      
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '0.5';
      }
    }

    // Новый обработчик для перетаскивания из экипировки
    const handleEquipmentDragStart = (event: DragEvent, item: Item, slotType: InventorySlotKeys): void => {
      if (!item) return;
      
      draggedItem.value = item;
      draggedFromSlot.value = slotType;
      isDragging.value = true;
      sourceGrid.value = 'equipment';

      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', `equipment-${slotType}`);
        event.dataTransfer.effectAllowed = 'move';
      }
      
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '0.5';
      }
    }

    const handleDragEnd = (event: DragEvent): void => {
      isDragging.value = false;
      draggedItem.value = null;
      draggedFromSlot.value = null;
      highlightedCells.value = [];
      dragPosition.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
      highlightedSlot.value = null;
      
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '1';
      }
    }

    const handleGridDragOver = (event: DragEvent, gridType: 'inventory' | 'stash'): void => {
      event.preventDefault();
      if (!draggedItem.value) return;
      
      currentGrid.value = gridType;
      highlightedSlot.value = null;
      
      dragPosition.value = {
        x: event.clientX,
        y: event.clientY
      };
      
      const currentGridRect = gridType === 'inventory' 
        ? gridElement.value?.getBoundingClientRect() 
        : stashGridElement.value?.getBoundingClientRect();
      
      if (!currentGridRect) return;
      
      const gridX = Math.floor((event.clientX - currentGridRect.left) / (cellSize + gap));
      const gridY = Math.floor((event.clientY - currentGridRect.top) / (cellSize + gap));

      targetPosition.value = { x: gridX, y: gridY };
      
      highlightDropZone(gridX, gridY, gridType);
    }
    
    const handleGridDragLeave = (event: DragEvent): void => {
      event.preventDefault();
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (!relatedTarget || !gridElement.value?.contains(relatedTarget)) {
        highlightedCells.value = [];
        dragPosition.value = null;
        currentGrid.value = null;
        highlightedSlot.value = null;
      }
    }

    const handleGridDrop = (event: DragEvent, targetGrid: 'inventory' | 'stash'): void => {
      event.preventDefault();
      if (!draggedItem.value || !targetPosition.value || !sourceGrid.value) return;
      
      if (canPlaceItem(draggedItem.value, targetPosition.value.x, targetPosition.value.y, targetGrid)) {
        // Если предмет перетаскивается из экипировки
        if (sourceGrid.value === 'equipment' && draggedFromSlot.value) {
          unequipItem(draggedFromSlot.value, targetPosition.value.x, targetPosition.value.y, targetGrid);
        } else {
          // Обычное перемещение между инвентарем и схроном
          moveItem(draggedItem.value, targetPosition.value.x, targetPosition.value.y, sourceGrid.value as 'inventory' | 'stash', targetGrid);
        }
      }
      
      highlightedCells.value = [];
      dragPosition.value = null;
      targetPosition.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
      highlightedSlot.value = null;
      draggedFromSlot.value = null;
    }
    
    const handleSlotDragOver = (event: DragEvent, slotType: InventorySlotItemType): void => {
      event.preventDefault();
      if (!draggedItem.value) return;
      
      currentGrid.value = 'equipment';
      highlightedCells.value = [];
      
      if (isItemCompatibleWithSlot(draggedItem.value, slotType)) {
        highlightedSlot.value = slotType;
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = 'move';
        }
      } else {
        highlightedSlot.value = null;
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = 'none';
        }
      }
    }
    
    const handleSlotDragLeave = (event: DragEvent): void => {
      event.preventDefault();
      highlightedSlot.value = null;
    }
    
    const handleSlotDrop = (event: DragEvent, slotType: InventorySlotItemType): void => {
      event.preventDefault();
      if (!draggedItem.value || !sourceGrid.value) return;
      
      if (isItemCompatibleWithSlot(draggedItem.value, slotType)) {
        equipItem(draggedItem.value, slotType, sourceGrid.value as 'inventory' | 'stash' | 'equipment');
      } 
      
      highlightedSlot.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
      draggedFromSlot.value = null;
    }
    
    const highlightDropZone = (targetX: number, targetY: number, gridType: 'inventory' | 'stash'): void => {
      if (!draggedItem.value) return;
      
      const newHighlightedCells: number[] = [];
      
      if (canPlaceItem(draggedItem.value, targetX, targetY, gridType)) {
        for (let dy = 0; dy < draggedItem.value.height; dy++) {
          for (let dx = 0; dx < draggedItem.value.width; dx++) {
            const cellX = targetX + dx;
            const cellY = targetY + dy;
            
            if (cellX < gridColumns && cellY < gridRows) {
              const cellIndex = cellY * gridColumns + cellX;
              newHighlightedCells.push(cellIndex);
            }
          }
        }
      }
      
      highlightedCells.value = newHighlightedCells;
    }
    
    const isCellHighlighted = (cellIndex: number, gridType: 'inventory' | 'stash'): boolean => {
      return currentGrid.value === gridType && highlightedCells.value.includes(cellIndex);
    }

    const canPlaceItem = (item: Item, targetX: number, targetY: number, gridType: 'inventory' | 'stash'): boolean => {
      if (targetX < 0 || targetY < 0 || 
          targetX + item.width > gridColumns || 
          targetY + item.height > gridRows) {
        return false;
      }
      
      const occupied = gridType === 'inventory' ? occupiedCells.value : occupiedStashCells.value;
      
      for (let dy = 0; dy < item.height; dy++) {
        for (let dx = 0; dx < item.width; dx++) {
          const checkX = targetX + dx;
          const checkY = targetY + dy;
          
          const isOccupied = occupied.some(cell => 
            cell.x === checkX && cell.y === checkY
          );
          
          if (isOccupied) {
            return false;
          }
        }
      }
      
      return true;
    }

    const isItemCompatibleWithSlot = (item: Item, slotType: InventorySlotItemType): boolean => {
      return item.slot.includes(slotType);
    }

    const moveItem = (item: Item, targetX: number, targetY: number, source: 'inventory' | 'stash', target: 'inventory' | 'stash'): void => {

      if (source === 'inventory') {
        const sourceIndex = inventoryItems.value.findIndex(i => i.id === item.id);
        if (sourceIndex !== -1) {
          inventoryItems.value.splice(sourceIndex, 1);
        }
      } else {
        const sourceIndex = stashItems.value.findIndex(i => i.id === item.id);
        if (sourceIndex !== -1) {
          stashItems.value.splice(sourceIndex, 1);
        }
      }

      item.position = { x: targetX, y: targetY };
    
      if (target === 'inventory') {
        inventoryItems.value.push(item);
      } else {
        stashItems.value.push(item);
      }
    }
    
    // Новая функция для снятия предмета с экипировки
    const unequipItem = (slotType: InventorySlotKeys, targetX: number, targetY: number, targetGrid: 'inventory' | 'stash'): void => {
      const slot = playerStore.player.inventory.slots[slotType];
      if (!slot.item) return;

	  slot.item.position = { x: targetX, y: targetY };
      
      // Добавляем предмет в целевую сетку
      if (targetGrid === 'inventory') {
        inventoryItems.value.push(slot.item);
      } else if (targetGrid === 'stash') {
        stashItems.value.push(slot.item);
      }
      
      // Удаляем предмет из слота экипировки
      slot.item = null;
    }
    
    const equipItem = (item: Item, slotType: InventorySlotItemType, source: 'inventory' | 'stash' | 'equipment'): void => {
      // Если предмет из инвентаря или схрона, удаляем его оттуда
      if (source === 'inventory') {
        const sourceIndex = inventoryItems.value.findIndex(i => i.id === item.id);
        if (sourceIndex !== -1) {
          inventoryItems.value.splice(sourceIndex, 1);
        }
      } else if (source === 'stash') {
        const sourceIndex = stashItems.value.findIndex(i => i.id === item.id);
        if (sourceIndex !== -1) {
          stashItems.value.splice(sourceIndex, 1);
        }
      } else if (source === 'equipment' && draggedFromSlot.value) {
		// если тянем из одного слота экипировки в другой, то зачищаем слот, откуда тянули
		playerStore.player.inventory.slots[draggedFromSlot.value].item = null;
	  }
      
      
      // Экипируем предмет
      playerStore.player.inventory.slots[slotType].item = item;
      
    }
  
</script>

<style scoped lang="scss">
.inventory {
  overflow: hidden;

  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }

  &__slots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-items: center;
    background: linear-gradient(45deg, var(--background-color-medium) 0%, var(--background-color) 100%);
    margin: 5px;
    border: 1px solid var(--border-color);
    padding: 0 10px;
    gap: 0;
  }

  &__slot {
    position: relative;
    display: grid;
    place-items: center;

    border: 1px solid var(--border-color);
    background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
    border-radius: 4px;
    transition: all 0.3s ease;

    min-height: 50px;
    min-width: 50px;

    &--highlighted {
      border: 1px solid var(--accent-color-gold);
      box-shadow: 0 0 10px var(--accent-color-gold);
      background: linear-gradient(145deg, rgba(255, 215, 0, 0.3), rgba(25, 21, 20, 0.9));
    }

    &--head {
      grid-column: 2;
      grid-row: 1;
    }

    &--body {
      grid-column: 2;
      grid-row: 2;
      width: 100px;
      height: 100px;
    }

    &--arms {
      grid-column: 1;
      grid-row: 1;
    }

    &--right-hand {
      grid-column: 1;
      grid-row: 2;
      width: 150px;
    }

    &--left-hand {
      grid-column: 3;
      grid-row: 2;
      width: 100px;
      height: 100px;
    }

    &--legs {
      grid-column: 2;
      grid-row: 3;
    }

    &--accessory-a {
      grid-column: 1;
      grid-row: 3;
    }

    &--accessory-b {
      grid-column: 3;
      grid-row: 1;
    }
  }

  &__slot-icon {
    position: absolute;
    opacity: 0.4;
  }

  &__item-icons {
    opacity: 0.4;
  }
  
 &__grid {
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(v-bind('gridColumns'), 50px);
    grid-template-rows: repeat(v-bind('gridRows'), 50px);
    gap: 2px;
    background: linear-gradient(45deg, var(--background-color-medium) 0%, var(--background-color) 100%);
    padding: 8px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    position: relative;
    min-height: calc(v-bind('gridRows') * 50px + (v-bind('gridRows') - 1) * 2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    position: relative;
  }

}
</style>