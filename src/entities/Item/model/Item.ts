import { InventorySlotCode } from "@/shared/model/equipSlots/equipSlots";

export interface IItemOptions {
    name: string;
    codename: string;
    slot: InventorySlotCode;
    // двуручный чем блокирует второй слот руки
    // броня рыцаря занимает слоты на все тело
    lockSlots: InventorySlotCode[];
}

export class Item {
    name: string;
    codename: string;

    constructor(options: IItemOptions) {
        this.name = options.name;
        this.codename = options.codename;
    }
}