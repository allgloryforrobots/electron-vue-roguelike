<template>
  <div class="character-stats">
    	<h1>Характеристики персонажа</h1>
    
		<div class="stats-grid">
		<div class="stats-section">
			<h2>Основные характеристики</h2>
			<div class="stats-list">
			<div v-for="(stat, key) in props.stats.characteristics" :key="key" class="stat-item">
				<span class="stat-name">{{ stat.name }}:</span>
				<span class="stat-value">{{ stat.getValue() }}</span>
				<div class="stat-modifiers">
				<span class="modifier" v-if="stat.self_value > 0">Базовое: +{{ stat.self_value }}</span>
				<span class="modifier" v-if="stat.temp_modifiers !== 0">Временные: {{ stat.temp_modifiers }}</span>
				<span class="modifier" v-if="stat.equip_modifiers !== 0">Экипировка: {{ stat.equip_modifiers }}</span>
				</div>
			</div>
			</div>
		</div>

		<div class="stats-section">
			<h2>Второстепенные характеристики</h2>
			<div class="stats-list">
			<div v-for="(stat, key) in props.stats.secondaryCharacteristics" :key="key" class="stat-item">
				<span class="stat-name">{{ stat.name }}:</span>
				<span class="stat-value">{{ stat.getValue() }}</span>
			</div>
			</div>
		</div>

		<div class="stats-section">
			<h2>Сопротивления</h2>
			<div class="stats-list">
			<div v-for="(stat, key) in props.stats.resists" :key="key" class="stat-item">
				<span class="stat-name">{{ stat.name }}:</span>
				<span class="stat-value">{{ stat.getValue() }}</span>
			</div>
			</div>
		</div>

		<div class="stats-section skills-section">
			<h2>Навыки</h2>
			<template v-for="(group, groupKey) in props.stats.skillsByGroups" :key="groupKey">
				<h3 class="group-name">{{ group.name }}</h3>
				<div class="skill-group">
					<div v-for="(stat, skillKey) in group.skills" :key="skillKey" class="stat-item">
						<span class="stat-name">{{ (stat as Skill).name }}:</span>
						<span class="stat-value">{{ (stat as Skill).getValue() }}</span>
					</div>
				</div>
			</template>
		</div>
    </div>
  </div>
</template>

<script setup lang="ts">
	import { GenerateStatsReturnType, Skill } from '@/entities/Battler';
    interface Props {
    	stats: GenerateStatsReturnType; 
    }
    const props = defineProps<Props>();

</script>

<style scoped>
</style>