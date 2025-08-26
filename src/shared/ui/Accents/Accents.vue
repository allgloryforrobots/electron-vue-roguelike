<script setup lang="ts">
  	
</script>


<template>
  <div class="body">
    <div class="container">
        <div class="header">
            <h1>Акцентные элементы</h1>
            <p>Специальные компоненты для выделения важной информации</p>
        </div>

        <div class="components-grid">
            <!-- Важное уведомление -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-exclamation-circle"></i> Важное уведомление</h2>
                <div class="dd-notice">
                    <h3>Обновление системы</h3>
                    <p>Серверы будут отключены для планового технического обслуживания завтра с 03:00 до 06:00 по времени Архона.</p>
                </div>
            </div>

            <!-- Предупреждение -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-exclamation-triangle"></i> Предупреждение</h2>
                <div class="dd-warning">
                    <h3>Опасная зона</h3>
                    <p>Эта область населена древними драконами. Не рекомендуется для искателей приключений ниже 50 уровня.</p>
                </div>
            </div>

            <!-- Блок квеста -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-scroll"></i> Блок квеста</h2>
                <div class="dd-quest">
                    <h3>Потерянная реликвия</h3>
                    <p>Найдите древний артефакт в руинах Элдории. Награда: 1500 золотых и уникальный меч.</p>
                    <p><strong>Сложность:</strong> Средняя</p>
                </div>
            </div>

            <!-- Выделенная цитата -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-quote-right"></i> Цитата</h2>
                <div class="dd-quote">
                    <p>Сила не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда падаешь. Именно так мы становимся сильнее.</p>
                    <cite>— Советник Элдрин</cite>
                </div>
            </div>

            <!-- Блок достижения -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-trophy"></i> Достижение</h2>
                <div class="dd-achievement">
                    <div class="dd-achievement-icon">🏆</div>
                    <div class="dd-achievement-content">
                        <h3>Покоритель драконов</h3>
                        <p>Победите древнего дракона в одиночку</p>
                        <small>Получено: 12.03.2023</small>
                    </div>
                </div>
            </div>

            <!-- Индикатор загрузки -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-spinner"></i> Индикатор загрузки</h2>
                <div class="dd-loading">
                    <div class="dd-loading-spinner"></div>
                    <span>Загрузка данных...</span>
                </div>
            </div>

            <!-- Бейджи -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-certificate"></i> Бейджи</h2>
                <p>Новый контент <span class="dd-badge dd-badge-new">NEW</span> уже доступен!</p>
                <p>Последнее обновление <span class="dd-badge dd-badge-update">v2.1.4</span></p>
                <p>Этот квест <span class="dd-badge dd-badge-popular">POPULAR</span> среди игроков</p>
            </div>

            <!-- Блок с подсветкой -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-star"></i> Подсветка</h2>
                <div class="dd-highlight">
                    <h3>Особое предложение</h3>
                    <p>Только этой ночью - удвоенный опыт и добыча золота во всех подземельях!</p>
                    <p>Не упустите возможность быстрее прокачать своего персонажа.</p>
                </div>
            </div>

            <!-- Разделитель -->
            <div class="component-card">
                <h2 class="component-title"><i class="fas fa-minus"></i> Разделитель</h2>
                <p>Текст перед разделителем</p>
                <div class="dd-divider">Или</div>
                <p>Текст после разделителя</p>
            </div>
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
            // font-family: 'Times New Roman', serif;
            line-height: 1.6;
            padding: 20px;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(73, 122, 120, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, rgba(161, 68, 44, 0.1) 0%, transparent 20%);
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
        }

        .header h1 {
            font-size: 2.8rem;
            color: var(--accent-color-2);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            letter-spacing: 2px;
            font-variant: small-caps;
            margin-bottom: 10px;
        }

        .header p {
            font-style: italic;
            color: var(--accent-color-6);
            font-size: 1.2rem;
        }

        .components-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }

        .component-card {
            background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
            border: 1px solid var(--border-color);
            padding: 25px;
            border-radius: 4px;
            position: relative;
            overflow: hidden;
        }

        .component-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
        }

        .component-title {
            font-size: 1.4rem;
            color: var(--accent-color-2);
            margin-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
            font-variant: small-caps;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* СТИЛИ АКЦЕНТНЫХ ЭЛЕМЕНТОВ */
        
        /* Важное уведомление */
        .dd-notice {
            background: linear-gradient(to right, rgba(212, 163, 115, 0.15), transparent);
            border-left: 4px solid var(--accent-color-1);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
            position: relative;
        }

        .dd-notice::before {
            content: "!";
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background: var(--accent-color-1);
            color: var(--background-color-medium);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* Предупреждение */
        .dd-warning {
            background: linear-gradient(to right, rgba(209, 96, 61, 0.15), transparent);
            border-left: 4px solid var(--accent-color-3);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
            position: relative;
        }

        .dd-warning::before {
            content: "⚠";
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background: var(--accent-color-3);
            color: var(--background-color-medium);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        /* Блок квеста */
        .dd-quest {
            background: linear-gradient(to right, rgba(73, 122, 120, 0.15), transparent);
            border-left: 4px solid var(--accent-color-5);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
            position: relative;
        }

        .dd-quest::before {
            content: "⚔";
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background: var(--accent-color-5);
            color: var(--background-color-medium);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        /* Выделенная цитата */
        .dd-quote {
            background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
            border: 1px solid var(--border-color);
            padding: 25px;
            margin: 25px 0;
            border-radius: 4px;
            position: relative;
            font-style: italic;
            border-top: 2px solid var(--accent-color-1);
        }

        .dd-quote::before, .dd-quote::after {
            content: "'";
            position: absolute;
            font-size: 4rem;
            color: var(--accent-color-1);
            opacity: 0.3;
            font-family: serif;
        }

        .dd-quote::before {
            top: 10px;
            left: 10px;
        }

        .dd-quote::after {
            bottom: -20px;
            right: 10px;
            transform: rotate(180deg);
        }

        /* Блок достижения */
        .dd-achievement {
            background: linear-gradient(145deg, rgba(140, 109, 73, 0.2), rgba(25, 21, 20, 0.9));
            border: 1px solid var(--accent-color-8);
            padding: 20px;
            margin: 20px 0;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .dd-achievement-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            flex-shrink: 0;
        }

        .dd-achievement-content h3 {
            color: var(--accent-color-2);
            margin-bottom: 5px;
        }

        /* Индикатор загрузки */
        .dd-loading {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--accent-color-2);
        }

        .dd-loading-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid transparent;
            border-top: 2px solid var(--accent-color-1);
            border-radius: 50%;
            animation: dd-spin 1s linear infinite;
        }

        @keyframes dd-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Баджи */
        .dd-badge {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: bold;
            margin: 0 5px;
        }

        .dd-badge-new {
            background: linear-gradient(145deg, var(--accent-color-3), var(--accent-color-4));
            color: var(--accent-color-2);
        }

        .dd-badge-update {
            background: linear-gradient(145deg, var(--accent-color-5), var(--accent-color-6));
            color: var(--accent-color-2);
        }

        .dd-badge-popular {
            background: linear-gradient(145deg, var(--accent-color-1), var(--accent-color-8));
            color: var(--background-color-medium);
        }

        /* Блок с подсветкой */
        .dd-highlight {
            background: linear-gradient(145deg, rgba(212, 163, 115, 0.1), transparent);
            border: 1px solid var(--accent-color-8);
            padding: 25px;
            margin: 25px 0;
            border-radius: 4px;
            position: relative;
        }

        .dd-highlight::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
        }

        /* Разделитель */
        .dd-divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 30px 0;
            color: var(--accent-color-6);
        }

        .dd-divider::before,
        .dd-divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid var(--border-color);
        }

        .dd-divider::before {
            margin-right: 15px;
        }

        .dd-divider::after {
            margin-left: 15px;
        }

        .footer {
            text-align: center;
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            color: var(--accent-color-6);
            font-size: 0.9rem;
        }
</style>
