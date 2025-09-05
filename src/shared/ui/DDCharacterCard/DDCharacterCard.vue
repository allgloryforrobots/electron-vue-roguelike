<template>
  <div class="component-card">
    <h2 class="component-title">
      <i class="fas fa-user"></i> Карточка персонажа
    </h2>
    <div class="dd-character-card">
      <div class="dd-character-header">
        <h3>{{ character.name }}</h3>
        <span>Уровень {{ character.level }}</span>
      </div>
      <div class="dd-character-body">
        <div class="dd-character-avatar">
          {{ character.avatar }}
        </div>
        <div class="dd-character-stats">
          <div v-for="(stat, index) in character.stats" :key="index">
            <strong>{{ stat.name }}</strong>
            <div class="dd-stat-bar">
              <div class="dd-stat-fill" :style="{ width: stat.value + '%' }"></div>
            </div>
            <small>{{ stat.current }}/{{ stat.max }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDCharacterCard',
  data() {
    return {
      character: {
        name: 'Элион Изгнанник',
        level: 45,
        avatar: '⚔️',
        stats: [
          { name: 'Здоровье', value: 85, current: 425, max: 500 },
          { name: 'Мана', value: 60, current: 120, max: 200 },
          { name: 'Сила', value: 90, current: 90, max: 100 },
          { name: 'Ловкость', value: 75, current: 75, max: 100 }
        ]
      }
    }
  }
}
</script>

<style scoped>
.dd-character-card {
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.7), rgba(25, 21, 20, 0.9));
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.dd-character-header {
  background: linear-gradient(to right, var(--accent-color-8), var(--border-color));
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dd-character-body {
  padding: 20px;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
}

.dd-character-avatar {
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

.dd-character-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.dd-stat-bar {
  height: 10px;
  background-color: rgba(56, 47, 39, 0.5);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
}

.dd-stat-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color-8), var(--accent-color-1));
  border-radius: 5px;
  transition: width 0.5s ease;
}

@media (max-width: 768px) {
  .dd-character-body {
    grid-template-columns: 1fr;
  }
}
</style>