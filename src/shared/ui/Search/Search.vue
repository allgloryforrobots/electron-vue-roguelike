<script setup lang="ts">

</script>

<template>
    <div class="search-box">
        <input type="text" class="search-input" placeholder="Поиск предметов...">
    </div>
</template>

<style scoped lang="scss">
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
</style>