import { createPinia } from "pinia"
import { useGameStore } from "./game"
import { useSettingsStore } from "./settings"

const pinia = createPinia()

// Регистрация хранилищ для глобального использования
export const gameStore = useGameStore(pinia)
export const settingsStore = useSettingsStore(pinia)

export default pinia
