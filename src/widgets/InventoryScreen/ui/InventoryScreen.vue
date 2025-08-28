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
        <div 
          class="inventory__grid"
          ref="gridElement"
          @dragover.prevent="handleGridDragOver"
          @dragleave="handleGridDragLeave"
          @drop="handleGridDrop"
        >
          <div 
            v-for="(cell, index) in gridCells" 
            :key="index" 
            class="inventory__grid-cell"
            :class="{'inventory__grid-cell--highlight': isCellHighlighted(index)}"
          ></div>
          
          <!-- Предметы в инвентаре -->
          <div 
            v-for="(item, index) in inventoryItems" 
            :key="'item-'+item.id"
            class="inventory__item"
            :class="[
              `inventory__item--size-${item.width}x${item.height}`,
              { 'inventory__item--dragging': draggedItem && draggedItem.id === item.id }
            ]"
            :style="getItemPosition(item)"
            draggable="true"
            @dragstart="handleDragStart($event, item)"
            @dragend="handleDragEnd"
          >
            <div class="inventory__item-content">
              <span class="inventory__item-marker">{{ item.marker }}</span>
              <i class="fa-solid" :class="item.icon"></i>
              <div class="inventory__item-size-badge">{{ item.width }}x{{ item.height }}</div>
            </div>
          </div>
          
          <!-- Превью перетаскиваемого предмета -->
          <div 
            v-if="isDragging && draggedItem && dragPosition"
            class="inventory__item inventory__item--preview"
            :class="`inventory__item--size-${draggedItem.width}x${draggedItem.height}`"
            :style="getPreviewPosition()"
          >
            <div class="inventory__item-content">
              <span class="inventory__item-marker">{{ draggedItem.marker }}</span>
              <i class="fa-solid" :class="draggedItem.icon"></i>
              <div class="inventory__item-size-badge">{{ draggedItem.width }}x{{ draggedItem.height }}</div>
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
    import { computed, ref, type CSSProperties, onMounted } from 'vue';
    
    interface InventoryItem {
      id: number;
      name: string;
      width: number;
      height: number;
      position: { x: number; y: number };
      marker: string;
      icon: string;
    }
    
    interface CellPosition {
      x: number;
      y: number;
      itemId: number;
    }
    
    const playerStore = usePlayerStore();
    const gridElement = ref<HTMLElement | null>(null);

    // Конфигурация сетки инвентаря
    const gridColumns = 8;
    const gridRows = 6;
    const gridCells = ref(Array(gridColumns * gridRows).fill(0));
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
        icon: itemIconsByType.heavy.helmet
      },
      {
        id: 2,
        name: "Длинный меч",
        width: 1,
        height: 3,
        position: { x: 3, y: 0 },
        marker: "⚔️",
        icon: "fa-sword"
      },
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
    const draggedItem = ref<InventoryItem | null>(null);
    const isDragging = ref(false);
    const highlightedCells = ref<number[]>([]);
    const dragPosition = ref<{x: number, y: number} | null>(null);
    const gridRect = ref<DOMRect | null>(null);

    // Вычисляемое свойство для получения всех занятых ячеек
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

    onMounted(() => {
      if (gridElement.value) {
        gridRect.value = gridElement.value.getBoundingClientRect();
      }
    });

    const handleSlotClick = (): void => {
      console.log("Slot clicked");
    }

    const getItemPosition = (item: InventoryItem): CSSProperties => {
		return {
			left: `${item.position.x * (cellSize + gap) + 5}px`, // + padding контейнера
			top: `${item.position.y * (cellSize + gap) + 5}px`, // + padding контейнера
			width: `${item.width * cellSize + (item.width - 1) * gap}px`,
			height: `${item.height * cellSize + (item.height - 1) * gap}px`,
		};
	}

    const getPreviewPosition = (): CSSProperties => {
      if (!dragPosition.value) return {};
      
      // Вычисляем позицию для превью предмета
      const gridX = Math.floor((dragPosition.value.x - gridRect.value!.left) / (cellSize + gap));
      const gridY = Math.floor((dragPosition.value.y - gridRect.value!.top) / (cellSize + gap));
      
      return {
        left: `${gridX * (cellSize + gap)}px`,
        top: `${gridY * (cellSize + gap)}px`,
        width: `${draggedItem.value!.width * cellSize + (draggedItem.value!.width - 1) * gap}px`,
        height: `${draggedItem.value!.height * cellSize + (draggedItem.value!.height - 1) * gap}px`,
        opacity: '0.8',
        pointerEvents: 'none'
      };
    }

    const handleDragStart = (event: DragEvent, item: InventoryItem): void => {
      draggedItem.value = item;
      isDragging.value = true;

	  const dragImage = new Image();
	  dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	  event?.dataTransfer?.setDragImage(dragImage, 0, 0);
      
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
      
      // Восстанавливаем прозрачность
      if (event.target) {
        (event.target as HTMLElement).style.opacity = '1';
      }
    }

    const handleGridDragOver = (event: DragEvent): void => {
      event.preventDefault();
      if (!draggedItem.value || !gridRect.value) return;
      
      // Обновляем позицию курсора
      dragPosition.value = {
        x: event.clientX,
        y: event.clientY
      };
      
      // Вычисляем координаты сетки
      const gridX = Math.floor((event.clientX - gridRect.value.left) / (cellSize + gap));
      const gridY = Math.floor((event.clientY - gridRect.value.top) / (cellSize + gap));
      
      // Подсвечиваем ячейки, куда можно поместить предмет
      highlightDropZone(gridX, gridY);
    }
    
    const handleGridDragLeave = (event: DragEvent): void => {
      event.preventDefault();
      // Очищаем подсветку только если мы покидаем сетку полностью
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (!relatedTarget || !gridElement.value?.contains(relatedTarget)) {
        highlightedCells.value = [];
        dragPosition.value = null;
      }
    }

    const handleGridDrop = (event: DragEvent): void => {
      event.preventDefault();
      if (!draggedItem.value || !dragPosition.value || !gridRect.value) return;
      
      // Вычисляем координаты сетки
      const gridX = Math.floor((dragPosition.value.x - gridRect.value.left) / (cellSize + gap));
      const gridY = Math.floor((dragPosition.value.y - gridRect.value.top) / (cellSize + gap));
      
      // Проверяем, можно ли разместить предмет в этой позиции
      if (canPlaceItem(draggedItem.value, gridX, gridY)) {
        // Обновляем позицию предмета
        const itemIndex = inventoryItems.value.findIndex(item => item.id === draggedItem.value!.id);
        if (itemIndex !== -1) {
          inventoryItems.value[itemIndex].position = { x: gridX, y: gridY };
          console.log(`Item "${draggedItem.value.name}" placed at (${gridX}, ${gridY})`);
        }
      } else {
        console.log("Cannot place item here - collision or out of bounds");
      }
      
      highlightedCells.value = [];
      dragPosition.value = null;
    }
    
    const highlightDropZone = (targetX: number, targetY: number): void => {
      if (!draggedItem.value) return;
      
      const newHighlightedCells: number[] = [];
      
      // Проверяем, можно ли разместить предмет в этой позиции
      if (canPlaceItem(draggedItem.value, targetX, targetY)) {
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
    
    const isCellHighlighted = (cellIndex: number): boolean => {
      return highlightedCells.value.includes(cellIndex);
    }

    // Функция проверки возможности размещения предмета
    const canPlaceItem = (item: InventoryItem, targetX: number, targetY: number): boolean => {
      // Проверяем, не выходит ли предмет за границы инвентаря
      if (targetX < 0 || targetY < 0 || 
          targetX + item.width > gridColumns || 
          targetY + item.height > gridRows) {
        return false;
      }
      
      // Проверяем коллизии с другими предметами
      for (let dy = 0; dy < item.height; dy++) {
        for (let dx = 0; dx < item.width; dx++) {
          const checkX = targetX + dx;
          const checkY = targetY + dy;
          
          // Проверяем, занята ли эта ячейка другим предметом
          const isOccupied = occupiedCells.value.some(cell => 
            cell.x === checkX && cell.y === checkY
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
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(v-bind('gridColumns'), 50px);
    grid-template-rows: repeat(v-bind('gridRows'), 50px);
    gap: 2px;
    background-color: #333;
    padding: 5px;
    border-radius: 4px;
    position: relative;
    min-height: calc(v-bind('gridRows') * 50px + (v-bind('gridRows') - 1) * 2px);
	position: relative;
  }
  
  &__grid-cell {
    border: 1px solid #555;
    background-color: #222;
    border-radius: 2px;
    
    &--highlight {
      background-color: #4a7c59;
      border-color: #6daa80;
    }
  }
  
  &__item {
    position: absolute;
    border: 1px solid #888;
    background-color: #444;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    z-index: 10;
    transition: opacity 0.2s;
    
    &--dragging {
      opacity: 0.3;
    }
    
    &--preview {
      background-color: #666;
      border: 2px dashed #aaa;
      z-index: 20;
    }
    
    // Размеры предметов
    &--size-2x2 {
      width: calc(100px + 2px);
      height: calc(100px + 2px);
    }
    
    &--size-1x3 {
      width: calc(50px + 0px);
      height: calc(150px + 4px);
    }
    
    &--size-1x1 {
      width: calc(50px + 0px);
      height: calc(50px + 0px);
    }
  }
  
  &__item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  &__item-marker {
    font-size: 12px;
    margin-bottom: 2px;
  }
  
  &__item-size-badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1px 3px;
    border-radius: 2px;
  }
}
</style>