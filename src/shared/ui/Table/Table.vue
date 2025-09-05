<script setup lang="ts">
</script>

<template>
  <table class="dd-table">
    <thead>
      <tr>
        <th>Название</th>
        <th>Тип</th>
        <th>Редкость</th>
        <th>Вес</th>
        <th>Цена</th>
        <th>Характеристики</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Драконий клинок</td>
        <td>Оружие</td>
        <td class="item-rarity-legendary">
          Легендарный
        </td>
        <td>4.2</td>
        <td>5,800 G</td>
        <td>Урон: 145 | Сила: 80</td>
      </tr>
      <tr>
        <td>Щит грифона</td>
        <td>Броня</td>
        <td class="item-rarity-epic">
          Эпический
        </td>
        <td>6.8</td>
        <td>3,200 G</td>
        <td>Защита: 87 | Сопр. огню: +20</td>
      </tr>
      <tr>
        <td>Эликсир здоровья</td>
        <td>Зелье</td>
        <td class="item-rarity-uncommon">
          Необычный
        </td>
        <td>0.5</td>
        <td>250 G</td>
        <td>Восст. здоровья: 500</td>
      </tr>
      <tr>
        <td>Кольцо маны</td>
        <td>Аксессуар</td>
        <td class="item-rarity-rare">
          Редкий
        </td>
        <td>0.3</td>
        <td>1,750 G</td>
        <td>Мана: +100 | Реген. маны: +2/с</td>
      </tr>
      <tr>
        <td>Кожа дракона</td>
        <td>Материал</td>
        <td class="item-rarity-epic">
          Эпический
        </td>
        <td>2.5</td>
        <td>1,200 G</td>
        <td>Прочность: 95 | Гибкость: 70</td>
      </tr>
      <tr>
        <td>Лук лесного эльфа</td>
        <td>Оружие</td>
        <td class="item-rarity-rare">
          Редкий
        </td>
        <td>2.1</td>
        <td>2,300 G</td>
        <td>Урон: 92 | Ловкость: 65</td>
      </tr>
      <tr>
        <td>Яд тролля</td>
        <td>Реагент</td>
        <td class="item-rarity-uncommon">
          Необычный
        </td>
        <td>0.8</td>
        <td>450 G</td>
        <td>Токсичность: 40 | Длит.: 30 сек</td>
      </tr>
      <tr>
        <td>Сапоги скорохода</td>
        <td>Броня</td>
        <td class="item-rarity-rare">
          Редкий
        </td>
        <td>1.8</td>
        <td>1,800 G</td>
        <td>Защита: 35 | Скорость: +15%</td>
      </tr>
      <tr>
        <td>Свиток телепортации</td>
        <td>Магия</td>
        <td class="item-rarity-common">
          Обычный
        </td>
        <td>0.2</td>
        <td>100 G</td>
        <td>Расстояние: 500м | Заряды: 1</td>
      </tr>
      <tr>
        <td>Амулет защиты</td>
        <td>Аксессуар</td>
        <td class="item-rarity-uncommon">
          Необычный
        </td>
        <td>0.4</td>
        <td>650 G</td>
        <td>Сопр. магии: +15 | Защ.: +10</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
    .dd-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
    }

    .dd-table th {
        background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
        color: var(--accent-color-2);
        padding: 10px 10px;
        text-align: left;
        font-variant: small-caps;
        font-weight: bold;
        border-bottom: 2px solid var(--accent-color-1);
        position: relative;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .dd-table td {
        padding: 12px 10px;
        border-bottom: 1px solid var(--border-color);
        transition: all 0.2s ease;
    }

    .dd-table tr:last-child td {
        border-bottom: none;
    }

    .dd-table tr:hover td {
        background-color: var(--hover-color);
        color: var(--accent-color-2);
    }

    .dd-table tr:nth-child(even) {
        background-color: rgba(56, 47, 39, 0.3);
    }

    .item-rarity-common {
        color: var(--text-color);
    }

    .item-rarity-uncommon {
        color: var(--accent-color-6);
    }

    .item-rarity-rare {
        color: var(--accent-color-1);
    }

    .item-rarity-epic {
        color: var(--accent-color-3);
    }

    .item-rarity-legendary {
        color: var(--accent-color-4);
        text-shadow: 0 0 5px rgba(168, 68, 44, 0.5);
    }
</style>
