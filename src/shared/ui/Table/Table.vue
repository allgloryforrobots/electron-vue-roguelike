<template>
  <table class="table">
    <thead class="table__header">
      <tr class="table__row">
        <th 
          v-for="(column, index) in columns" 
          :key="index" 
          class="table__cell table__cell--header"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr 
        v-for="(row, rowIndex) in data" 
        :key="rowIndex" 
        class="table__row"
      >
        <td 
          v-for="(cell, cellIndex) in row" 
          :key="cellIndex" 
          class="table__cell"
          :class="getCellClass(cell)"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Props {
  columns: string[];
  data: string[][];
}

defineProps<Props>();

const getCellClass = (value: string) => {
  if (typeof value === 'string') {
    if (value.includes('Легендарный')) return 'table__cell--legendary';
    if (value.includes('Эпический')) return 'table__cell--epic';
    if (value.includes('Редкий')) return 'table__cell--rare';
    if (value.includes('Необычный')) return 'table__cell--uncommon';
    if (value.includes('Обычный')) return 'table__cell--common';
  }
  return '';
};
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  &__header {
    .table__row {
      background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
    }
  }

  &__row {
    &:nth-child(even) {
      background-color: rgba(56, 47, 39, 0.3);
    }

    &:hover {
      .table__cell {
        background-color: var(--hover-color);
        color: var(--accent-color-2);
      }
    }
  }

  &__cell {
    padding: 12px 10px;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.2s ease;
    text-align: left;


    &--header {
      color: var(--accent-color-2);
      font-variant: small-caps;
      font-weight: bold;
      border-bottom: 2px solid var(--accent-color-1);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    &--common {
      color: var(--text-color);
    }

    &--uncommon {
      color: var(--accent-color-6);
    }

    &--rare {
      color: var(--accent-color-1);
    }

    &--epic {
      color: var(--accent-color-3);
    }

    &--legendary {
      color: var(--accent-color-4);
      text-shadow: 0 0 5px rgba(168, 68, 44, 0.5);
    }
  }
}
</style>