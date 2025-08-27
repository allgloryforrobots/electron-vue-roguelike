<template>
  <div class="inventory-container">
    
    <div class="inventory-layout">
      <!-- Блок экипировки -->
      <div class="equipment-section">
        <DDHeader title="Экипировка" />
        
        <!-- Отображение персонажа со слотами -->
        <div class="character-slots">
          <DDSubstrate class="head-slot" :width="50" square>
			<span>head-slot</span>
            <div 
              :slot="playerStore.player.inventory.slots.head" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="body-slot" :width="50" square>
			<span>body-slot</span>
            <div 
              :slot="playerStore.player.inventory.slots.body" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="arms-slot" :width="50" square>
			<span>arms-slot</span>
            <div 
              :slot="playerStore.player.inventory.slots.arms" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

		  <DDSubstrate class="legs-slot" :width="50" square>
			<span>legs-slot</span>
			<div 
              :slot="playerStore.player.inventory.slots.legs" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>
            
          <DDSubstrate class="accessory-a-slot" :width="50" square>
			<span>accessory-a-slot</span>
            <div 
              :slot="playerStore.player.inventory.slots.accessoryA" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

		  <DDSubstrate class="accessory-b-slot" :width="50" square>
			<span>accessory-b-slot</span>
			<div 
              :slot="playerStore.player.inventory.slots.accessoryB" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

          <!-- Комплекты оружия -->
            <DDSubstrate class="right-arm-slot" :width="50" square>
			  <span>right-arm-slot</span>
              <div 
                :slot="playerStore.player.inventory.slots.complect1.rightHand" 
                @item-click="handleSlotClick"
              />
			</DDSubstrate>
			<DDSubstrate class="left-arm-slot"  :width="50" square>
			  <span>left-arm-slot</span>
              <div 
                :slot="playerStore.player.inventory.slots.complect1.leftHand" 
                @item-click="handleSlotClick"
              />
			</DDSubstrate>
          
          <!-- <div class="weapon-set">
            <p>Комплект 2</p>
            <DDSubstrate :width="50" square>
              <div 
                :slot="playerStore.player.inventory.slots.complect2.rightHand" 
                @item-click="handleSlotClick"
              />
              <div 
                :slot="playerStore.player.inventory.slots.complect2.leftHand" 
                @item-click="handleSlotClick"
              />
            </DDSubstrate>
          </div> -->
          
          <!-- Быстрые слоты -->
            <DDSubstrate class="quick-slot-a" :width="50" square>
				<span>quick-slot-a</span>
              <div 
                :slot="playerStore.player.inventory.slots.quickSlotA" 
                @item-click="handleSlotClick"
              />
			</DDSubstrate>
			<DDSubstrate class="quick-slot-b" :width="50" square>
				<span>quick-slot-a</span>
				<div 
					:slot="playerStore.player.inventory.slots.quickSlotB" 
					@item-click="handleSlotClick"
              	/>
			</DDSubstrate>
        </div>
      </div>
      
      <!-- Блок инвентаря -->
      <div class="backpack-section">
        <DDHeader title="Рюкзак" />
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

		<div class="all-items">
			<DDHeader title="Схрон" />
		</div>

    </div>
  </div>
</template>

<script setup lang="ts">
    import { InventorySlotItemType, Item, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
	import DDHeader from '@/shared/ui/DDHeader/DDHeader.vue';	
	import DDSubstrate from '@/shared/ui/DDSubstrate/DDSubstrate.vue';
	
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
  .inventory-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }
  .character-slots {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(7, 1fr);
	/* gap: 10px; */
	height: 600px;
	place-items: center; 
  }

  /* Расположение слотов на теле персонажа */
	.head-slot {
		grid-column: 3;
		grid-row: 1;
	}
	
	.body-slot {
		grid-column: 3;
		grid-row: 2;
	}
	
	.arms-slot {
		grid-column: 2;
		grid-row: 3;
	}
	
	.right-arm-slot {
		grid-column: 1;
		grid-row: 3;
	}
	
	.left-arm-slot {
		grid-column: 5;
		grid-row: 3;
	}
	
	.legs-slot {
		grid-column: 3;
		grid-row: 5;
	}
	
	.accessory-a-slot {
		grid-column: 3;
		grid-row: 3;
	}
	
	.accessory-b-slot {
		grid-column: 4;
		grid-row: 3;
	}

	.quick-slot-a {
		grid-column: 3;
		grid-row: 4;
	}

	.quick-slot-b {
		grid-column: 4;
		grid-row: 4;
	}
</style>