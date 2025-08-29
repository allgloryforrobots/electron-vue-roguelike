import { Item } from "../../model/Item";
import { InventorySlotItemType } from "../../types/types";

export class InventorySlot {
    name: string;
    codename: string;
    locked: boolean = false;
    item = null;

    constructor(name: string, codename: string) {
        this.name = name;
        this.codename = codename;
    }
}

export const generateSlots = () => {
    return {
        slots: {
            // Слоты для экипировки
            [InventorySlotKeys.HEAD]: new InventorySlot("Голова", InventorySlotItemType.HEAD),
            [InventorySlotKeys.BODY]: new InventorySlot("Тело", InventorySlotItemType.BODY),
            [InventorySlotKeys.LEGS]: new InventorySlot("Ноги", InventorySlotItemType.LEGS),
            [InventorySlotKeys.ARMS]: new InventorySlot("Руки", InventorySlotItemType.ARMS),

            // Аксессуары
            [InventorySlotKeys.ACCESSORY_A]: new InventorySlot("Аксессуар A", InventorySlotItemType.ACCESSORY),
            [InventorySlotKeys.ACCESSORY_B]: new InventorySlot("Аксессуар B", InventorySlotItemType.ACCESSORY),

            [InventorySlotKeys.RIGHT_HAND]: new InventorySlot("Правая рука (комплект 1)", InventorySlotItemType.RIGHT_HAND),
            [InventorySlotKeys.LEFT_HAND]: new InventorySlot("Левая рука (комплект 1)", InventorySlotItemType.LEFT_HAND),

        },
        backpackItems: [] as Item[]
    }
}
export enum InventorySlotKeys {
    HEAD = "head",
    BODY = "body",
    LEGS = "legs",
    ARMS = "arms",
    ACCESSORY_A = "accessoryA",
    ACCESSORY_B = "accessoryB",
    RIGHT_HAND = "rightHand",
    LEFT_HAND = "leftHand"
}
