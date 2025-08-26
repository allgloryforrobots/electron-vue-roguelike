<script setup lang="ts">


</script>

<template>
  <div class="body">
    <div class="container">
        <div class="header">
            <h1>Инвентарь Архона</h1>
            <p>Собрание предметов и ресурсов для вашего путешествия</p>
        </div>

        <div class="table-controls">
            <div class="search-box">
                <span class="search-icon">🔍</span>
                <input type="text" class="search-input" placeholder="Поиск предметов...">
            </div>
            
            <div class="pagination">
                <button class="page-btn">«</button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn">»</button>
            </div>
        </div>

        <div class="table-container">
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
                        <td class="item-rarity-legendary">Легендарный</td>
                        <td>4.2</td>
                        <td>5,800 G</td>
                        <td>Урон: 145 | Сила: 80</td>
                    </tr>
                    <tr>
                        <td>Щит грифона</td>
                        <td>Броня</td>
                        <td class="item-rarity-epic">Эпический</td>
                        <td>6.8</td>
                        <td>3,200 G</td>
                        <td>Защита: 87 | Сопр. огню: +20</td>
                    </tr>
                    <tr>
                        <td>Эликсир здоровья</td>
                        <td>Зелье</td>
                        <td class="item-rarity-uncommon">Необычный</td>
                        <td>0.5</td>
                        <td>250 G</td>
                        <td>Восст. здоровья: 500</td>
                    </tr>
                    <tr>
                        <td>Кольцо маны</td>
                        <td>Аксессуар</td>
                        <td class="item-rarity-rare">Редкий</td>
                        <td>0.3</td>
                        <td>1,750 G</td>
                        <td>Мана: +100 | Реген. маны: +2/с</td>
                    </tr>
                    <tr>
                        <td>Кожа дракона</td>
                        <td>Материал</td>
                        <td class="item-rarity-epic">Эпический</td>
                        <td>2.5</td>
                        <td>1,200 G</td>
                        <td>Прочность: 95 | Гибкость: 70</td>
                    </tr>
                    <tr>
                        <td>Лук лесного эльфа</td>
                        <td>Оружие</td>
                        <td class="item-rarity-rare">Редкий</td>
                        <td>2.1</td>
                        <td>2,300 G</td>
                        <td>Урон: 92 | Ловкость: 65</td>
                    </tr>
                    <tr>
                        <td>Яд тролля</td>
                        <td>Реагент</td>
                        <td class="item-rarity-uncommon">Необычный</td>
                        <td>0.8</td>
                        <td>450 G</td>
                        <td>Токсичность: 40 | Длит.: 30 сек</td>
                    </tr>
                    <tr>
                        <td>Сапоги скорохода</td>
                        <td>Броня</td>
                        <td class="item-rarity-rare">Редкий</td>
                        <td>1.8</td>
                        <td>1,800 G</td>
                        <td>Защита: 35 | Скорость: +15%</td>
                    </tr>
                    <tr>
                        <td>Свиток телепортации</td>
                        <td>Магия</td>
                        <td class="item-rarity-common">Обычный</td>
                        <td>0.2</td>
                        <td>100 G</td>
                        <td>Расстояние: 500м | Заряды: 1</td>
                    </tr>
                    <tr>
                        <td>Амулет защиты</td>
                        <td>Аксессуар</td>
                        <td class="item-rarity-uncommon">Необычный</td>
                        <td>0.4</td>
                        <td>650 G</td>
                        <td>Сопр. магии: +15 | Защ.: +10</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="table-info">
            Показано 10 из 47 предметов
        </div>

        <div class="footer">
            <p>Dragon's Dogma 2 © Capcom. Все права защищены.</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
        .body {
            background-color: var(--background-color);
            color: var(--text-color);
            font-family: 'Times New Roman', serif;
            padding: 20px;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(73, 122, 120, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, rgba(161, 68, 44, 0.1) 0%, transparent 20%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid var(--border-color);
            background-color: var(--background-color-medium);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
        }

        .container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border-color);
            position: relative;
        }

        .header h1 {
            font-size: 2.5rem;
            color: var(--accent-color-2);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            letter-spacing: 2px;
            font-variant: small-caps;
        }

        .header p {
            font-style: italic;
            margin-top: 10px;
            color: var(--accent-color-6);
        }

        .table-container {
            overflow-x: auto;
            margin: 20px 0;
            border: 1px solid var(--border-color);
            background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
            position: relative;
        }

        .table-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
        }

        .dd-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }

        .dd-table th {
            background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
            color: var(--accent-color-2);
            padding: 15px 10px;
            text-align: left;
            font-variant: small-caps;
            font-weight: bold;
            border-bottom: 2px solid var(--accent-color-1);
            position: relative;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .dd-table th::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent-color-2), transparent);
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

        .table-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            flex-wrap: wrap;
            gap: 15px;
        }

        .search-box {
            position: relative;
            flex-grow: 1;
            max-width: 300px;
        }

        .search-input {
            background-color: rgba(25, 21, 20, 0.8);
            color: var(--accent-color-2);
            border: 1px solid var(--border-color);
            padding: 10px 15px 10px 40px;
            font-family: inherit;
            border-radius: 2px;
            width: 100%;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--accent-color-1);
            box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
        }

        .search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--accent-color-6);
        }

        .pagination {
            display: flex;
            gap: 5px;
        }

        .page-btn {
            background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
            color: var(--accent-color-2);
            border: 1px solid var(--accent-color-1);
            padding: 8px 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            border-radius: 2px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            min-width: 40px;
        }

        .page-btn:hover {
            background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
            color: var(--accent-color-7);
        }

        .page-btn.active {
            background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
            color: var(--accent-color-7);
            box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
        }

        .table-info {
            color: var(--accent-color-6);
            font-style: italic;
            margin-top: 10px;
            text-align: center;
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

        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            color: var(--accent-color-6);
            font-size: 0.9rem;
        }
</style>
