<template>
    <div class="body">
 <div class="library-container">
        <div class="header">
            <h1>Библиотека компонентов</h1>
            <p>Стилизованные UI-компоненты в духе Dragon's Dogma 2</p>
        </div>

        <div class="components-grid">

            <!-- Вкладки -->
            <div class="component-section">
                
            </div>

            <!-- Индикатор выполнения -->
            <div class="component-section">
                <h3 class="component-title">Индикатор выполнения (Progress)</h3>
                <div class="component-demo">
                    <div class="dd-progress">
                        <div class="dd-progress-bar" style="width: 65%"></div>
                    </div>
                </div>
                <div class="component-code">
                    &lt;div class="dd-progress"&gt;<br>
                    &nbsp;&nbsp;&lt;div class="dd-progress-bar" style="width: 65%"&gt;&lt;/div&gt;<br>
                    &lt;/div&gt;
                </div>
            </div>

            <!-- Подсказка -->
            <div class="component-section">
                <h3 class="component-title">Подсказка (Tooltip)</h3>
                <div class="component-demo">
                    <div class="dd-tooltip">
                        Наведите на меня
                        <div class="dd-tooltip-text">Это текст подсказки</div>
                    </div>
                </div>
                <div class="component-code">
                    &lt;div class="dd-tooltip"&gt;<br>
                    &nbsp;&nbsp;Наведите на меня<br>
                    &nbsp;&nbsp;&lt;div class="dd-tooltip-text"&gt;Текст подсказки&lt;/div&gt;<br>
                    &lt;/div&gt;
                </div>
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
            padding: 20px;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(73, 122, 120, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, rgba(161, 68, 44, 0.1) 0%, transparent 20%);
        }
    .library-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid var(--border-color);
        background-color: var(--background-color-medium);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        position: relative;
        overflow: hidden;
    }

    .library-container::before {
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

    .components-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 30px;
    }

    .component-section {
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border: 1px solid var(--border-color);
        padding: 20px;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
    }

    .component-section::before {
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
        text-align: center;
    }

    .component-demo {
        padding: 15px;
        background-color: rgba(25, 21, 20, 0.5);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        margin-bottom: 15px;
    }

    .component-code {
        background-color: rgba(25, 21, 20, 0.8);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 15px;
        font-family: monospace;
        font-size: 0.85rem;
        overflow-x: auto;
        color: var(--accent-color-6);
    }

    .footer {
        text-align: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid var(--border-color);
        color: var(--accent-color-6);
        font-size: 0.9rem;
    }

    /* Стили компонентов */
    .dd-button {
        background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
        color: var(--accent-color-2);
        border: 1px solid var(--accent-color-1);
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: inherit;
        position: relative;
        overflow: hidden;
        border-radius: 2px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .dd-button:hover {
        background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
        color: var(--accent-color-7);
        box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
    }

        .dd-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .dd-input {
            background-color: rgba(25, 21, 20, 0.8);
            color: var(--accent-color-2);
            border: 1px solid var(--border-color);
            padding: 10px 15px;
            font-family: inherit;
            border-radius: 2px;
            width: 100%;
            transition: all 0.3s ease;
        }

        .dd-input:focus {
            outline: none;
            border-color: var(--accent-color-1);
            box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
        }

        .dd-card {
            background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
            border: 1px solid var(--border-color);
            padding: 20px;
            border-radius: 4px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .dd-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent-color-1), transparent);
        }

        .dd-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-color-8);
        }

        .dd-select {
            background-color: rgba(25, 21, 20, 0.8);
            color: var(--accent-color-2);
            border: 1px solid var(--border-color);
            padding: 10px 15px;
            font-family: inherit;
            border-radius: 2px;
            width: 100%;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D4A373'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 16px;
        }

        .dd-select:focus {
            outline: none;
            border-color: var(--accent-color-1);
            box-shadow: 0 0 5px rgba(212, 163, 115, 0.3);
        }

        .dd-checkbox {
            appearance: none;
            width: 18px;
            height: 18px;
            border: 1px solid var(--border-color);
            background-color: rgba(25, 21, 20, 0.8);
            border-radius: 2px;
            position: relative;
            cursor: pointer;
            margin-right: 8px;
        }

        .dd-checkbox:checked {
            background-color: var(--accent-color-8);
            border-color: var(--accent-color-1);
        }

        .dd-checkbox:checked::after {
            content: "✓";
            position: absolute;
            color: var(--accent-color-2);
            font-size: 14px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .dd-radio {
            appearance: none;
            width: 18px;
            height: 18px;
            border: 1px solid var(--border-color);
            background-color: rgba(25, 21, 20, 0.8);
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            margin-right: 8px;
        }

        .dd-radio:checked {
            border-color: var(--accent-color-1);
        }

        .dd-radio:checked::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: var(--accent-color-1);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .dd-tabs {
            display: flex;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 20px;
        }

        .dd-tab {
            padding: 10px 20px;
            cursor: pointer;
            border: 1px solid transparent;
            border-bottom: none;
            margin-right: 5px;
            background-color: transparent;
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        .dd-tab.active {
            background-color: var(--background-color-medium);
            border-color: var(--border-color);
            border-radius: 4px 4px 0 0;
            color: var(--accent-color-2);
            position: relative;
        }

        .dd-tab.active::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            background-color: var(--background-color-medium);
        }

        .dd-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .dd-modal-content {
            background: var(--background-color-medium);
            border: 2px solid var(--border-color);
            padding: 30px;
            border-radius: 4px;
            max-width: 500px;
            width: 100%;
            position: relative;
        }

        .dd-modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .dd-tooltip {
            position: relative;
            display: inline-block;
        }

        .dd-tooltip-text {
            visibility: hidden;
            background-color: var(--background-color-medium);
            color: var(--accent-color-2);
            text-align: center;
            border: 1px solid var(--border-color);
            padding: 10px;
            border-radius: 4px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s;
            width: 200px;
        }

        .dd-tooltip:hover .dd-tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        .dd-progress {
            width: 100%;
            height: 20px;
            background-color: rgba(25, 21, 20, 0.8);
            border: 1px solid var(--border-color);
            border-radius: 2px;
            overflow: hidden;
        }

        .dd-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color-8), var(--accent-color-1));
            transition: width 0.3s ease;
        }

        .component-row {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            align-items: center;
        }
</style>

<script setup lang="ts">
    import DDTabs  from "@/shared/ui/DDTabs/DDTabs.vue";
    import { ref } from "vue";



</script>
