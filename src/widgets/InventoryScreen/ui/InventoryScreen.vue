<template>
  <div class="inventory-container">
    
    <div class="inventory-layout">
      <!-- Блок экипировки -->
      <div class="equipment-section">
        <DDHeader title="Экипировка" />
        
        <!-- Отображение персонажа со слотами -->
        <div class="character-slots">
          <DDSubstrate class="head-slot slot" :width="50" square>
			<i class="fa-solid fa-helmet-safety"></i>
            <div 
              :slot="playerStore.player.inventory.slots.head" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="body-slot slot" :width="50" square>
			<i class="fa-solid fa-shirt"></i>
            <div 
              :slot="playerStore.player.inventory.slots.body" 
              @item-click="handleSlotClick"
            />
          </DDSubstrate>
          
          <DDSubstrate class="arms-slot slot" :width="50" square>
			<i class="fa-solid fa-mitten"></i>
            <div 
              :slot="playerStore.player.inventory.slots.arms" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

		  <DDSubstrate class="legs-slot slot" :width="50" square>
			<i class="fa-solid fa-shoe-prints"></i>
			<div 
              :slot="playerStore.player.inventory.slots.legs" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>
            
          <DDSubstrate class="accessory-a-slot slot" :width="50" square>
			<i class="fa-solid fa-ring"></i>
            <div 
              :slot="playerStore.player.inventory.slots.accessoryA" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

		  <DDSubstrate class="accessory-b-slot slot" :width="50" square>
			<i class="fa-solid fa-ring"></i>
			<div 
              :slot="playerStore.player.inventory.slots.accessoryB" 
              @item-click="handleSlotClick"
            />
		  </DDSubstrate>

          <!-- Комплекты оружия -->
            <DDSubstrate class="right-arm-slot slot" :width="50" square>
			  <i class="fa-solid fa-hand-fist"></i>
              <div 
                :slot="playerStore.player.inventory.slots.complect1.rightHand" 
                @item-click="handleSlotClick"
              />
			</DDSubstrate>
			<DDSubstrate class="left-arm-slot slot"  :width="50" square>
			  <i class="fa-solid fa-shield"></i>
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
            <DDSubstrate class="quick-slot-a slot" :width="50" square>
				<i class="fa-solid fa-scroll"></i>
              <div 
                :slot="playerStore.player.inventory.slots.quickSlotA" 
                @item-click="handleSlotClick"
              />
			</DDSubstrate>
			<DDSubstrate class="quick-slot-b slot" :width="50" square>
				<i class="fa-solid fa-scroll"></i>
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
            v-for="(item, index) in testItems" 
            :key="index" 
            class="backpack-item"
          >
            <div class="item-name">
				{{ item.marker }}
				<i class="fa-solid" :class="item.icon"></i> 
				{{ item.name }}
			</div>
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
    import { InventorySlotItemType, Item, itemIconsByType, itemTypes } from '@/entities/Item';
    import { usePlayerStore } from '@/entities/Player';
	import DDHeader from '@/shared/ui/DDHeader/DDHeader.vue';	
	import DDSubstrate from '@/shared/ui/DDSubstrate/DDSubstrate.vue';
	
    const playerStore = usePlayerStore();

    const handleSlotClick = () => {

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

  .slot {
	position: relative;
	display: grid;
  	place-items: center; 

	i {
		position: absolute;
		opacity: 0.1;
	}
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