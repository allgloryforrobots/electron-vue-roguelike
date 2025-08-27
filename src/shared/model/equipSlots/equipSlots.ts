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

export enum InventorySlotCode {
    // Основные слоты экипировки
    HEAD = "head",
    BODY = "body",
    LEGS = "legs",
    ARMS = "arms",

    ACCESSORY = "accessory",
    
    // Быстрые слоты
    QUICK_SLOT = "quickSlot",
    
    RIGHT_HAND = "rightHand",
    LEFT_HAND = "leftHand",

}

export const generateSlots = () => {
    return {
        // Слоты для экипировки
        head: new InventorySlot("Голова", InventorySlotCode.HEAD),
        body: new InventorySlot("Тело", InventorySlotCode.BODY),
        legs: new InventorySlot("Ноги", InventorySlotCode.LEGS),
        arms: new InventorySlot("Руки", InventorySlotCode.ARMS),

        // Аксессуары
        accessoryA: new InventorySlot("Аксессуар A", InventorySlotCode.ACCESSORY),
        accessoryB: new InventorySlot("Аксессуар B", InventorySlotCode.ACCESSORY),

        // Быстрые слоты
        quickSlotA: new InventorySlot("Быстрый слот A", InventorySlotCode.QUICK_SLOT),
        quickSlotB: new InventorySlot("Быстрый слот B", InventorySlotCode.QUICK_SLOT),

        // Комплекты оружия
        complect1: {
            rightHand: new InventorySlot("Правая рука (комплект 1)", InventorySlotCode.RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 1)", InventorySlotCode.LEFT_HAND),
        },

        complect2: {
            rightHand: new InventorySlot("Правая рука (комплект 2)", InventorySlotCode.RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 2)", InventorySlotCode.LEFT_HAND),
        }
    }
}