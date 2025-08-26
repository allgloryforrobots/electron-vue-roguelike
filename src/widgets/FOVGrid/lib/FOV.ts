import { MapType, TerrainsTypesEnum } from "@/entities/Map";

export class FOVCalculator {
    private map: MapType;
    private width: number;
    private height: number;

    constructor(map: MapType) {
        this.map = map;
        this.width = map[0].length;
        this.height = map.length;
    }

    calculateFOV(x: number, y: number, radius = 8): boolean[][] {
        const visible = Array.from({ length: this.height }, () => 
            new Array(this.width).fill(false)
        );

        // Всегда видна стартовая позиция
        visible[y][x] = true;

        // Проверяем все клетки в пределах радиуса
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                // Пропускаем клетки вне радиуса и карты
                if (dx*dx + dy*dy > radius*radius) continue;
                
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