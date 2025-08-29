<template>
  <div class="inventory">
    <div class="inventory__layout">
      <!-- Блок экипировки -->
      <div class="inventory__section">
        <DDHeader title="Экипировка" class="inventory__header" />
        
        <!-- Отображение персонажа со слотами -->
        <div class="inventory__slots">
          <div 
            class="inventory__slot inventory__slot--head" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'head')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'head')"
            :data-slot-type="'head'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'head' }"
          >
            <i class="fa-solid fa-helmet-safety inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.head"
              :slot="playerStore.player.inventory.slots.head" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div 
            class="inventory__slot inventory__slot--body" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'body')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'body')"
            :data-slot-type="'body'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'body' }"
          >
            <i class="fa-solid fa-shirt inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.body"
              :slot="playerStore.player.inventory.slots.body" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div 
            class="inventory__slot inventory__slot--arms" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'arms')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'arms')"
            :data-slot-type="'arms'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'arms' }"
          >
            <i class="fa-solid fa-mitten inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.arms"
              :slot="playerStore.player.inventory.slots.arms" 
              @item-click="handleSlotClick"
            />
          </div>

          <div 
            class="inventory__slot inventory__slot--legs" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'legs')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'legs')"
            :data-slot-type="'legs'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'legs' }"
          >
            <i class="fa-solid fa-shoe-prints inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.legs"
              :slot="playerStore.player.inventory.slots.legs" 
              @item-click="handleSlotClick"
            ></div>
          </div>
            
          <div 
            class="inventory__slot inventory__slot--accessory-a" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'accessoryA')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'accessoryA')"
            :data-slot-type="'accessoryA'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'accessoryA' }"
          >
            <i class="fa-solid fa-ring inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.accessoryA"
              :slot="playerStore.player.inventory.slots.accessoryA" 
              @item-click="handleSlotClick"
            />
          </div>

          <div 
            class="inventory__slot inventory__slot--accessory-b" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'accessoryB')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'accessoryB')"
            :data-slot-type="'accessoryB'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'accessoryB' }"
          >
            <i class="fa-solid fa-ring inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.accessoryB"
              :slot="playerStore.player.inventory.slots.accessoryB" 
              @item-click="handleSlotClick"
            />
          </div>

          <!-- Комплекты оружия -->
          <div 
            class="inventory__slot inventory__slot--right-hand" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'rightHand')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'rightHand')"
            :data-slot-type="'rightHand'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'rightHand' }"
          >
            <i class="fa-solid fa-hand-fist inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.complect1.rightHand"
              :slot="playerStore.player.inventory.slots.complect1.rightHand" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div 
            class="inventory__slot inventory__slot--left-hand" 
            :width="50" 
            square
            @dragover.prevent="handleSlotDragOver($event, 'leftHand')"
            @dragleave="handleSlotDragLeave"
            @drop="handleSlotDrop($event, 'leftHand')"
            :data-slot-type="'leftHand'"
            :class="{ 'inventory__slot--highlighted': highlightedSlot === 'leftHand' }"
          >
            <i class="fa-solid fa-shield inventory__slot-icon"></i>
            <div 
              v-if="playerStore.player.inventory.slots.complect1.leftHand"
              :slot="playerStore.player.inventory.slots.complect1.leftHand" 
              @item-click="handleSlotClick"
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
            :style="getItemPosition(item, 'inventory')"
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
            :style="getItemPosition(item, 'stash')"
            draggable="true"
            @dragstart="handleDragStart($event, item, 'stash')"
            @dragend="handleDragEnd"
          />
          
          <!-- Превью перетаскиваемого предмета -->
          <InventoryItem 
            v-if="isDragging && draggedItem && dragPosition && currentGrid === 'stash'"
            :style="getPreviewPosition()"
            :item="draggedItem"
            preview
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { InventorySlotItemType, Item, itemIconsByType, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
    import DDHeader from '@/shared/ui/DDHeader/DDHeader.vue';	
    import { computed, ref, type CSSProperties, onMounted } from 'vue';
    import InventoryCell from './InventoryCell.vue';
    import InventoryItem from './InventoryItem.vue';
    
    interface InventoryItem {
      id: number;
      name: string;
      width: number;
      height: number;
      position: { x: number; y: number };
      marker: string;
      icon: string;
      type?: string; // Тип предмета для проверки совместимости со слотами
    }
    
    interface CellPosition {
      x: number;
      y: number;
      itemId: number;
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
    
     // Предметы в инвентаре
    const inventoryItems = ref<InventoryItem[]>([
      {
        id: 1,
        name: "Стальной полный шлем",
        width: 2,
        height: 2,
        position: { x: 0, y: 0 },
        marker: itemIconsByType.heavy.marker,
        icon: itemIconsByType.heavy.helmet,
        type: "head"
      },
      {
        id: 2,
        name: "Длинный меч",
        width: 3,
        height: 1,
        position: { x: 3, y: 2 },
        marker: "⚔️",
        icon: "fa-sword",
        type: "rightHand"
      },
      {
        id: 3,
        name: "Зелье здоровья",
        width: 1,
        height: 1,
        position: { x: 5, y: 0 },
        marker: "🧪",
        icon: "fa-flask",
        type: "quickSlotA"
      }
    ]);

    // Предметы в схроне
    const stashItems = ref<InventoryItem[]>([
      {
        id: 4,
        name: "Кольцо маны",
        width: 1,
        height: 1,
        position: { x: 2, y: 2 },
        marker: "💍",
        icon: "fa-ring",
        type: "accessoryA"
      }
    ]);

    // Drag and Drop переменные
    const draggedItem = ref<InventoryItem | null>(null);
    const isDragging = ref(false);
    const highlightedCells = ref<number[]>([]);
    const dragPosition = ref<{x: number, y: number} | null>(null);
    const gridRect = ref<DOMRect | null>(null);
    const currentGrid = ref<'inventory' | 'stash' | 'equipment' | null>(null);
    const sourceGrid = ref<'inventory' | 'stash' | null>(null);
    const highlightedSlot = ref<string | null>(null);

    // Соответствие типов предметов и слотов
    const slotCompatibility: Record<string, string[]> = {
      head: ['head'],
      body: ['body'],
      arms: ['arms'],
      legs: ['legs'],
      accessoryA: ['accessoryA', 'accessoryB'],
      accessoryB: ['accessoryA', 'accessoryB'],
      rightHand: ['rightHand', 'leftHand'],
      leftHand: ['rightHand', 'leftHand'],
      quickSlotA: ['quickSlotA', 'quickSlotB'],
      quickSlotB: ['quickSlotA', 'quickSlotB']
    };

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
              cells.push({ x: cellX, y: cellY, itemId: item.id });
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
              cells.push({ x: cellX, y: cellY, itemId: item.id });
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

    const handleSlotClick = (): void => {
      console.log("Slot clicked");
    }

    const getItemPosition = (item: InventoryItem, gridType: 'inventory' | 'stash'): CSSProperties => {
		return {
			left: `${item.position.x * (cellSize + gap) + 5}px`, // + padding контейнера
			top: `${item.position.y * (cellSize + gap) + 5}px`, // + padding контейнера
			width: `${item.width * cellSize + (item.width - 1) * gap}px`,
			height: `${item.height * cellSize + (item.height - 1) * gap}px`,
		};
	}

    const getPreviewPosition = (): CSSProperties => {
      if (!dragPosition.value || !gridRect.value) return {};
      
      // Вычисляем позицию для превью предмета
      const gridX = Math.floor((dragPosition.value.x - gridRect.value.left) / (cellSize + gap));
      const gridY = Math.floor((dragPosition.value.y - gridRect.value.top) / (cellSize + gap));
      
      return {
        left: `${gridX * (cellSize + gap)}px`,
        top: `${gridY * (cellSize + gap)}px`,
        width: `${draggedItem.value!.width * cellSize + (draggedItem.value!.width - 1) * gap}px`,
        height: `${draggedItem.value!.height * cellSize + (draggedItem.value!.height - 1) * gap}px`,
        opacity: '0.8',
        pointerEvents: 'none'
      };
    }

    const handleDragStart = (event: DragEvent, item: InventoryItem, source: 'inventory' | 'stash'): void => {
      draggedItem.value = item;
      isDragging.value = true;
      sourceGrid.value = source;

      // const dragImage = new Image();
      // dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      // event?.dataTransfer?.setDragImage(dragImage, 0, 0);
      
      // Устанавливаем данные для передачи
      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', item.id.toString());
        event.dataTransfer.effectAllowed = 'move';
      }
      
      // Визуальный эффект при начале перетаскивания
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '0.5';
      }
    }

    const handleDragEnd = (event: DragEvent): void => {
      isDragging.value = false;
      draggedItem.value = null;
      highlightedCells.value = [];
      dragPosition.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
      highlightedSlot.value = null;
      
      // Восстанавливаем прозрачность
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '1';
      }
    }

    const handleGridDragOver = (event: DragEvent, gridType: 'inventory' | 'stash'): void => {
      event.preventDefault();
      if (!draggedItem.value) return;
      
      currentGrid.value = gridType;
      highlightedSlot.value = null; // Сбрасываем подсветку слота
      
      // Обновляем позицию курсора
      dragPosition.value = {
        x: event.clientX,
        y: event.clientY
      };
      
      // Получаем актуальные размеры сетки
      const currentGridRect = gridType === 'inventory' 
        ? gridElement.value?.getBoundingClientRect() 
        : stashGridElement.value?.getBoundingClientRect();
      
      if (!currentGridRect) return;
      
      // Вычисляем координаты сетки
      const gridX = Math.floor((event.clientX - currentGridRect.left) / (cellSize + gap));
      const gridY = Math.floor((event.clientY - currentGridRect.top) / (cellSize + gap));
      
      // Подсвечиваем ячейки, куда можно поместить предмет
      highlightDropZone(gridX, gridY, gridType);
    }
    
    const handleGridDragLeave = (event: DragEvent): void => {
      event.preventDefault();
      // Очищаем подсветку только если мы покидаем сетку полностью
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
      if (!draggedItem.value || !dragPosition.value || !sourceGrid.value) return;
      
      // Получаем актуальные размеры целевой сетки
      const targetGridRect = targetGrid === 'inventory' 
        ? gridElement.value?.getBoundingClientRect() 
        : stashGridElement.value?.getBoundingClientRect();
      
      if (!targetGridRect) return;
      
      // Вычисляем координаты сетки
      const gridX = Math.floor((dragPosition.value.x - targetGridRect.left) / (cellSize + gap));
      const gridY = Math.floor((dragPosition.value.y - targetGridRect.top) / (cellSize + gap));
      
      // Проверяем, можно ли разместить предмет в этой позиции
      if (canPlaceItem(draggedItem.value, gridX, gridY, targetGrid)) {
        // Перемещаем предмет между сетками или внутри одной сетки
        moveItem(draggedItem.value, gridX, gridY, sourceGrid.value, targetGrid);
        console.log(`Item "${draggedItem.value.name}" moved to ${targetGrid} at (${gridX}, ${gridY})`);
      } else {
        console.log("Cannot place item here - collision or out of bounds");
      }
      
      highlightedCells.value = [];
      dragPosition.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
      highlightedSlot.value = null;
    }
    
    // Обработчики для слотов экипировки
    const handleSlotDragOver = (event: DragEvent, slotType: string): void => {
      event.preventDefault();
      if (!draggedItem.value) return;
      
      currentGrid.value = 'equipment';
      highlightedCells.value = []; // Сбрасываем подсветку ячеек сетки
      
      // Проверяем совместимость предмета и слота
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
    
    const handleSlotDrop = (event: DragEvent, slotType: string): void => {
      event.preventDefault();
      if (!draggedItem.value || !sourceGrid.value) return;
      
      // Проверяем совместимость предмета и слота
      if (isItemCompatibleWithSlot(draggedItem.value, slotType)) {
        // Экипируем предмет
        equipItem(draggedItem.value, slotType, sourceGrid.value);
        console.log(`Item "${draggedItem.value.name}" equipped to ${slotType}`);
      } else {
        console.log("Item is not compatible with this slot");
      }
      
      highlightedSlot.value = null;
      currentGrid.value = null;
      sourceGrid.value = null;
    }
    
    const highlightDropZone = (targetX: number, targetY: number, gridType: 'inventory' | 'stash'): void => {
      if (!draggedItem.value) return;
      
      const newHighlightedCells: number[] = [];
      
      // Проверяем, можно ли разместить предмет в этой позиции
      if (canPlaceItem(draggedItem.value, targetX, targetY, gridType)) {
        // Добавляем все ячейки, которые займет предмет
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

    // Функция проверки возможности размещения предмета
    const canPlaceItem = (item: InventoryItem, targetX: number, targetY: number, gridType: 'inventory' | 'stash'): boolean => {
      // Проверяем, не выходит ли предмет за границы инвентаря
      if (targetX < 0 || targetY < 0 || 
          targetX + item.width > gridColumns || 
          targetY + item.height > gridRows) {
        return false;
      }
      
      // Получаем занятые ячейки в зависимости от типа сетки
      const occupied = gridType === 'inventory' ? occupiedCells.value : occupiedStashCells.value;
      
      // Проверяем коллизии с другими предметами
      for (let dy = 0; dy < item.height; dy++) {
        for (let dx = 0; dx < item.width; dx++) {
          const checkX = targetX + dx;
          const checkY = targetY + dy;
          
          // Проверяем, занята ли эта ячейка другим предметом
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

    // Функция проверки совместимости предмета и слота
    const isItemCompatibleWithSlot = (item: InventoryItem, slotType: string): boolean => {
      if (!item.type) return false;
      
      // Проверяем, совместим ли тип предмета с типом слота
      return slotCompatibility[item.type]?.includes(slotType) || false;
    }

    // Функция перемещения предмета между сетками
    const moveItem = (item: InventoryItem, targetX: number, targetY: number, source: 'inventory' | 'stash', target: 'inventory' | 'stash'): void => {
      // Удаляем предмет из исходной сетки
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
      
      // Обновляем позицию предмета
      const updatedItem = { ...item, position: { x: targetX, y: targetY } };
      
      // Добавляем предмет в целевую сетку
      if (target === 'inventory') {
        inventoryItems.value.push(updatedItem);
      } else {
        stashItems.value.push(updatedItem);
      }
    }
    
    // Функция экипировки предмета
    const equipItem = (item: InventoryItem, slotType: string, source: 'inventory' | 'stash'): void => {
      // Удаляем предмет из исходной сетки
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
      
      // Экипируем предмет (здесь должна быть логика добавления в слоты персонажа)
      // В данном примере просто добавляем в хранилище игрока
      playerStore.player.inventory.slots[slotType as keyof typeof playerStore.player.inventory.slots] = item;
      
      console.log(`Item "${item.name}" equipped to ${slotType}`);
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