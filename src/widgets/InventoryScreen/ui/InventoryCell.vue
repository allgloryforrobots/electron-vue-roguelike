<template>
    <div 
        class="inventory__grid-cell"
        :class="{
            'inventory__grid-cell--highlight': highlighted,
        }"
    >
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
    interface Props {
        highlighted?: boolean;
    }
    const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.inventory__grid-cell {
    border: 1px solid var(--border-color);
    background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &--highlight {
        background: linear-gradient(135deg, var(--accent-color-5) 0%, var(--accent-color-6) 100%);
        border-color: var(--accent-color-1);
        box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
    }
}
</style>