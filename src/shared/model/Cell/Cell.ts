import { Base } from "../Base/Base";
import { Battler } from "../Battler/Battler";
import { Obstacle } from "../Obstacle/Obstacle";

export class Cell extends Base {
    x: number; 
    y: number;

    constructor(options: ICellOptions) {
        super();
        this.x = options.x;
        this.y = options.y;
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

export interface ICellOptions {
    x: number; 
    y: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IGroundCellOptions extends ICellOptions {

}

export class GroundCell extends Cell {
    moveCost: MoveCosts = MoveCosts.MEDIUM;
    battler: Battler | null = null;
    obstacle: Obstacle | null = null;

    constructor(options: IGroundCellOptions) {
        super(options);
    }

    isOpaque() {
        return Boolean(this.obstacle);
    }

    isPassable() {
        return !this.obstacle && !this.battler;
    }

}