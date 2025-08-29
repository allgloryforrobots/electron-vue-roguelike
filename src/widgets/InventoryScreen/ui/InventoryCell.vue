<template>
    <div 
        class="inventory__grid-cell"
        :class="{
            'inventory__grid-cell--highlight': highlighted,
            'inventory__grid-cell--first-row': isFirstRow,
        }"
    >
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
    interface Props {
        highlighted?: boolean;
        isFirstRow?: boolean;
    }
    defineProps<Props>();
</script>

<style scoped lang="scss">
    .inventory__grid-cell {
        border: 1px solid var(--border-color);
        background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
        border-radius: 4px;
        transition: all 0.3s ease;
        display: grid;
        place-items: center;

        &--first-row {
            &::before {
                content: "☆";
                color: var(--text-color);
            }
        }
        
        &--highlight {
            border: 1px solid var(--accent-color-gold);
            box-shadow: 0 0 10px var(--accent-color-gold);
            background: linear-gradient(145deg, rgba(255, 215, 0, 0.3), rgba(25, 21, 20, 0.9));
        }
    }
</style>