import type { MapType } from "@/entities/Map";
import { TerrainsTypesEnum } from "@/entities/Map";
import { Battler } from "@/shared/model/Battler/Battler";

export interface IEnemyGeneratorOptions {
  singleEnemyDensity?: number;
  squadDensity?: number;
  minSquadSize?: number;
  maxSquadSize?: number;
  minDistanceFromEdges?: number;
  minDistanceBetweenGroups?: number;
}

export class EnemyGenerator {
  private options: Required<IEnemyGeneratorOptions>;

  constructor(options: IEnemyGeneratorOptions = {}) {
    this.options = {
      singleEnemyDensity: options.singleEnemyDensity || 0.015,
      squadDensity: options.squadDensity || 0.003,
      minSquadSize: options.minSquadSize || 2,
      maxSquadSize: options.maxSquadSize || 7,
      minDistanceFromEdges: options.minDistanceFromEdges || 3,
      minDistanceBetweenGroups: options.minDistanceBetweenGroups || 5
    };
  }

  generateEnemies(map: MapType, width: number, height: number): MapType {
    this.generateSquads(map, width, height);
    this.generateSingleEnemies(map, width, height);
    return map;
  }

  private generateSquads(map: MapType, width: number, height: number): void {
    const squadCount = Math.floor(width * height * this.options.squadDensity);
    const suitableLocations = this.findSquadLocations(map, width, height, squadCount);

    for (const location of suitableLocations) {
      this.createSquad(map, location.x, location.y, width, height);
    }
  }

  private generateSingleEnemies(map: MapType, width: number, height: number): void {
    const singleEnemyCount = Math.floor(width * height * this.options.singleEnemyDensity);
    const suitableCells = this.findSuitableCells(map, width, height, singleEnemyCount, true);

    for (const cell of suitableCells) {
      map[cell.y][cell.x].battler = this.createSingleEnemy();
    }
  }

  private findSquadLocations(map: MapType, width: number, height: number, maxCount: number): { x: number; y: number }[] {
    const locations: { x: number; y: number }[] = [];
    const attempts = width * height; // Ограничим количество попыток
    
    for (let attempt = 0; attempt < attempts && locations.length < maxCount; attempt++) {
      const x = this.getRandomInt(this.options.minDistanceFromEdges, width - this.options.minDistanceFromEdges - 1);
      const y = this.getRandomInt(this.options.minDistanceFromEdges, height - this.options.minDistanceFromEdges - 1);
      
      if (this.isSuitableForSquadCenter(map, x, y, width, height)) {
        locations.push({ x, y });
      }
    }

    return locations;
  }

  private findSuitableCells(
    map: MapType, 
    width: number, 
    height: number, 
    maxCount: number, 
    checkForEnemies: boolean
  ): { x: number; y: number }[] {
    const cells: { x: number; y: number }[] = [];
    const attempts = width * height;
    
    for (let attempt = 0; attempt < attempts && cells.length < maxCount; attempt++) {
      const x = this.getRandomInt(this.options.minDistanceFromEdges, width - this.options.minDistanceFromEdges - 1);
      const y = this.getRandomInt(this.options.minDistanceFromEdges, height - this.options.minDistanceFromEdges - 1);
      
      if (this.isCellEmpty(map, x, y) && 
          (!checkForEnemies || !this.hasNearbyEnemies(map, x, y, width, height))) {
        cells.push({ x, y });
      }
    }

    return cells;
  }

  private createSquad(map: MapType, centerX: number, centerY: number, width: number, height: number): void {
    const squadSize = this.getRandomInt(this.options.minSquadSize, this.options.maxSquadSize);
    const squadMembers: Battler[] = [];

    for (let i = 0; i < squadSize; i++) {
      squadMembers.push(this.createSquadMember());
    }

    this.placeSquadMembers(map, centerX, centerY, squadMembers, width, height);
  }

  private placeSquadMembers(
    map: MapType, 
    centerX: number, 
    centerY: number, 
    members: Battler[], 
    width: number, 
    height: number
  ): void {
    let placedCount = 0;
    const maxRadius = 2;
    
    // Размещаем в случайном порядке вокруг центра
    for (let radius = 0; radius <= maxRadius && placedCount < members.length; radius++) {
      const positions: { x: number; y: number }[] = [];
      
      // Собираем все позиции на данном радиусе
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
            positions.push({ x: centerX + dx, y: centerY + dy });
          }
        }
      }
      
      // Перемешиваем позиции для случайного размещения
      this.shuffleArray(positions);
      
      // Размещаем врагов на доступных позициях
      for (const position of positions) {
        if (placedCount >= members.length) break;
        
        if (this.isInBounds(position.x, position.y, width, height) && 
            this.isCellEmpty(map, position.x, position.y)) {
          map[position.y][position.x].battler = members[placedCount];
          placedCount++;
        }
      }
    }
  }

  private isSuitableForSquadCenter(map: MapType, x: number, y: number, width: number, height: number): boolean {
    if (!this.isCellEmpty(map, x, y) || this.hasNearbyEnemies(map, x, y, width, height)) {
      return false;
    }

    // Проверяем достаточно ли места для минимального отряда
    let emptySpaces = 0;
    for (let radius = 1; radius <= 2; radius++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
            const nx = x + dx;
            const ny = y + dy;
            if (this.isInBounds(nx, ny, width, height) && this.isCellEmpty(map, nx, ny)) {
              emptySpaces++;
            }
          }
        }
      }
      if (emptySpaces >= this.options.minSquadSize - 1) {
        return true;
      }
    }
    
    return false;
  }

  private hasNearbyEnemies(map: MapType, x: number, y: number, width: number, height: number): boolean {
    for (let dy = -this.options.minDistanceBetweenGroups; dy <= this.options.minDistanceBetweenGroups; dy++) {
      for (let dx = -this.options.minDistanceBetweenGroups; dx <= this.options.minDistanceBetweenGroups; dx++) {
        const nx = x + dx;
        const ny = y + dy;
        
        if (this.isInBounds(nx, ny, width, height) && map[ny][nx].battler) {
          return true;
        }
      }
    }
    return false;
  }

  private isCellEmpty(map: MapType, x: number, y: number): boolean {
    return this.isInBounds(x, y, map[0].length, map.length) && 
           map[y][x].type === TerrainsTypesEnum.EMPTY && 
           !map[y][x].battler;
  }

  private createSingleEnemy(): Battler {
    return new Battler();
  }

  private createSquadMember(): Battler {
    return new Battler();
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private isInBounds(x: number, y: number, width: number, height: number): boolean {
    return x >= 0 && x < width && y >= 0 && y < height;
  }
}