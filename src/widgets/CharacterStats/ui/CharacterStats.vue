<template>
	<div class="character-stats">
		<div class="character-stats__grid">
			<!-- Основные характеристики -->
			<DDCard class="character-stats__section character-stats__section--main">
				<h4 class="character-stats__title">Основные характеристики</h4>
				<div class="character-stats__list">
					<div 
						v-for="(stat, key) in props.stats.characteristics" 
						:key="key" 
						class="character-stats__item"
					>
						<DDTooltip :tooltip="getStatTooltipByName(stat.codename)">
							<DDIcon :icon="stat.icon"/>
							<span class="character-stats__name">{{ stat.name }}: </span>
							<span class="character-stats__value">{{ stat.getValue() }}</span>
						</DDTooltip>
					</div>
				</div>
			</DDCard>

			<!-- Второстепенные характеристики -->
			<DDCard class="character-stats__section character-stats__section--secondary">
				<h4 class="character-stats__title">Второстепенные характеристики</h4>
				<div class="character-stats__list">
					<div 
						v-for="(stat, key) in props.stats.secondaryCharacteristics" 
						:key="key" 
						class="character-stats__item"
					>
						<DDIcon :icon="stat.icon"/>
						<span class="character-stats__name">{{ stat.name }}: </span>
						<span class="character-stats__value">{{ stat.getValue() }}</span>
					</div>
				</div>
			</DDCard>

			<!-- Сопротивления -->
			<DDCard class="character-stats__section character-stats__section--resists">
				<h4 class="character-stats__title">Сопротивления</h4>
				<div class="character-stats__list">
					
						<div 
							v-for="(stat, key) in props.stats.resists" 
							:key="key" 
							class="character-stats__item"
						>	
							<DDTooltip text="Тултип">
								<DDIcon :icon="stat.icon"/>
								<span class="character-stats__name">{{ stat.name }}: </span>
								<span class="character-stats__value">{{ stat.getValue() }}</span>
							</DDTooltip>
						</div>
				</div>
			</DDCard>

			<!-- Фильтры навыков -->
			<DDCard class="character-stats__section character-stats__section--filters">
				<Filter 
				:active-filter="activeSkillFilter" 
				:filters="skillFilters"
				@filter-change="handleSkillFilterChange" 
				/>
			</DDCard>

			<!-- Навыки -->
			<DDCard class="character-stats__section character-stats__section--skills">
				<h4 class="character-stats__title">Навыки</h4>
				<div class="character-stats__skills-grid">
				<div 
					v-for="(group, groupKey) in filteredSkillGroups" 
					:key="groupKey" 
					class="character-stats__skill-group"
				>
					<div 
						v-for="(stat, skillKey) in group.skills" 
						:key="skillKey" 
						class="character-stats__item"
					>
						<DDIcon :icon="(stat as Skill).icon"/>
						<span class="character-stats__name">{{ (stat as Skill).name }}: </span>
						<span class="character-stats__value">{{ (stat as Skill).getValue() }}</span>
					</div>
				</div>
				</div>
			</DDCard>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { GenerateStatsReturnType, Skill } from '@/entities/Battler';
	import DDCard from '@/shared/ui/DDCard/DDCard.vue';
	import Filter from '@/shared/ui/Filters/Filters.vue';
	import DDIcon from '@/shared/ui/DDIcon/DDIcon.vue';
	import DDTooltip from '@/shared/ui/DDTooltip/DDTooltip.vue';
	import { getStatTooltipByName } from '@/shared/config/tooltips/tooltips';
	
	interface Props {
		stats: GenerateStatsReturnType; 
	}
	
	const props = defineProps<Props>();
	const activeSkillFilter = ref('closeCombat');

	const skillFilters = [
		{ id: 'special', label: 'Специальные' },
		{ id: 'closeCombat', label: 'Ближний бой' },
		{ id: 'rangeCombat', label: 'Дальний бой' },
		{ id: 'finesse', label: 'Искусность' },
		{ id: 'defence', label: 'Защита' },
		{ id: 'physical', label: 'Физические' },
		{ id: 'social', label: 'Социальные' },
		{ id: 'intellectual', label: 'Интеллектуальные' },
		{ id: 'thieving', label: 'Воровские' },
		{ id: 'crafting', label: 'Ремесленные' },
		{ id: 'specialized', label: 'Специализированные' },
		{ id: 'magical', label: 'Магические' },
		{ id: 'technical', label: 'Технические' }
	];

	const skillGroups = computed(() => {
		return Object.entries(props.stats.skillsByGroups).map(([key, group]) => ({
		id: key,
		name: group.name,
		skills: group.skills
		}));
	});

	const filteredSkillGroups = computed(() => {
		return skillGroups.value.filter(group => group.id === activeSkillFilter.value);
	});

	const handleSkillFilterChange = (filter: string) => {
		activeSkillFilter.value = filter;
	};
</script>

<style scoped lang="scss">
	.character-stats {
		margin: 10px;

		&__item {
			display: flex;
			gap: 10px;
			align-items: baseline;
		}

		&__grid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			grid-template-rows: auto;
			gap: 16px;
		}

		&__section {
			padding: 16px;

			&--main {
				grid-column: 1;
				grid-row: 1;
			}

			&--secondary {
				grid-column: 2;
				grid-row: 1;
			}

			&--resists {
				grid-column: 3;
				grid-row: 1;
			}

			&--skills {
				grid-column: 2;
				grid-row: 2;
			}

			&--filters {
				grid-column: 1;
				grid-row: 2;
			}
		}
	}
</style>