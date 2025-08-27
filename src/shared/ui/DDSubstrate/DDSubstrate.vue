<template>
    <div 
        class="dd-substrate"
        :style="style"
        :class="{ 'dd-substrate--square': square }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    interface Props {
        width?: string | number;
        height?: string | number;
        square?: boolean;
    }

    const props = withDefaults(defineProps<Props>(), {
        width: undefined,
        height: undefined,
        square: false,
    });

    const style = computed(() => {
        const styles: Record<string, string> = {};
        
        if (props.width) {
            styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
            
            // Если включен square и высота не задана явно, делаем высоту равной ширине
            if (props.square && !props.height) {
                styles.height = typeof props.width === 'number' ? `${props.width}px` : props.width;
            }
        }
        
        if (props.height && !(props.square && props.width)) {
            styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
        }
        
        return styles;
    });
</script>

<style scoped lang="scss">
.dd-substrate {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 20px;
    background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--accent-color-2);
    
    // Сохраняем скругления, square теперь только про соотношение сторон
}
</style>