import { createPinia } from "pinia"
import { useGameStore } from "./game"

const pinia = createPinia()

// Регистрация хранилищ для глобального использования
export const gameStore = useGameStore(pinia)

export default pinia
