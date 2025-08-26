import { MapType, TerrainsTypesEnum } from "@/entities/Map";

export enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export class FOVCalculator {
    private map: MapType;
    private width: number;
    private height: number;

    constructor(map: MapType) {
        this.map = map;
        this.width = map[0].length;
        this.height = map.length;
    }

    calculateFOV(x: number, y: number, radius = 8, direction?: {dx: number, dy: number}): boolean[][] {
        const visible = Array.from({ length: this.height }, () => 
            new Array(this.width).fill(false)
        );

        // Всегда видна стартовая позиция
        visible[y][x] = true;

        // Если направление не указано - полный обзор 360 градусов
        const useSector = direction !== undefined;
        
        // Проверяем все клетки в пределах радиуса
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                // Пропускаем клетки вне радиуса
                if (dx*dx + dy*dy > radius*radius) continue;
                
                // Если используется сектор, проверяем угол видимости
                if (useSector && !this.isInSector(dx, dy, direction!)) continue;
                
                const nx = x + dx;
                const ny = y + dy;
                
                if (!this.isInBounds(nx, ny)) continue;
                
                // Проверяем видимость с помощью алгоритма Брезенхема
                if (this.hasLineOfSight(x, y, nx, ny)) {
                    visible[ny][nx] = true;
                }
            }
        }

        return visible;
    }

    // Проверяет, находится ли точка в секторе 180 градусов от направления взгляда
    private isInSector(dx: number, dy: number, direction: {dx: number, dy: number}): boolean {
        // Нормализуем вектор направления
        const dirLength = Math.sqrt(direction.dx * direction.dx + direction.dy * direction.dy);
        const normalizedDir = {
            dx: direction.dx / dirLength,
            dy: direction.dy / dirLength
        };

        // Нормализуем вектор к целевой точке
        const targetLength = Math.sqrt(dx * dx + dy * dy);
        if (targetLength === 0) return true; // Центральная точка всегда видна
        
        const normalizedTarget = {
            dx: dx / targetLength,
            dy: dy / targetLength
        };

        // Вычисляем косинус угла между векторами
        const dotProduct = normalizedDir.dx * normalizedTarget.dx + normalizedDir.dy * normalizedTarget.dy;
        
        // 180 градусов = ±90 градусов от направления, cos(90°) = 0
        // Поэтому видимы все точки с углом ≤ 90 градусов от направления
        return dotProduct >= 0;
    }

    // Векторные представления направлений
    private static readonly DIRECTION_VECTORS = {
        [Direction.UP]: { dx: 0, dy: -1 },
        [Direction.DOWN]: { dx: 0, dy: 1 },
        [Direction.LEFT]: { dx: -1, dy: 0 },
        [Direction.RIGHT]: { dx: 1, dy: 0 }
    };

    // Упрощенный метод для расчета FOV с направлением
    calculateFOVWithDirection(x: number, y: number, direction: Direction, radius = 8): boolean[][] {
        const dirVector = FOVCalculator.DIRECTION_VECTORS[direction];
        return this.calculateFOV(x, y, radius, dirVector);
    }

    private hasLineOfSight(x0: number, y0: number, x1: number, y1: number): boolean {
        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;
        
        let x = x0;
        let y = y0;
        
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // Если достигли цели - видимость есть
            if (x === x1 && y === y1) return true;
            
            // Если на пути препятствие - видимости нет
            if (this.isOpaque(x, y) && !(x === x0 && y === y0)) {
                return false;
            }
            
            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x += sx;
            }
            if (e2 < dx) {
                err += dx;
                y += sy;
            }
        }
    }

    private isOpaque(x: number, y: number): boolean {
        // Типы 1 и 2 - деревья и другие препятствия
        const cellType = this.map[y][x].type;
        return cellType === TerrainsTypesEnum.CLUSTER_TREE || cellType === TerrainsTypesEnum.SINGLE_TREE;
    }

    private isInBounds(x: number, y: number): boolean {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}