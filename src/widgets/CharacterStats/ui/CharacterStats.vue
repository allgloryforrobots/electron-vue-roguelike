<template>
  <div class="character-stats">
    
    <div class="stats-grid">
      <!-- 1 ряд 1 колонка - Основные характеристики -->
      <DDCard class="stats-section main-stats">
        <h4>Основные характеристики</h4>
        <div class="stats-list">
          <div v-for="(stat, key) in props.stats.characteristics" :key="key" class="stat-item">
            <span class="stat-name">{{ stat.name }}: </span>
            <span class="stat-value">{{ stat.getValue() }}</span>
            <div class="stat-modifiers">
              <span class="modifier" v-if="stat.self_value > 0">Базовое: +{{ stat.self_value }}</span>
              <span class="modifier" v-if="stat.temp_modifiers !== 0">Временные: {{ stat.temp_modifiers }}</span>
              <span class="modifier" v-if="stat.equip_modifiers !== 0">Экипировка: {{ stat.equip_modifiers }}</span>
            </div>
          </div>
        </div>
      </DDCard>

      <!-- 1 ряд 2 колонка - Второстепенные характеристики -->
      <DDCard class="stats-section secondary-stats">
        <h4>Второстепенные характеристики</h4>
        <div class="stats-list">
          <div v-for="(stat, key) in props.stats.secondaryCharacteristics" :key="key" class="stat-item">
            <span class="stat-name">{{ stat.name }}: </span>
            <span class="stat-value">{{ stat.getValue() }}</span>
          </div>
        </div>
      </DDCard>

      <!-- 1 ряд 3-4 колонки - Сопротивления -->
      <DDCard class="stats-section resists">
        <h4>Сопротивления</h4>
        <div class="stats-list">
          <div v-for="(stat, key) in props.stats.resists" :key="key" class="stat-item">
            <span class="stat-name">{{ stat.name }}: </span>
            <span class="stat-value">{{ stat.getValue() }}</span>
          </div>
        </div>
      </DDCard>

	  <DDCard class="stats-section skills-filters">
			<!-- Компонент фильтра для групп навыков -->
			<Filter 
			:active-filter="activeSkillFilter" 
			:filters="skillFilters"
			@filter-change="handleSkillFilterChange" 
			/>
	  </DDCard>

      <!-- 2 ряд - Навыки по всей ширине -->
      <DDCard class="stats-section skills">
        <h4>Навыки</h4>
        <div class="skills-grid">
          <div 
            v-for="(group, groupKey) in filteredSkillGroups" 
            :key="groupKey" 
            class="skill-group"
          >
			<div v-for="(stat, skillKey) in group.skills" :key="skillKey" class="stat-item">
			<span class="stat-name">{{ (stat as Skill).name }}: </span>
			<span class="stat-value">{{ (stat as Skill).getValue() }}</span>
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
  
  interface Props {
    stats: GenerateStatsReturnType; 
  }
  
  const props = defineProps<Props>();
  const activeSkillFilter = ref('closeCombat');

  // Фильтры для групп навыков на основе структуры skillsByGroups
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

  // Получаем все группы навыков
  const skillGroups = computed(() => {
    return Object.entries(props.stats.skillsByGroups).map(([key, group]) => ({
      id: key,
      name: group.name,
      skills: group.skills
    }));
  });

  // Фильтруем группы навыков в зависимости от выбранного фильтра
  const filteredSkillGroups = computed(() => {
    return skillGroups.value.filter(group => group.id === activeSkillFilter.value);
  });

  const handleSkillFilterChange = (filter: string) => {
    activeSkillFilter.value = filter;
  };
</script>

<style scoped>

	.character-stats {
		margin: 10px;
	}
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  /* 1 ряд 1 колонка - Основные характеристики */
  .main-stats {
    grid-column: 1;
    grid-row: 1;
  }

  /* 1 ряд 2 колонка - Второстепенные характеристики */
  .secondary-stats {
    grid-column: 2;
    grid-row: 1;
  }

  /* 1 ряд 3-4 колонки - Сопротивления (занимает обе колонки) */
  .resists {
    grid-column: 3; /* Занимает от 1 до 3 колонки (две колонки) */
    grid-row: 1;
  }

  /* 2 ряд - Навыки по всей ширине */
  .skills {
    grid-column: 2;
    grid-row: 2;
  }

  .skills-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .skills-filters {
	grid-column: 1;
    grid-row: 2;
  }

</style>