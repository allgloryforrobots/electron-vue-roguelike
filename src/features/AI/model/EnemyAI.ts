import { Battler } from "@/shared/model/Battler";
import { MapType } from "@/entities/Map";
import { FOVCalculator } from "@/widgets/FOVGrid";

export class EnemyAI {
    private map: MapType;
    // если врагов не видно, то двигаться в точку где последний раз видели
    private lastSeenEnemyPosition: {
        x: number,
        y: number
    } | null
    private fowCalculator: FOVCalculator;
    private battler: Battler;

    constructor(map: MapType, fowCalculator: FOVCalculator,  battler: Battler) {
        this.map = map;
        this.fowCalculator = fowCalculator;
        this.lastSeenEnemyPosition = null;
        this.battler = battler;
    }

    findAndDestroy() {
        // позиция должна быть всегда
        if (!this.battler.position) {
            return;
        }
    }

    /** в области видимости определяем противников */
    findEnemies() {

    }

    /** двигаем врага на позицию для атаки (ближайший враг) */
    moveToAttackPosition() {

    }


}