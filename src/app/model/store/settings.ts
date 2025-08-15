import { defineStore } from "pinia"
import { reactive } from "vue"



export const useSettingsStore = defineStore("settings", () => {
  const state = reactive({
    volume: 50,
    difficulty: "normal",
  })

  const setVolume = (newVolume: number) => {
    state.volume = newVolume
  }

  const setDifficulty = (level: string) => {
    state.difficulty = level
  }

  return {
    state, // Экспортируем все состояния
    setVolume,
    setDifficulty,
  }
})
