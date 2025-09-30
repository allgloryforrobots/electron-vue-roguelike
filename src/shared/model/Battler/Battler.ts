import { Direction } from "../Direction/Direction";
import { IPosition } from "../Position/Position";


interface IClassOptions {
    name: string;
    codename: string;
}

export class Battler {
    id = crypto.randomUUID();
    name: string;
    codename: string;
    position: IPosition = { x: 0, y: 0 };
    direction: Direction;
    
    constructor(options: IClassOptions) {
        this.name = options.name;
        this.codename = options.codename;
        this.direction = Direction.DOWN;
    }

}
