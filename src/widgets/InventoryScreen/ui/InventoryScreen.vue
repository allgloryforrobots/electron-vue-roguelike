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
        <div class="inventory__items">
          <div 
            v-for="(item, index) in testItems" 
            :key="index" 
            class="inventory__item"
          >
            <div class="inventory__item-name">
              <span class="inventory__item-icons">
                {{ item.marker }}
                <i class="fa-solid" :class="item.icon"></i> 
              </span>
              {{ item.name }}
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
    
    const playerStore = usePlayerStore();

    const handleSlotClick = () => {
      // Обработчик клика по слоту
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
</style>