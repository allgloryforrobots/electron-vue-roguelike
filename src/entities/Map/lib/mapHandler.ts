import { IMapHandlerOptions, TerrainsTypesEnum } from "../types/GridTypes";
import type { MapType, PathfindingResult } from "../types/GridTypes";
import { Pathfinder } from "./pathfinder";

export class MapHandler {
    width: number;
    height: number;
    treeDensity: number;
    clusterDensity: number;
    map: MapType;

    constructor(options: IMapHandlerOptions) {
      // Параметры карты
      this.width = options.width || 50;
      this.height = options.height || 30;
      this.map = [];

      // Параметры генерации
      this.treeDensity = options.treeDensity || 0.05; // 5% карты - одиночные деревья
      this.clusterDensity = options.clusterDensity || 0.008; // 0.8% карты - кластеры
    }

    // Инициализация пустой карты
    initEmptyMap() {
      this.map = Array.from({ length: this.height }, () => 
        Array.from({ length: this.width }, () => ({ type: TerrainsTypesEnum.EMPTY }))
      );
    }

    // Основной метод генерации карты
    generateMap() {
      this.initEmptyMap();
      this.generateSingleTrees();
      this.generateTreeClusters();
      this.addPaths();
      return this.map;
    }

    // Генерация одиночных деревьев
    generateSingleTrees() {
      const treeCount = Math.floor(this.width * this.height * this.treeDensity);
      
      for (let i = 0; i < treeCount; i++) {
        const x = this.getRandomInt(0, this.width - 1);
        const y = this.getRandomInt(0, this.height - 1);
        
        if (this.isCellEmpty(x, y)) {
          this.map[y][x] = { type: TerrainsTypesEnum.SINGLE_TREE };
          
          // 30% chance добавить соседние деревья
          if (Math.random() < 0.3) {
            this.addAdjacentTrees(x, y, this.getRandomInt(1, 2));
          }
        }
      }
    }

    // Генерация кластеров деревьев
    generateTreeClusters() {
      const clusterCount = Math.floor(this.width * this.height * this.clusterDensity);
      
      for (let i = 0; i < clusterCount; i++) {
        const centerX = this.getRandomInt(5, this.width - 6);
        const centerY = this.getRandomInt(5, this.height - 6);
        const clusterSize = this.getRandomInt(3, 7);
        
        // Ядро кластера
        for (let j = 0; j < clusterSize; j++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 0.5 + Math.random() * 2.5;
          const x = Math.round(centerX + Math.cos(angle) * distance);
          const y = Math.round(centerY + Math.sin(angle) * distance);
          
          if (this.isInBounds(x, y) && this.isCellEmpty(x, y)) {
            this.map[y][x] = { type: TerrainsTypesEnum.CLUSTER_TREE };
          }
        }
        
        // Ореол вокруг кластера
        this.addClusterHalo(centerX, centerY);
      }
    }

    // Добавление ореола вокруг кластера
    addClusterHalo(x: number, y: number) {
      const haloSize = this.getRandomInt(2, 4);
      
      for (let dy = -haloSize; dy <= haloSize; dy++) {
        for (let dx = -haloSize; dx <= haloSize; dx++) {
          if ((dx !== 0 || dy !== 0) && Math.random() < 0.4) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (this.isInBounds(nx, ny) && this.isCellEmpty(nx, ny)) {
              this.map[ny][nx] = { type: TerrainsTypesEnum.CLUSTER_TREE };
            }
          }
        }
      }
    }

    // Добавление соседних деревьев
    addAdjacentTrees(x: number, y: number, count: number) {
      const directions = [
        [-1, -1], [0, -1], [1, -1],
        [-1, 0],           [1, 0],
        [-1, 1],  [0, 1],  [1, 1]
      ];
      
      for (let i = 0; i < count; i++) {
        const [dx, dy] = directions[this.getRandomInt(0, directions.length - 1)];
        const nx = x + dx;
        const ny = y + dy;
        
        if (this.isInBounds(nx, ny) && this.isCellEmpty(nx, ny)) {
          this.map[ny][nx] = { type: TerrainsTypesEnum.SINGLE_TREE };
        }
      }
    }

    // Добавление тропинок
    addPaths() {
      const pathCount = this.getRandomInt(2, 5);
      
      for (let i = 0; i < pathCount; i++) {
        const startX = this.getRandomInt(5, this.width - 6);
        const startY = this.getRandomInt(5, this.height - 6);
        const endX = this.getRandomInt(5, this.width - 6);
        const endY = this.getRandomInt(5, this.height - 6);
        
        this.createPath(startX, startY, endX, endY);
      }
    }

    // Создание тропинки
    createPath(startX: number, startY: number, endX: number, endY: number) {
      let x = startX;
      let y = startY;
      
      while (Math.abs(x - endX) > 2 || Math.abs(y - endY) > 2) {
        // Очищаем клетку и вокруг
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (this.isInBounds(x + dx, y + dy)) {
              this.map[y + dy][x + dx] = { type: TerrainsTypesEnum.EMPTY };
            }
          }
        }
        
        // Двигаемся к цели
        if (Math.random() < 0.6) {
          x += x < endX ? 1 : -1;
        }
        if (Math.random() < 0.6) {
          y += y < endY ? 1 : -1;
        }
      }
    }

    // Вспомогательные методы
    isCellEmpty(x: number, y: number) {
      return this.map[y][x].type === TerrainsTypesEnum.EMPTY;
    }

    isInBounds(x: number, y: number) {
      return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


	// Метод для поиска пути
	findPath(startX: number, startY: number, endX: number, endY: number): PathfindingResult {
		return Pathfinder.findPath(this.map, startX, startY, endX, endY);
	}

	// Визуализация пути на карте (тесты)
	visualizePath(path: { x: number; y: number }[]) {

		const visualizeMap = structuredClone(this.map);
		
		for (const point of path) {
			if (this.isInBounds(point.x, point.y)) {
				visualizeMap[point.y][point.x].isPath = true;
			}
		}
		
		return visualizeMap;
	}
}

//   watchEffect(() => {
// 	// Ищем путь
// 	const result = generator.findPath(playerStore.playerX, playerStore.playerY, 45, 25);

// 	if (result.success) {
// 		console.log(`Путь найден! Длина: ${result.steps} шагов`);
// 		console.log('Координаты пути:', result.path);
		
// 		// Визуализируем путь
// 		const mapWithPath = generator.visualizePath(result.path);
// 		map.value = mapWithPath;
// 	} else {
// 		console.log('Путь не найден');
// 	}
//   });