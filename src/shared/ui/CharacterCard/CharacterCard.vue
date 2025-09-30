<template>
  <div class="component-card">
    <div class="character-card">
      <div class="character-card__header">
        <h3 class="character-card__name">
          {{ character.name }}
        </h3>
        <span class="character-card__level">Уровень {{ character.level }}</span>
      </div>
      <div class="character-card__body">
        <div class="character-card__avatar">
          {{ character.avatar }}
        </div>
        <div class="character-card__stats">
          <div 
            v-for="(stat, index) in character.stats" 
            :key="index" 
            class="character-card__stat"
          >
            <strong class="character-card__stat-name">{{ stat.name }}</strong>
            <div class="character-card__stat-bar">
              <div 
                class="character-card__stat-fill" 
                :style="{ width: stat.value + '%' }"
              ></div>
            </div>
            <small class="character-card__stat-value">
              {{ stat.current }}/{{ stat.max }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CharacterStat {
  name: string;
  value: number;
  current: number;
  max: number;
}

interface Character {
  name: string;
  level: number;
  avatar: string;
  stats: CharacterStat[];
}

interface Props {
  character: Character;
}

const props = defineProps<Props>();

const character = props.character;
</script>

<style scoped>
.character-card {
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.character-card__header {
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.character-card__body {
  padding: 20px;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
}

.character-card__avatar {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 2px solid var(--accent-color-1);
  background: linear-gradient(145deg, var(--accent-color-8), var(--border-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.character-card__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.character-card__stat {
  margin-bottom: 15px;
}

.character-card__stat-name {
  display: block;
  margin-bottom: 5px;
  color: var(--accent-color-2);
}

.character-card__stat-bar {
  height: 10px;
  background-color: rgba(56, 47, 39, 0.5);
  border-radius: 5px;
  overflow: hidden;
  margin: 5px 0;
}

.character-card__stat-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color-8), var(--accent-color-1));
  border-radius: 5px;
  transition: width 0.5s ease;
}

.character-card__stat-value {
  color: var(--accent-color-3);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .character-card__body {
    grid-template-columns: 1fr;
  }
  
  .character-card__stats {
    grid-template-columns: 1fr;
  }
}
</style>