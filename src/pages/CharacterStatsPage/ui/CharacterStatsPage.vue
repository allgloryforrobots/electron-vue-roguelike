<script setup lang="ts">
	import { usePlayerStore } from '@/entities/Player';
	import { CharacterStats } from '@/widgets/CharacterStats';
	const playerStore = usePlayerStore();
</script>

<template>
	<CharacterStats v-if="playerStore.player.stats" :stats="playerStore.player.stats" />
</template>

<style scoped lang="scss">
</style>
