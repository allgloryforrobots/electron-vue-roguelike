import { Battler } from "@/shared/model/Battler/Battler";
import { MoveCosts, GroundCell, ICellOptions } from "@/shared/model/Cell/Cell";
import { Obstacle } from "@/shared/model/Obstacle/Obstacle";
import { MapType } from "./MapGenerator";

export type PathfindingGridType = boolean[][];

interface IPathfindingCellOptions extends ICellOptions {
  x: number;
  y: number;
  moveCost: MoveCosts;
  battler: Battler | null;
  obstacle: Obstacle | null;
}

export class PathfindingCell extends GroundCell {
  f: number = 0; // f = g + h
  g: number = 0; // стоимость пути от старта
  h: number = 0; // эвристическая оценка до цели
  parent: PathfindingCell | null = null;
  closed: boolean = false;
  opened: boolean = false;

  constructor(options: IPathfindingCellOptions) {
    super(options)
    this.moveCost = options.moveCost;
    this.battler =  options.battler;
    this.obstacle =  options.obstacle;
  }
}

export interface PathfindingResult {
  path: { x: number; y: number }[];
  success: boolean;
  steps: number;
}

export class Pathfinder {
  static findPath(
    map: MapType,
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): PathfindingResult {
    const width = map[0].length;
    const height = map.length;

    const grid: PathfindingCell[][] = [];
    for (let y = 0; y < height; y++) {
      grid[y] = [];
      
      for (let x = 0; x < width; x++) {
        const mapCell = map[y][x];
        grid[y][x] = new PathfindingCell({
          x,
          y,
          moveCost: mapCell.moveCost,
          battler:  mapCell.battler,
          obstacle:  mapCell.obstacle,
        });
      }
    }

    // Функция эвристики (манхэттенское расстояние)
    const heuristic = (cell: PathfindingCell): number => {
      return Math.abs(cell.x - endX) + Math.abs(cell.y - endY);
    };

    // Получение стоимости перемещения через клетку
    const getMoveCost = (_: PathfindingCell): number => {
      return 1;
    };

    // Получение соседних клеток
    const getNeighbors = (cell: PathfindingCell): PathfindingCell[] => {
      const neighbors: PathfindingCell[] = [];
      const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1], // горизонтальные и вертикальные
        // [-1, -1], [-1, 1], [1, -1], [1, 1] // диагональные
      ];

      for (const [dx, dy] of directions) {
        const nx = cell.x + dx;
        const ny = cell.y + dy;

        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const neighbor = grid[ny][nx];
          if (neighbor.isPassable()) {
            neighbors.push(neighbor);
          }
        }
      }

      return neighbors;
    };

    // Открытый список (приоритетная очередь)
    const openList: PathfindingCell[] = [];
    
    // Начальная клетка
    const startCell = grid[startY][startX];
    startCell.g = 0;
    startCell.h = heuristic(startCell);
    startCell.f = startCell.g + startCell.h;
    startCell.opened = true;
    openList.push(startCell);

    while (openList.length > 0) {
      // Находим клетку с наименьшей f
      openList.sort((a, b) => a.f - b.f);
      const current = openList.shift()!;
      current.closed = true;

      // Если достигли цели
      if (current.x === endX && current.y === endY) {
        const path: { x: number; y: number }[] = [];
        let temp = current;
        let steps = 0;
        
        while (temp.parent) {
          path.push({ x: temp.x, y: temp.y });
          temp = temp.parent;
          steps++;
        }
        
        path.reverse();
        return { path, success: true, steps };
      }

      // Проверяем соседей
      const neighbors = getNeighbors(current);
      
      for (const neighbor of neighbors) {
        if (neighbor.closed) continue;

        // Стоимость перемещения
        const moveCost = getMoveCost(neighbor);

        // Диагональное перемещение дороже
        const isDiagonal = 
          Math.abs(neighbor.x - current.x) === 1 && 
          Math.abs(neighbor.y - current.y) === 1;
        const cost = isDiagonal ? moveCost * 1.414 : moveCost;

        const gScore = current.g + cost;

        if (!neighbor.opened || gScore < neighbor.g) {
          neighbor.g = gScore;
          neighbor.h = heuristic(neighbor);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.parent = current;

          if (!neighbor.opened) {
            neighbor.opened = true;
            openList.push(neighbor);
          }
        }
      }
    }

    // Путь не найден
    return { path: [], success: false, steps: 0 };
  }

  // Визуализация пути на карте (тесты)
  static visualizePath(map: MapType, path: { x: number; y: number }[]): PathfindingGridType {
    // Создаём двумерный массив булевых значений, изначально все false
    const result: boolean[][] = map.map(row => row.map(() => false));

    // Отмечаем точки пути как true
    for (const { x, y } of path) {
      // Проверка границ для безопасности
      if (y >= 0 && y < result.length && x >= 0 && x < result[y].length) {
        result[y][x] = true;
      }
    }

    return result;
  }

  // Функция проверки проходимости клетки
  static isPassable = (x: number, y: number, map: MapType): boolean => {
    if (!map) return false;
    const cell = map?.[y]?.[x];
    if (!cell) return false;
    return cell.isPassable();
  };
}

// тест в app
// watchEffect(() => {
// 	// Ищем путь
// 	const result = Pathfinder.findPath(map.value, playerStore.player.position.x, playerStore.player.position.y, 45, 25);

// 	if (result.success) {
// 		// Визуализируем путь
// 		const mapWithPath = Pathfinder.visualizePath(map.value, result.path);
// 		map.value = mapWithPath;
// 	} else {
// 		console.log('Путь не найден');
// 	}
// });
