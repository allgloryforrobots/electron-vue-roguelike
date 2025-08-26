<script setup lang="ts">
    interface ItemStat {
        label: string
        value: string
    }

    interface Item {
        icon: string
        name: string
        type: string
        stats: ItemStat[]
        description: string
    }

    defineProps<{
        item: Item
    }>()

    const typeClasses = {
        weapon: 'weapon',
        armor: 'armor',
        consumable: 'consumable',
        material: 'material'
    }
</script>

<template>
  <div class="item-card">
    <div class="item-icon">{{ item.icon }}</div>
    <h3 class="item-name">{{ item.name }}</h3>
    <div class="item-stats">
      <div v-for="(stat, index) in item.stats" :key="index" class="stat">
        <span>{{ stat.label }}</span>
        <span class="stat-value">{{ stat.value }}</span>
      </div>
    </div>
    <p class="item-description">{{ item.description }}</p>
    <span class="item-type" :class="typeClasses[item.type as keyof typeof typeClasses]">
      {{ 
        item.type === 'weapon' ? 'Оружие' :
        item.type === 'armor' ? 'Броня' :
        item.type === 'consumable' ? 'Расходник' : 'Материал'
      }}
    </span>
  </div>
</template>

<style scoped lang="scss">
    .item-card {
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--border-color);
        padding: 15px;
        border-radius: 4px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .item-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        border-color: var(--accent-color-8);
    }

    .item-card::before {
    content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
    }

    .item-icon {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 15px;
        color: var(--accent-color-2);
        text-shadow: 0 0 5px rgba(212, 163, 115, 0.5);
    }

    .item-name {
        font-size: 1.2rem;
        color: var(--accent-color-2);
        margin-bottom: 10px;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 8px;
        font-variant: small-caps;
    }

    .item-stats {
        margin-bottom: 15px;
        flex-grow: 1;
    }

    .stat {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 0.9rem;
    }

    .stat-value {
        color: var(--accent-color-6);
    }

    .item-description {
        font-style: italic;
        font-size: 0.9rem;
        color: var(--text-color);
        margin-bottom: 15px;
        border-top: 1px solid var(--border-color);
        padding-top: 10px;
    }

    .item-type {
        display: inline-block;
        padding: 3px 8px;
        font-size: 0.8rem;
        border-radius: 3px;
        margin-top: 10px;
        align-self: flex-start;
    }

    .weapon {
        background-color: rgba(161, 68, 44, 0.2);
        color: var(--accent-color-3);
        border: 1px solid var(--accent-color-4);
    }

    .armor {
        background-color: rgba(73, 122, 120, 0.2);
        color: var(--accent-color-6);
        border: 1px solid var(--accent-color-5);
    }

    .consumable {
        background-color: rgba(212, 163, 115, 0.2);
        color: var(--accent-color-1);
        border: 1px solid var(--accent-color-8);
    }

    .material {
        background-color: rgba(58, 59, 56, 0.2);
        color: var(--text-color);
        border: 1px solid var(--border-color);
    }
</style>