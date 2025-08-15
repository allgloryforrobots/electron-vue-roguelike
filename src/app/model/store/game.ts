import { defineStore } from "pinia"
import { reactive } from "vue"

export const useGameStore = defineStore("game", () => {
  const player = reactive({
    score: 0,
    level: 1,
    inventory: [] as string[],
  })

  const updateScore = (amount: number) => {
    player.score += amount;
  }

  const nextLevel = () => {
    player.level++
  }

  const addItem = (item: string) => {
    player.inventory.push(item)
  }

  const resetGame = () => {
    player.score = 0
    player.level = 1
    player.inventory = []
  }


  return { player, updateScore, nextLevel, addItem, resetGame }
})
