import { Base } from "../Base/Base";
import { Battler } from "../Battler/Battler";
import { CellEffect } from "../Effect/Effect";

export class Cell extends Base {
    constructor() {
        super();
    }
}

export enum MoveCosts {
    LOW = 1, 
    MEDIUM = 2, 
    HIGH = 3
}

export enum PassableState {
    PASSABLE = 'passable',
    NOT_PASSABLE = 'not_passable',
}

export class GroundCell extends Cell {
    passable: PassableState = PassableState.PASSABLE;
    battlers: Battler[] = [];
    cellEffects: CellEffect[] = [];
    /** огонь, кислота, лед */
    surfaceEffect: CellEffect | null = null;
    /** песок, камень, вода, лед, лава */
    baseSurface = null;
    /** дым, облако яда */
    cloudEffect: CellEffect | null = null;
    moveCost: MoveCosts = MoveCosts.MEDIUM;
    obstacle: object | null = null;

    constructor() {
        super();
    }

    isPassable(): boolean {
        return this.passable === PassableState.PASSABLE && !this.battlers.length && !this.obstacle;
    }

}