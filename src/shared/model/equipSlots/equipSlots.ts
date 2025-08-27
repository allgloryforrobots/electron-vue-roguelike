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

    // Аксессуары
    ACCESSORY_A = "accessoryA",
    ACCESSORY_B = "accessoryB",
    
    // Быстрые слоты
    QUICK_SLOT_A = "quickSlotA",
    QUICK_SLOT_B = "quickSlotB",
    
    // Комплект 1
    COMPLECT1_RIGHT_HAND = "complect1.rightHand",
    COMPLECT1_LEFT_HAND = "complect1.leftHand",
    
    // Комплект 2
    COMPLECT2_RIGHT_HAND = "complect2.rightHand",
    COMPLECT2_LEFT_HAND = "complect2.leftHand"
}

export const generateSlots = () => {
    return {
        // Слоты для экипировки
        head: new InventorySlot("Голова", InventorySlotCode.HEAD),
        body: new InventorySlot("Тело", InventorySlotCode.BODY),
        legs: new InventorySlot("Ноги", InventorySlotCode.LEGS),
        arms: new InventorySlot("Руки", InventorySlotCode.ARMS),

        // Аксессуары
        accessoryA: new InventorySlot("Аксессуар A", InventorySlotCode.ACCESSORY_A),
        accessoryB: new InventorySlot("Аксессуар B", InventorySlotCode.ACCESSORY_B),

        // Быстрые слоты
        quickSlotA: new InventorySlot("Быстрый слот A", InventorySlotCode.QUICK_SLOT_A),
        quickSlotB: new InventorySlot("Быстрый слот B", InventorySlotCode.QUICK_SLOT_B),

        // Комплекты оружия
        complect1: {
            rightHand: new InventorySlot("Правая рука (комплект 1)", InventorySlotCode.COMPLECT1_RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 1)", InventorySlotCode.COMPLECT1_LEFT_HAND),
        },

        complect2: {
            rightHand: new InventorySlot("Правая рука (комплект 2)", InventorySlotCode.COMPLECT2_RIGHT_HAND),
            leftHand: new InventorySlot("Левая рука (комплект 2)", InventorySlotCode.COMPLECT2_LEFT_HAND),
        }
    }
}