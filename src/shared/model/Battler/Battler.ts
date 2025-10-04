import { Base, IBaseOptions } from "../Base/Base";
import { Direction } from "../Direction/Direction";
import { IPosition } from "../Position/Position";


interface IBattlerOptions extends IBaseOptions {
    id?: string;
}

export class Battler extends Base {
    position: IPosition = { x: 0, y: 0 };
    direction: Direction = Direction.DOWN;

    constructor(options: IBattlerOptions = {}) {
        super(options);
    }
}
