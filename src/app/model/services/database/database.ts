import { JSONFilePreset  } from 'lowdb/node'

type GameData = {
  player: {
    score: number
    level: number
    inventory: string[]
  }
}

// Указываем путь к JSON-файлу
const defaultData = { player: { score: 0, level: 1, inventory: [] } } as GameData
const db = await JSONFilePreset('db.json', defaultData)

// Функция для загрузки данных
export const loadGameData = async (): Promise<GameData> => {
  await db.read()
  db.data ||= { player: { score: 0, level: 1, inventory: [] } }
  return db.data
}

// Функция для сохранения данных
export const saveGameData = async (data: GameData): Promise<void> => {
  db.data = data
  await db.write()
}
