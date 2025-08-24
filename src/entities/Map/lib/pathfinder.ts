import { MapType, PathfindingCell, PathfindingResult, TerrainsTypesEnum } from "../types/GridTypes";

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

    // Создаем grid для pathfinding
    const grid: PathfindingCell[][] = [];
    for (let y = 0; y < height; y++) {
      grid[y] = [];
      for (let x = 0; x < width; x++) {
        grid[y][x] = {
          x,
          y,
          type: map[y][x].type,
          f: 0,
          g: 0,
          h: 0,
          parent: null,
          closed: false,
          opened: false,
        };
      }
    }

    // Функция эвристики (манхэттенское расстояние)
    const heuristic = (cell: PathfindingCell): number => {
      return Math.abs(cell.x - endX) + Math.abs(cell.y - endY);
    };

    // Получение стоимости перемещения через клетку
    const getMoveCost = (cell: PathfindingCell): number => {
      switch (cell.type) {
        case TerrainsTypesEnum.EMPTY:
          return 1;
        case TerrainsTypesEnum.SINGLE_TREE:
          return 10; // Высокая стоимость для деревьев
        case TerrainsTypesEnum.CLUSTER_TREE:
          return 20; // Очень высокая стоимость для кластеров
        default:
          return 1;
      }
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
          neighbors.push(grid[ny][nx]);
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
        if (moveCost >= 10) continue; // Пропускаем непроходимые клетки

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
	static visualizePath(map: MapType, path: { x: number; y: number }[]) {

		const visualizeMap = JSON.parse(JSON.stringify(map));
    
    visualizeMap.flat().forEach((element: { isPath: boolean; }) => {
      element.isPath = false;
    });

		for (const point of path) {
			visualizeMap[point.y][point.x].isPath = true;
		}
		
		return visualizeMap;
	}
}
