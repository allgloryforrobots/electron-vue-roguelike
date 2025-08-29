import { InventorySlotItemType } from "../types/types";

export interface IItemOptions {
    name: string;
    codename: string;
    slot: InventorySlotItemType[];
    // двуручный чем блокирует второй слот руки
    // броня рыцаря занимает слоты на все тело
    lockSlots: InventorySlotItemType[];
    itemType: ItemType;
    icon?: string;
    armorType?: string;
    marker?: string;
    width: number;
    height: number;
    position: IItemPos;
}

export interface IItemPos {
    x: number;
    y: number;
}

export class Item {
    id = crypto.randomUUID();
    name: string;
    codename: string;
    itemType: ItemType;
    lockSlots: InventorySlotItemType[];
    slot: InventorySlotItemType[];
    icon?: string;
    armorType?: string;
    marker?: string;
    width: number;
    height: number;
    position: IItemPos = { x: -1, y: -1 };

    constructor(options: IItemOptions) {
        this.name = options.name;
        this.codename = options.codename;
        this.itemType = options.itemType;
        this.slot = options.slot;
        this.lockSlots = options.lockSlots;
        this.icon= options.icon;
        this.armorType = options.armorType;
        this.marker = options.marker;
        this.width = options.width;
        this.height = options.height;
        this.position = options.position;
    }
}

class ItemType {
    name: string;
    codename: string;

    constructor(name: string, codename: string) {
        this.name = name;
        this.codename = codename;
    }
}

export const itemIconsByType = {
    heavy: {
        helmet: "fa-helmet-safety",
        shoulders: "fa-shield",
        chest: "fa-chess-rook",
        marker: "⛓"
    },
    medium: {
        helmet: "fa-hat-cowboy",
        chest: "fa-vest",
        shield: "fa-shield-alt",
        marker: "🛡"
    },
    light: {
        helmet: "fa-graduation-cap",
        chest: "fa-shirt",
        gloves: "fa-hand",
        marker: "◎"
    }
};

export const itemTypes = {
    // Ближний бой
    // кастет, тактическая перчатка, кастет с клинком, кольцо с шипом, палочка в руке
    brassKnuckles: new ItemType("Кастет", "brassKnuckles"),
    nunchaku: new ItemType("Нунчаки", "nunchaku"),
    dagger: new ItemType("Кинжал", "dagger"),
    sword: new ItemType("Одноручный меч", "sword"),
    greatSword: new ItemType("Двуручный меч", "greatSword"),
    rapier: new ItemType("Рапира", "rapier"),
    axe: new ItemType("Одноручный топор", "axe"),
    greatAxe: new ItemType("Двуручный топор", "greatAxe"),
    mace: new ItemType("Булава", "mace"),
    warhammer: new ItemType("Боевой молот", "warhammer"),
    staff: new ItemType("Посох", "staff"),
    spear: new ItemType("Копье", "spear"),
    // halberd: new ItemType("Алебарда", "halberd"),
    sickle: new ItemType("Серп", "sickle"),
    // katana: new ItemType("Катана", "katana"),
    flail: new ItemType("Цеп", "flail"),

    // Дальний бой
    bow: new ItemType("Лук", "bow"),
    crossbow: new ItemType("Арбалет", "crossbow"),
    sling: new ItemType("Праща", "sling"),
    pistol: new ItemType("Пистолет", "pistol"),
    musket: new ItemType("Мушкет", "musket"),
    dart: new ItemType("Дротик", "dart"),
    javelin: new ItemType("Метательное копье", "javelin"),
    blowgun: new ItemType("Духовая трубка", "blowgun"),

    // Расходники
    quiver: new ItemType("Колчан", "quiver"),
    arrow: new ItemType("Стрела", "arrow"),
    bolt: new ItemType("Арбалетный болт", "bolt"),
    bullet: new ItemType("Патрон", "bullet"),

    // Метательное
    throwingKnives: new ItemType("Метательные ножи", "throwingKnives"),
    shuriken: new ItemType("Сюрикен", "shuriken"),
    stone: new ItemType("Камень", "stone"),
    wand: new ItemType("Волшебная палочка", "wand"),
    grenade: new ItemType("Граната", "grenade"),

    // Щиты
    buckler: new ItemType("Кулачный щит", "buckler"),
    shield: new ItemType("Щит", "shield"),
    towerShield: new ItemType("Тяжелый щит", "towerShield"),

    // Броня
    helmet: new ItemType("Шлем", "helmet"),
    armor: new ItemType("Броня", "armor"), 
    gloves: new ItemType("Перчатки", "gloves"),
    leggings: new ItemType("Поножи", "leggings"),
    boots: new ItemType("Сапоги", "boots"),

    // Аксессуары
    amulet: new ItemType("Амулет", "amulet"),
    ring: new ItemType("Кольцо", "ring"),

    // Здоровье и мана
    potion: new ItemType("Зелье", "potion"),

    // Ресурсы и крафт
    ore: new ItemType("Руда", "ore"),
    ingot: new ItemType("Слиток", "ingot"),
    leather: new ItemType("Кожа", "leather"),
    cloth: new ItemType("Ткань", "cloth"),
    herb: new ItemType("Трава", "herb"),

    // Ключи и особые предметы
    key: new ItemType("Ключ", "key"),
    scroll: new ItemType("Свиток", "scroll"),
    book: new ItemType("Книга", "book"),
    gem: new ItemType("Драгоценный камень", "gem"),

    // Деньги
    goldCoin: new ItemType("Золотая монета", "goldCoin"),
    
}