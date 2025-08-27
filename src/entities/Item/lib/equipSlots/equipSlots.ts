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
        // Слоты для экипировки
        head: new InventorySlot("Голова", InventorySlotItemType.HEAD),
        body: new InventorySlot("Тело", InventorySlotItemType.BODY),
        legs: new InventorySlot("Ноги", InventorySlotItemType.LEGS),
        arms: new InventorySlot("Руки", InventorySlotItemType.ARMS),

        // Аксессуары
        accessoryA: new InventorySlot("Аксессуар A", InventorySlotItemType.ACCESSORY),
        accessoryB: new InventorySlot("Аксессуар B", InventorySlotItemType.ACCESSORY),

        // Быстрые слоты
        quickSlotA: new InventorySlot("Быстрый слот A", InventorySlotItemType.QUICK_SLOT),
        quickSlotB: new InventorySlot("Быстрый слот B", InventorySlotItemType.QUICK_SLOT),

        // Комплекты оружия
        complect1: {
            rightHand: new InventorySlot("Правая рука (комплект 1)", InventorySlotItemType.RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 1)", InventorySlotItemType.LEFT_HAND),
        },

        complect2: {
            rightHand: new InventorySlot("Правая рука (комплект 2)", InventorySlotItemType.RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 2)", InventorySlotItemType.LEFT_HAND),
        }
    }
}