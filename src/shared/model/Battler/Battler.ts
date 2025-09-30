import { Direction } from "../Direction/Direction";
import { IPosition } from "../Position/Position";


export class Battler {
    id = crypto.randomUUID();
    position: IPosition = { x: 0, y: 0 };
    direction: Direction = Direction.DOWN;
}
