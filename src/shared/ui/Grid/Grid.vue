<script setup lang="ts">
	document.querySelectorAll('.filter-btn').forEach(button => {
		button.addEventListener('click', function() {
			document.querySelectorAll('.filter-btn').forEach(btn => {
				btn.classList.remove('active');
			});
			this.classList.add('active');
			
			// Здесь можно добавить функциональность фильтрации
			// Для демонстрации просто показываем все элементы
			document.querySelectorAll('.item-card').forEach(card => {
				card.style.display = 'flex';
			});
		});
	});
</script>

<template>
	<div class="container">
        <div class="header">
            <h1>Инвентарь</h1>
            <p>Собрание предметов из вашего путешествия</p>
        </div>

        <div class="filters">
            <button class="filter-btn active">Все предметы</button>
            <button class="filter-btn">Оружие</button>
            <button class="filter-btn">Броня</button>
            <button class="filter-btn">Расходники</button>
            <button class="filter-btn">Материалы</button>
        </div>

        <div class="items-grid">
            <!-- Item 1 -->
            <div class="item-card">
                <div class="item-icon">⚔️</div>
                <h3 class="item-name">Дragon's Vein</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Урон:</span>
                        <span class="stat-value">145</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">3.2</span>
                    </div>
                    <div class="stat">
                        <span>Требует:</span>
                        <span class="stat-value">Сила 65</span>
                    </div>
                </div>
                <p class="item-description">Меч, выкованный из чешуи дракона, излучает тусклое тепло.</p>
                <span class="item-type weapon">Оружие</span>
            </div>

            <!-- Item 2 -->
            <div class="item-card">
                <div class="item-icon">🛡️</div>
                <h3 class="item-name">Грифонный щит</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Защита:</span>
                        <span class="stat-value">87</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">5.5</span>
                    </div>
                    <div class="stat">
                        <span>Сопротивление:</span>
                        <span class="stat-value">Огонь +20</span>
                    </div>
                </div>
                <p class="item-description">Щит, украшенный перьями грифона, легок и прочен.</p>
                <span class="item-type armor">Броня</span>
            </div>

            <!-- Item 3 -->
            <div class="item-card">
                <div class="item-icon">🧪</div>
                <h3 class="item-name">Эликсир здоровья</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Восстановление:</span>
                        <span class="stat-value">500 HP</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">0.5</span>
                    </div>
                    <div class="stat">
                        <span>Количество:</span>
                        <span class="stat-value">3</span>
                    </div>
                </div>
                <p class="item-description">Восстанавливает здоровье при употреблении.</p>
                <span class="item-type consumable">Расходник</span>
            </div>

            <!-- Item 4 -->
            <div class="item-card">
                <div class="item-icon">💎</div>
                <h3 class="item-name">Драконий камень</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Редкость:</span>
                        <span class="stat-value">Редкий</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">1.2</span>
                    </div>
                    <div class="stat">
                        <span>Цена:</span>
                        <span class="stat-value">1250 G</span>
                    </div>
                </div>
                <p class="item-description">Камень, который светится изнутри магической энергией.</p>
                <span class="item-type material">Материал</span>
            </div>

            <!-- Item 5 -->
            <div class="item-card">
                <div class="item-icon">🏹</div>
                <h3 class="item-name">Лук Стихий</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Урон:</span>
                        <span class="stat-value">92</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">2.8</span>
                    </div>
                    <div class="stat">
                        <span>Элемент:</span>
                        <span class="stat-value">Лёд/Огонь</span>
                    </div>
                </div>
                <p class="item-description">Лук, способный выпускать стрелы стихийной энергии.</p>
                <span class="item-type weapon">Оружие</span>
            </div>

            <!-- Item 6 -->
            <div class="item-card">
                <div class="item-icon">🧥</div>
                <h3 class="item-name">Плащ Странника</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Защита:</span>
                        <span class="stat-value">35</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">1.5</span>
                    </div>
                    <div class="stat">
                        <span>Свойство:</span>
                        <span class="stat-value">Невидимость +10%</span>
                    </div>
                </div>
                <p class="item-description">Плащ, который помогает оставаться незамеченным.</p>
                <span class="item-type armor">Броня</span>
            </div>

            <!-- Item 7 -->
            <div class="item-card">
                <div class="item-icon">🍖</div>
                <h3 class="item-name">Жаркое из мяса саурьяна</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Восстановление:</span>
                        <span class="stat-value">250 HP / 100 ST</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">1.0</span>
                    </div>
                    <div class="stat">
                        <span>Эффект:</span>
                        <span class="stat-value">Сила +5%</span>
                    </div>
                </div>
                <p class="item-description">Вкусное блюдо, временно увеличивающее силу.</p>
                <span class="item-type consumable">Расходник</span>
            </div>

            <!-- Item 8 -->
            <div class="item-card">
                <div class="item-icon">🪶</div>
                <h3 class="item-name">Перо гарпии</h3>
                <div class="item-stats">
                    <div class="stat">
                        <span>Редкость:</span>
                        <span class="stat-value">Обычный</span>
                    </div>
                    <div class="stat">
                        <span>Вес:</span>
                        <span class="stat-value">0.1</span>
                    </div>
                    <div class="stat">
                        <span>Цена:</span>
                        <span class="stat-value">80 G</span>
                    </div>
                </div>
                <p class="item-description">Перо, используемое в крафте для создания легкой брони.</p>
                <span class="item-type material">Материал</span>
            </div>
        </div>

        <div class="footer">
            <p>Dragon's Dogma 2 © Capcom. Все права защищены.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
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

	.filters {
		display: flex;
		justify-content: center;
		gap: 15px;
		margin-bottom: 25px;
		flex-wrap: wrap;
	}

	.filter-btn {
		background-color: transparent;
		color: var(--text-color);
		border: 1px solid var(--border-color);
		padding: 8px 15px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
		position: relative;
		overflow: hidden;
	}

	.filter-btn:hover, .filter-btn.active {
		background-color: var(--hover-color);
		color: var(--accent-color-2);
	}

	.filter-btn::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 1px;
		background-color: var(--accent-color-1);
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}

	.filter-btn:hover::after, .filter-btn.active::after {
		width: 70%;
	}

	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 20px;
	}

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

	.footer {
		text-align: center;
		margin-top: 40px;
		padding-top: 20px;
		border-top: 1px solid var(--border-color);
		color: var(--accent-color-6);
		font-size: 0.9rem;
	}

</style>
