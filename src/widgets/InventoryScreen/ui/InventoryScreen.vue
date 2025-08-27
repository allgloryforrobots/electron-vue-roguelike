<template>
  <div class="inventory-container">
    <h1>Инвентарь персонажа</h1>
    
    <div class="inventory-layout">
      <!-- Блок экипировки -->
      <div class="equipment-section">
        <h2>Экипировка</h2>
        
        <!-- Отображение персонажа со слотами -->
        <div class="character-slots">
          <div class="slot-row">
            <div 
              :slot="playerStore.player.inventory.slots.head" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div class="slot-row">
            <div 
              :slot="playerStore.player.inventory.slots.body" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div class="slot-row">
            <div 
              :slot="playerStore.player.inventory.slots.arms" 
              @item-click="handleSlotClick"
            />
            <div 
              :slot="playerStore.player.inventory.slots.legs" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <div class="slot-row">
            <div 
              :slot="playerStore.player.inventory.slots.accessoryA" 
              @item-click="handleSlotClick"
            />
            <div 
              :slot="playerStore.player.inventory.slots.accessoryB" 
              @item-click="handleSlotClick"
            />
          </div>
          
          <!-- Комплекты оружия -->
          <div class="weapon-set">
            <h3>Комплект 1</h3>
            <div class="slot-row">
              <div 
                :slot="playerStore.player.inventory.slots.complect1.rightHand" 
                @item-click="handleSlotClick"
              />
              <div 
                :slot="playerStore.player.inventory.slots.complect1.leftHand" 
                @item-click="handleSlotClick"
              />
            </div>
          </div>
          
          <div class="weapon-set">
            <h3>Комплект 2</h3>
            <div class="slot-row">
              <div 
                :slot="playerStore.player.inventory.slots.complect2.rightHand" 
                @item-click="handleSlotClick"
              />
              <div 
                :slot="playerStore.player.inventory.slots.complect2.leftHand" 
                @item-click="handleSlotClick"
              />
            </div>
          </div>
          
          <!-- Быстрые слоты -->
          <div class="quick-slots">
            <h3>Быстрые слоты</h3>
            <div class="slot-row">
              <div 
                :slot="playerStore.player.inventory.slots.quickSlotA" 
                @item-click="handleSlotClick"
              />
              <div 
                :slot="playerStore.player.inventory.slots.quickSlotB" 
                @item-click="handleSlotClick"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Блок инвентаря -->
      <div class="backpack-section">
        <h2>Рюкзак</h2>
        <div class="backpack-items">
          <div 
            v-for="(item, index) in playerStore.player.inventory.backpackItems" 
            :key="index" 
            class="backpack-item"
          >
            <div class="item-name">{{ item.name }}</div>
            <div class="item-type">{{ item.itemType }}</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { InventorySlotItemType, Item, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
    const playerStore = usePlayerStore();

    const handleSlotClick = () => {

    }

    const testItems = [
        new Item({
            name: "Стальной шлем",
            codename: "steel_helmet",
            slot: InventorySlotItemType.HEAD,
            lockSlots: [],
            itemType: itemTypes.helmet
        }),
        new Item({
            name: "Кожаный доспех",
            codename: "leather_armor",
            slot: InventorySlotItemType.BODY,
            lockSlots: [],
            itemType: itemTypes.armor
        }),
        new Item({
            name: "Стальной меч",
            codename: "steel_sword",
            slot: InventorySlotItemType.RIGHT_HAND,
            lockSlots: [],
            itemType: itemTypes.sword
        }),
        new Item({
            name: "Деревянный щит",
            codename: "wooden_shield",
            slot: InventorySlotItemType.LEFT_HAND,
            lockSlots: [],
            itemType: itemTypes.armor
        }),
        new Item({
            name: "Кольцо здоровья",
            codename: "health_ring",
            slot: InventorySlotItemType.ACCESSORY,
            lockSlots: [],
            itemType: itemTypes.ring
        }),
        new Item({
            name: "Зелье лечения",
            codename: "health_potion",
            slot: InventorySlotItemType.QUICK_SLOT,
            lockSlots: [],
            itemType: itemTypes.potion
        })
    ];

</script>

<style scoped>
</style>