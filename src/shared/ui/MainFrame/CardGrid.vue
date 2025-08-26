<script setup lang="ts">
    import { computed } from 'vue'
    import Card from './Card.vue'

    const props = defineProps<{
        filter: string
    }>()

    interface Card {
        id: number
        icon: string
        name: string
        type: string
        stats: Array<{ label: string; value: string }>
        description: string
    }

    const items = computed<Card[]>(() => [
    {
        id: 1,
        icon: '⚔️',
        name: 'Дragon\'s Vein',
        type: 'weapon',
        stats: [
        { label: 'Урон:', value: '145' },
        { label: 'Вес:', value: '3.2' },
        { label: 'Требует:', value: 'Сила 65' }
        ],
        description: 'Меч, выкованный из чешуи дракона, излучает тусклое тепло.'
    },
    {
        id: 2,
        icon: '🛡️',
        name: 'Грифонный щит',
        type: 'armor',
        stats: [
        { label: 'Защита:', value: '87' },
        { label: 'Вес:', value: '5.5' },
        { label: 'Сопротивление:', value: 'Огонь +20' }
        ],
        description: 'Щит, украшенный перьями грифона, легок и прочен.'
    },
    {
        id: 3,
        icon: '🧪',
        name: 'Эликсир здоровья',
        type: 'consumable',
        stats: [
        { label: 'Восстановление:', value: '500 HP' },
        { label: 'Вес:', value: '0.5' },
        { label: 'Количество:', value: '3' }
        ],
        description: 'Восстанавливает здоровье при употреблении.'
    },
    {
        id: 4,
        icon: '💎',
        name: 'Драконий камень',
        type: 'material',
        stats: [
        { label: 'Редкость:', value: 'Редкий' },
        { label: 'Вес:', value: '1.2' },
        { label: 'Цена:', value: '1250 G' }
        ],
        description: 'Камень, который светится изнутри магической энергией.'
    },
    {
        id: 5,
        icon: '🏹',
        name: 'Лук Стихий',
        type: 'weapon',
        stats: [
        { label: 'Урон:', value: '92' },
        { label: 'Вес:', value: '2.8' },
        { label: 'Элемент:', value: 'Лёд/Огонь' }
        ],
        description: 'Лук, способный выпускать стрелы стихийной энергии.'
    },
    {
        id: 6,
        icon: '🧥',
        name: 'Плащ Странника',
        type: 'armor',
        stats: [
        { label: 'Защита:', value: '35' },
        { label: 'Вес:', value: '1.5' },
        { label: 'Свойство:', value: 'Невидимость +10%' }
        ],
        description: 'Плащ, который помогает оставаться незамеченным.'
    },
    {
        id: 7,
        icon: '🍖',
        name: 'Жаркое из мяса саурьяна',
        type: 'consumable',
        stats: [
        { label: 'Восстановление:', value: '250 HP / 100 ST' },
        { label: 'Вес:', value: '1.0' },
        { label: 'Эффект:', value: 'Сила +5%' }
        ],
        description: 'Вкусное блюдо, временно увеличивающее силу.'
    },
    {
        id: 8,
        icon: '🪶',
        name: 'Перо гарпии',
        type: 'material',
        stats: [
        { label: 'Редкость:', value: 'Обычный' },
        { label: 'Вес:', value: '0.1' },
        { label: 'Цена:', value: '80 G' }
        ],
        description: 'Перо, используемое в крафте для создания легкой брони.'
    }
    ])

    const filteredItems = computed(() => {
    if (props.filter === 'all') return items.value
    return items.value.filter(item => item.type === props.filter)
    })
</script>

<template>
  <div class="items-grid">
    <Card
      v-for="item in filteredItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<style scoped lang="scss">
    .items-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
</style>