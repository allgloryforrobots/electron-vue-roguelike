<template>
  <div class="mine-sweeper">
    <h1 class="mine-sweeper__title">Разминирование ловушки</h1>
    <p class="mine-sweeper__description">Осторожно, искатель приключений! Обнаружена древняя ловушка. Прояви бдительность.</p>
    
    <div class="mine-sweeper__stats">
      <div class="mine-sweeper__stat">
        <span class="mine-sweeper__stat-value">{{ mines - flags }}</span>
        <span class="mine-sweeper__stat-label">Осталось мин</span>
      </div>
      <div class="mine-sweeper__stat">
        <span class="mine-sweeper__stat-value">{{ timer }}</span>
        <span class="mine-sweeper__stat-label">Секунд</span>
      </div>
    </div>
    
    <div class="mine-sweeper__controls">
      <button class="mine-sweeper__button" @click="resetGame">Новая игра</button>
      <button class="mine-sweeper__button" @click="toggleDifficulty">{{ difficultyText }}</button>
    </div>
    
    <div class="mine-sweeper__board" :style="{ gridTemplateColumns: `repeat(${width}, 1fr)` }">
      <div 
        v-for="(cell, index) in board" 
        :key="index"
        class="mine-sweeper__cell"
        :class="{
          'mine-sweeper__cell--revealed': cell.revealed, 
          'mine-sweeper__cell--flag': cell.flag,
          'mine-sweeper__cell--mine': cell.revealed && cell.mine,
          [`mine-sweeper__cell--number-${cell.value}`]: cell.revealed && cell.value > 0
        }"
        @click.left="revealCell(index)"
        @click.right.prevent="flagCell(index)"
      >
        <span v-if="cell.revealed && cell.mine">💣</span>
        <span v-else-if="cell.revealed && cell.value > 0">{{ cell.value }}</span>
        <span v-else-if="cell.flag">🚩</span>
      </div>
    </div>
    
    <div class="mine-sweeper__status" :class="statusClass">
      {{ statusMessage }}
    </div>
    
    <div class="mine-sweeper__instructions">
      <h3 class="mine-sweeper__instructions-title">Как играть:</h3>
      <ul class="mine-sweeper__instructions-list">
        <li class="mine-sweeper__instructions-item">Левый клик - открыть клетку</li>
        <li class="mine-sweeper__instructions-item">Правый клик - поставить/убрать флаг</li>
        <li class="mine-sweeper__instructions-item">Цифра на клетке показывает количество мин вокруг</li>
        <li class="mine-sweeper__instructions-item">Ваша задача - отметить все мины флагами</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Cell {
  mine: boolean
  revealed: boolean
  flag: boolean
  value: number
}

// Конфигурация игры
const width = ref(9)
const height = ref(9)
const mines = ref(10)
const board = ref<Cell[]>([])
const gameOver = ref(false)
const gameWon = ref(false)
const flags = ref(0)
const timer = ref(0)
const timerInterval = ref<number | null>(null)
const difficulty = ref<'easy' | 'medium' | 'hard'>('medium')

// Текстовые значения
const difficultyText = computed(() => {
  return difficulty.value === 'easy' ? 'Легко' : 
         difficulty.value === 'medium' ? 'Средне' : 'Сложно'
})

const statusMessage = computed(() => {
  if (gameOver.value) return 'Ловушка сработала! Вы проиграли.'
  if (gameWon.value) return 'Поздравляем! Вы обезвредили ловушку.'
  return 'Идет разминирование...'
})

const statusClass = computed(() => {
  if (gameOver.value) return 'mine-sweeper__status--lose'
  if (gameWon.value) return 'mine-sweeper__status--win'
  return 'mine-sweeper__status--playing'
})

// Инициализация игры
const initGame = () => {
  // Установка сложности
  if (difficulty.value === 'easy') {
    width.value = 9
    height.value = 9
    mines.value = 10
  } else if (difficulty.value === 'medium') {
    width.value = 16
    height.value = 16
    mines.value = 40
  } else {
    width.value = 16
    height.value = 30
    mines.value = 99
  }
  
  // Сброс состояния игры
  board.value = Array(width.value * height.value).fill(null).map(() => ({
    mine: false,
    revealed: false,
    flag: false,
    value: 0
  }))
  
  gameOver.value = false
  gameWon.value = false
  flags.value = 0
  timer.value = 0
  
  // Очистка предыдущего таймера
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

const placeMines = (firstClickIndex: number) => {
  let minesPlaced = 0;
  const indices: number[] = [];

  // ПРАВИЛЬНАЯ ЛОГИКА: создаем список всех индексов, КРОМЕ первого клика и соседних клеток
  for (let i = 0; i < width.value * height.value; i++) {
    // Если это НЕ первый клик И НЕ его сосед, то добавляем в кандидаты на мину
    if (i !== firstClickIndex && !isNeighbor(firstClickIndex, i)) {
      indices.push(i);
    }
  }

  // Перемешиваем индексы
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Расставляем мины
  while (minesPlaced < mines.value && minesPlaced < indices.length) {
    const index = indices[minesPlaced];
    board.value[index].mine = true;
    minesPlaced++;

    // Обновляем значения соседних клеток
    updateNeighborValues(index);
  }

  // Запускаем таймер
  if (!timerInterval.value) {
    timerInterval.value = setInterval(() => {
      if (!gameOver.value && !gameWon.value) {
        timer.value++;
      }
    }, 1000) as unknown as number;
  }
};

// Проверка, являются ли клетки соседями
const isNeighbor = (index1: number, index2: number): boolean => {
  const x1 = index1 % width.value
  const y1 = Math.floor(index1 / width.value)
  const x2 = index2 % width.value
  const y2 = Math.floor(index2 / width.value)
  
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1
}

// Обновление значений соседних клеток
const updateNeighborValues = (mineIndex: number) => {
  const x = mineIndex % width.value
  const y = Math.floor(mineIndex / width.value)
  
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const newX = x + dx
      const newY = y + dy
      
      if (newX >= 0 && newX < width.value && newY >= 0 && newY < height.value) {
        const index = newY * width.value + newX
        if (!board.value[index].mine) {
          board.value[index].value++
        }
      }
    }
  }
}

// Открытие клетки
const revealCell = (index: number) => {
  const cell = board.value[index]
  
  // Если игра завершена или клетка помечена флагом, ничего не делаем
  if (gameOver.value || gameWon.value || cell.flag || cell.revealed) {
    return
  }
  
  // Если это первый клик, размещаем мины
  if (timer.value === 0 && flags.value === 0) {
    placeMines(index)
  }
  
  // Если на клетке мина - игра окончена
  if (cell.mine) {
    cell.revealed = true
    gameOver.value = true
    revealAllMines()
    if (timerInterval.value) {
      clearInterval(timerInterval.value)
      timerInterval.value = null
    }
    return
  }
  
  // Открываем клетку
  cell.revealed = true
  
  // Если клетка пустая, открываем соседей рекурсивно
  if (cell.value === 0) {
    revealNeighbors(index)
  }
  
  // Проверяем, выиграна ли игра
  checkWin()
}

// Рекурсивное открытие соседних клеток
const revealNeighbors = (index: number) => {
  const x = index % width.value
  const y = Math.floor(index / width.value)
  
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const newX = x + dx
      const newY = y + dy
      
      if (newX >= 0 && newX < width.value && newY >= 0 && newY < height.value) {
        const newIndex = newY * width.value + newX
        const neighbor = board.value[newIndex]
        
        if (!neighbor.revealed && !neighbor.flag && !neighbor.mine) {
          neighbor.revealed = true
          
          if (neighbor.value === 0) {
            revealNeighbors(newIndex)
          }
        }
      }
    }
  }
}

// Установка/снятие флага
const flagCell = (index: number) => {
  const cell = board.value[index]
  
  if (gameOver.value || gameWon.value || cell.revealed) {
    return
  }
  
  cell.flag = !cell.flag
  flags.value += cell.flag ? 1 : -1
  
  // Проверяем, выиграна ли игра
  checkWin()
}

// Проверка условий победы
const checkWin = () => {
  // Все не-мины открыты И все мины помечены
  const allNonMinesRevealed = board.value.every(cell => 
    cell.mine || cell.revealed
  )
  
  const allMinesFlagged = board.value.filter(cell => 
    cell.mine
  ).every(cell => cell.flag)
  
  if (allNonMinesRevealed || allMinesFlagged) {
    gameWon.value = true
    if (timerInterval.value) {
      clearInterval(timerInterval.value)
      timerInterval.value = null
    }
  }
}

// Показать все мины при проигрыше
const revealAllMines = () => {
  board.value.forEach(cell => {
    if (cell.mine) {
      cell.revealed = true
    }
  })
}

// Перезапуск игры
const resetGame = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
  initGame()
}

// Смена сложности
const toggleDifficulty = () => {
  if (difficulty.value === 'easy') {
    difficulty.value = 'medium'
  } else if (difficulty.value === 'medium') {
    difficulty.value = 'hard'
  } else {
    difficulty.value = 'easy'
  }
  resetGame()
}

// Инициализация при загрузке
onMounted(() => {
  initGame()
})
</script>

<style scoped>
.mine-sweeper {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background-color-medium);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.mine-sweeper__title {
  text-align: center;
  color: var(--accent-color-gold);
  margin-bottom: 20px;
  font-size: 28px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
}

.mine-sweeper__description {
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--accent-color-2);
}

.mine-sweeper__stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: rgba(56, 47, 39, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.mine-sweeper__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mine-sweeper__stat-value {
  font-size: 24px;
  font-weight: bold;
  color: var(--accent-color-gold);
}

.mine-sweeper__stat-label {
  font-size: 12px;
  color: var(--accent-color-2);
}

.mine-sweeper__controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.mine-sweeper__button {
  background-color: var(--accent-color-8);
  color: var(--accent-color-2);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.mine-sweeper__button:hover {
  background-color: var(--accent-color-1);
  color: var(--background-color);
}

.mine-sweeper__board {
  display: grid;
  gap: 4px;
  margin-bottom: 20px;
}

.mine-sweeper__cell {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color-8);
  border: 2px solid var(--border-color);
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  user-select: none;
}

.mine-sweeper__cell:hover {
  background-color: var(--accent-color-1);
}

.mine-sweeper__cell--revealed {
  background-color: var(--accent-color-5);
}

.mine-sweeper__cell--flag {
  background-color: var(--accent-color-3);
}

.mine-sweeper__cell--mine {
  background-color: var(--accent-color-4);
}

.mine-sweeper__cell--number-1 { color: var(--accent-color-6); }
.mine-sweeper__cell--number-2 { color: var(--accent-color-2); }
.mine-sweeper__cell--number-3 { color: var(--accent-color-3); }
.mine-sweeper__cell--number-4 { color: var(--accent-color-4); }
.mine-sweeper__cell--number-5 { color: var(--accent-color-gold); }
.mine-sweeper__cell--number-6 { color: var(--accent-color-1); }
.mine-sweeper__cell--number-7 { color: var(--accent-color-7); }
.mine-sweeper__cell--number-8 { color: var(--accent-color-8); }

.mine-sweeper__status {
  text-align: center;
  padding: 10px;
  margin-top: 15px;
  border-radius: 4px;
  font-weight: bold;
}

.mine-sweeper__status--playing {
  background-color: rgba(73, 122, 120, 0.3);
  color: var(--accent-color-6);
}

.mine-sweeper__status--win {
  background-color: rgba(212, 163, 115, 0.3);
  color: var(--accent-color-gold);
}

.mine-sweeper__status--lose {
  background-color: rgba(168, 68, 44, 0.3);
  color: var(--accent-color-4);
}

.mine-sweeper__instructions {
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(56, 47, 39, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
}

.mine-sweeper__instructions-title {
  color: var(--accent-color-gold);
  margin-bottom: 10px;
}

.mine-sweeper__instructions-list {
  padding-left: 20px;
}

.mine-sweeper__instructions-item {
  margin-bottom: 5px;
}

@media (max-width: 500px) {
  .mine-sweeper__board {
    grid-template-columns: repeat(9, 11vw);
  }
  
  .mine-sweeper__stat-value {
    font-size: 18px;
  }
}
</style>