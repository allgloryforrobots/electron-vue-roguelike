import { Base } from "../Base/Base";
import { Battler } from "../Battler/Battler";
import { Obstacle } from "../Obstacle/Obstacle";

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
    moveCost: MoveCosts = MoveCosts.MEDIUM;
    battler: Battler | null = null;
    obstacle: Obstacle | null = null;

    constructor() {
        super();
    }

    isOpaque() {
        return Boolean(this.obstacle);
    }

    isPassable() {
        return !this.obstacle && !this.battler;
    }

}