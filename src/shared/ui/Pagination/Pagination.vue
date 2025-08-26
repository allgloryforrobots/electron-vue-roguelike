<script setup lang="ts">
</script>

<template>
	<div class="pagination">
		<button class="page-btn">«</button>
		<button class="page-btn active">1</button>
		<button class="page-btn">2</button>
		<button class="page-btn">3</button>
		<button class="page-btn">»</button>
	</div>
</template>

<style scoped lang="scss">
	.pagination {
		display: flex;
		gap: 5px;
	}

	.page-btn {
		background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
		color: var(--accent-color-2);
		border: 1px solid var(--accent-color-1);
		padding: 8px 12px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
		border-radius: 2px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
		min-width: 40px;
	}

	.page-btn:hover {
		background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
		color: var(--accent-color-7);
	}

	.page-btn.active {
		background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
		color: var(--accent-color-7);
		box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
	}
</style>