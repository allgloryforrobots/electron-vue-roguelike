import { Direction } from "@/shared/model/Direction/Direction";
import { IPosition } from "@/shared/model/Position/Position";

export interface BackCells {
    behind: IPosition;
    behindDiagonalLeft: IPosition;
    behindDiagonalRight: IPosition;
}

export function getCellsBehindPlayer(x: number, y: number, direction: Direction): BackCells {
    let behind: IPosition;
    let behindDiagonalLeft: IPosition;
    let behindDiagonalRight: IPosition;

    switch (direction) {
        case Direction.UP:
            // Позади — вниз
            behind = { x, y: y + 1 };
            behindDiagonalLeft = { x: x - 1, y: y + 1 };
            behindDiagonalRight = { x: x + 1, y: y + 1 };
            break;

        case Direction.DOWN:
            // Позади — вверх
            behind = { x, y: y - 1 };
            behindDiagonalLeft = { x: x - 1, y: y - 1 };
            behindDiagonalRight = { x: x + 1, y: y - 1 };
            break;

        case Direction.LEFT:
            // Позади — вправо
            behind = { x: x + 1, y };
            behindDiagonalLeft = { x: x + 1, y: y - 1 };
            behindDiagonalRight = { x: x + 1, y: y + 1 };
            break;

        case Direction.RIGHT:
            // Позади — влево
            behind = { x: x - 1, y };
            behindDiagonalLeft = { x: x - 1, y: y - 1 };
            behindDiagonalRight = { x: x - 1, y: y + 1 };
            break;

        default:
            throw new Error(`Unknown direction: ${direction}`);
    }

    return {
        behind,
        behindDiagonalLeft,
        behindDiagonalRight
    };
}