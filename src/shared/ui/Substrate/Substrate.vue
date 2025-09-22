<template>
  <div 
    class="substrate"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    interface Props {
        width?: string | number;
        height?: string | number;
    }

    const props = withDefaults(defineProps<Props>(), {
        width: '500px',
        height: '500px',
    });

    const style = computed(() => {
        const styles: Record<string, string> = {};
        
        if (props.width) {
            styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
        }

        return styles;
    });
</script>

<style scoped lang="scss">
.substrate {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 20px;
    background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--accent-color-2);
}
</style>