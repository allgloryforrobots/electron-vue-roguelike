import { Battler } from "@/shared/model/Battler";
import { MapType } from "@/entities/Map/types/GridTypes";

export const moveBattler = (
  map: MapType,
  battler : Battler,
  newCoords: number[], 
  oldCoords?: number[] | undefined
) => {
  const [newX, newY] = newCoords;
  
  // Проверяем, что новые координаты валидны
  if (!isValidCoordinate(map, newX, newY)) {
    return;
  }
  
  // Очищаем старое положение
  if (oldCoords) {
    const [oldX, oldY] = oldCoords;
    if (isValidCoordinate(map, oldX, oldY)) {
      map[oldY][oldX].battler = null;
    }
  }
  
  // Устанавливаем новое положение
  map[newY][newX].battler = battler;
};

// Вспомогательная функция для проверки координат
const isValidCoordinate = (map: MapType, x: number, y: number): boolean => {
  return (
    y >= 0 && 
    y < map.length && 
    x >= 0 && 
    x < map[y]?.length
  );
};