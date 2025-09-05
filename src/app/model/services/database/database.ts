import { JSONFilePreset  } from 'lowdb/node'

type GameData = {
  timestamp: Date,
}

// Указываем путь к JSON-файлу
const defaultData = { timestamp: new Date(), } as GameData
const db = await JSONFilePreset('db.json', defaultData)

// Функция для загрузки данных
export const loadGameData = async (): Promise<GameData> => {
  await db.read()
  return db.data
}

// Функция для сохранения данных
export const saveGameData = async (data: GameData): Promise<void> => {
  db.data = data
  await db.write()
}
