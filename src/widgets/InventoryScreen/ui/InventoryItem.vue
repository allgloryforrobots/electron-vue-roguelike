<template>
    <div 
        class="inventory__item"
        :class="[
            `inventory__item--size-${item.width}x${item.height}`,
            { 
				'inventory__item--dragging': dragging, 
				'inventory__item--preview': preview, 
			}
        ]"
        >
        <div class="inventory__item-content">
            <span class="inventory__item-marker">{{ item.marker }}</span>
            <i class="fa-solid" :class="item.icon"></i>
            <div class="inventory__item-size-badge">{{ item.width }}x{{ item.height }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
	import { Item } from '@/entities/Item';
    interface Props {
        item: Item
        dragging?: boolean;
		preview?: boolean;
    }
    const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.inventory{
	&__item {
		position: absolute;
		border: 2px solid var(--accent-color-8);
		background: linear-gradient(135deg, var(--background-color-medium) 0%, #2a231e 100%);
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: move;
		z-index: 10;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		
		&--dragging {
			opacity: 0.4;
			transform: scale(0.95);
			border: 2px dashed var(--accent-color-1);
		}
		
		&--preview {
			background: linear-gradient(135deg, rgba(140, 109, 73, 0.3) 0%, rgba(212, 163, 115, 0.2) 100%);
			border: 2px dashed var(--accent-color-1);
			z-index: 20;
		}
		
		// Размеры предметов
		// Базовые настройки
		$base-size: 50px;
		$grid-gap: 2px;

		// Генерация размеров через цикл
		$sizes: 1, 2, 3, 4;

		@each $width in $sizes {
			@each $height in $sizes {
				&--size-#{$width}x#{$height} {
					width: calc(#{$base-size * $width} + #{$grid-gap * ($width - 1)});
					height: calc(#{$base-size * $height} + #{$grid-gap * ($height - 1)});
				}
			}
		}
	}
	
	&__item-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 4px;
	}
	
	&__item-marker {
		font-size: 12px;
		margin-bottom: 4px;
		color: var(--accent-color-2);
		font-weight: 600;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}
	
	&__item-size-badge {
		position: absolute;
		bottom: 4px;
		right: 4px;
		font-size: 10px;
		background: linear-gradient(135deg, var(--accent-color-8) 0%, var(--accent-color-1) 100%);
		color: var(--accent-color-7);
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: bold;
		border: 1px solid var(--accent-color-2);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	}
}	
</style>