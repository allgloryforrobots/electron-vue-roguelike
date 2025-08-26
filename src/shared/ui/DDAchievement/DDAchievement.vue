<template>
    <div class="dd-achievement">
        <div class="dd-achievement-icon">{{ icon }}</div>
        <div class="dd-achievement-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <small v-if="date">Получено: {{ date }}</small>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string;
        description: string;
        icon?: string;
        date?: string;
    }>();
</script>

<style scoped lang="scss">
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
</style>