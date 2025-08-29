import { Item } from "../../model/Item";
import { InventorySlotItemType } from "../../types/types";

interface ISlotInventoryOptions {
    slotIcon: string,
    slotCls: string,
    slotXPos: number,
    slotYPos: number
}

export class InventorySlot {
    name: string;
    codename: string;
    locked: boolean = false;
    item = null;
    inventoryOptions: ISlotInventoryOptions;

    constructor(name: string, codename: InventorySlotItemType, inventoryOptions: ISlotInventoryOptions) {
        this.name = name;
        this.codename = codename;
        this.inventoryOptions = inventoryOptions
    }
}

export const generateSlots = () => {
    return {
        slots: {
            [InventorySlotKeys.HEAD]: new InventorySlot("Голова", InventorySlotItemType.HEAD, {
                slotIcon: "fa-solid fa-helmet-safety",
                slotCls: "inventory__slot--head",
                slotXPos: 2,
                slotYPos: 1
            }),
            [InventorySlotKeys.BODY]: new InventorySlot("Тело", InventorySlotItemType.BODY, {
                slotIcon: "fa-solid fa-shirt",
                slotCls: "inventory__slot--body",
                slotXPos: 2,
                slotYPos: 2
            }),
            [InventorySlotKeys.LEGS]: new InventorySlot("Ноги", InventorySlotItemType.LEGS, {
                slotIcon: "fa-solid fa-shoe-prints",
                slotCls: "inventory__slot--legs",
                slotXPos: 2,
                slotYPos: 3
            }),
            [InventorySlotKeys.ARMS]: new InventorySlot("Руки", InventorySlotItemType.ARMS, {
                slotIcon: "fa-solid fa-mitten",
                slotCls: "inventory__slot--arms",
                slotXPos: 1,
                slotYPos: 1
            }),
            [InventorySlotKeys.ACCESSORY]: new InventorySlot("Аксессуар", InventorySlotItemType.ACCESSORY, {
                slotIcon: "fa-solid fa-ring",
                slotCls: "inventory__slot--accessory-a",
                slotXPos: 1,
                slotYPos: 3
            }),
            [InventorySlotKeys.RIGHT_HAND]: new InventorySlot("Правая рука", InventorySlotItemType.RIGHT_HAND, {
                slotIcon: "fa-solid fa-hand-fist",
                slotCls: "inventory__slot--right-hand",
                slotXPos: 1,
                slotYPos: 2
            }),
            [InventorySlotKeys.LEFT_HAND]: new InventorySlot("Левая рука", InventorySlotItemType.LEFT_HAND, {
                slotIcon: "fa-solid fa-shield",
                slotCls: "inventory__slot--left-hand",
                slotXPos: 3,
                slotYPos: 2
            })
        },
        backpackItems: [] as Item[]
    }
}

export enum InventorySlotKeys {
    HEAD = "head",
    BODY = "body",
    LEGS = "legs",
    ARMS = "arms",
    ACCESSORY = "accessory",
    RIGHT_HAND = "rightHand",
    LEFT_HAND = "leftHand"
}
