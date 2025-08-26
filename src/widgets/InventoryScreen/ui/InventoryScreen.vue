<template>
    
<!-- 
  <div class="inventory-screen">
    <div class="character-paperdoll">

        <Header>
            Инвентарь
        </Header>

        <div>
            <ListElement class="slot" @click="selectSlot('head')">
                <div class="slot-label">Голова</div>
                <div class="slot-item">{{ inventory.slots.head?.name || 'Пусто' }}</div>
            </ListElement>
            
            <ListElement class="slot" @click="selectSlot('body')">
                <div class="slot-label">Тело</div>
                <div class="slot-item">{{ inventory.slots.body?.name || 'Пусто' }}</div>
            </ListElement>
            
            <ListElement class="slot" @click="selectSlot('arms')">
                <div class="slot-label">Руки</div>
                <div class="slot-item">{{ inventory.slots.arms?.name || 'Пусто' }}</div>
            </ListElement>
            
            <ListElement class="slot" @click="selectSlot('legs')">
                <div class="slot-label">Ноги</div>
                <div class="slot-item">{{ inventory.slots.legs?.name || 'Пусто' }}</div>
            </ListElement>
        </div>

        <h3>Комплект 1</h3>
        <div class="weapon-set">
            <ListElement class="slot" @click="selectWeaponSlot('complect1', 'rightHand')">
                <div class="slot-label">Правая рука</div>
                <div class="slot-item">{{ inventory.slots.complect1.rightHand?.name || 'Пусто' }}</div>
            </ListElement>

            <ListElement class="slot" @click="selectWeaponSlot('complect1', 'leftHand')">
                <div class="slot-label">Левая рука</div>
                <div class="slot-item">{{ inventory.slots.complect1.leftHand?.name || 'Пусто' }}</div>
            </ListElement>
        </div>

        <h3>Комплект 2</h3>
        <div class="weapon-set">
            <ListElement class="slot" @click="selectWeaponSlot('complect2', 'rightHand')">
                <div class="slot-label">Правая рука</div>
                <div class="slot-item">{{ inventory.slots.complect2.rightHand?.name || 'Пусто' }}</div>
            </ListElement>

            <ListElement class="slot" @click="selectWeaponSlot('complect2', 'leftHand')">
                <div class="slot-label">Левая рука</div>
                <div class="slot-item">{{ inventory.slots.complect2.leftHand?.name || 'Пусто' }}</div>
            </ListElement>
        </div>

        <div class="quick-slots">
            <h3>Быстрые слоты</h3>

            <div class="quick-slots-grid">
                <ListElement class="slot" @click="selectSlot('quickSlotA')">
                    <div class="slot-label">Быстрый слот A</div>
                    <div class="slot-item">{{ inventory.slots.quickSlotA?.name || 'Пусто' }}</div>
                </ListElement>

                <ListElement class="slot" @click="selectSlot('quickSlotB')">
                    <div class="slot-label">Быстрый слот B</div>
                    <div class="slot-item">{{ inventory.slots.quickSlotB?.name || 'Пусто' }}</div>
                </ListElement>
            </div>
        </div>
        </div>

        <div class="backpack">
            <h2>Рюкзак</h2>
            <div class="backpack-items">
                <!-- <div 
                    v-for="(item, index) in inventory.backpackItems" 
                    :key="index" 
                    class="backpack-item"
                    @click="selectBackpackItem(index)"
                    :class="{ 'selected': selectedBackpackIndex === index }"
                    >
                    {{ item.name }} ({{ item.constructor.name }})
                </div> -->

<!-- 
        </div>
    </div>

    </div> -->


</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import Accents from '@/shared/ui/Accents/Accents.vue'

    const selectSlot = (slotName: string) => {

    }

    const selectBackpackItem = (slotName: string) => {

    }

    const selectWeaponSlot = (slotName: string) => {

    }

    const selectedBackpackIndex = 1;

    // Состояние компонента
    const inventory = reactive({
        slots: {
            head: null,
            body: null,
            arms: null,
            legs: null,
            smallItems: [],
            quickSlotA: null,
            quickSlotB: null,
            complect1: {
            rightHand: null,
            leftHand: null
            },
            complect2: {
            rightHand: null,
            leftHand: null
            }
        },
        backpackItems: [
            { name: "Меч" },
            { name: "Двуручный меч" },
        ]
    })

</script>

<style scoped>
    .inventory-screen {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .slots-grid, .weapon-set, .quick-slots-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 15px;
    }

    .slot:hover {
        background-color: #e0e0e0;
    }

    .slot-item {
     margin-top: 5px;
    }

    .backpack-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 8px;
    }


    .backpack-item:hover, .backpack-item.selected {
        background-color: #e3f2fd;
        border-color: #2196f3;
    }

    .item-actions {
        grid-column: 1 / -1;
        border: 2px solid #333;
        padding: 15px;
        border-radius: 8px;
        background-color: #f5f5f5;
    }


    button:hover:not(:disabled) {
        background-color: #333;
        color: white;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>