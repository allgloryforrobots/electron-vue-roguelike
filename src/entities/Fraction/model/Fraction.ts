export class Fraction {
    name: string;
    codename: string;
    
    constructor(name: string, codename: string) {
        this.name = name;
        this.codename = codename;
    }
}

export const SorcerersTongue = new Fraction("Чароречье", "SorcerersTongue"); // Прыгуны
export const Demonsia = new Fraction("Демонзия", "Demonsia");
export const HouseOfTheReborn = new Fraction("Дом Перерожденных", "House of the Reborn");
export const EnergyBarons = new Fraction("Энергобароны", "Energy Barons");
export const Ordenocracy = new Fraction("Орденократия", "Ordenocracy"); // Генетические Династии
export const Ascended = new Fraction("Вознесшиеся", "Ascended"); // Элементали
export const Gearmen = new Fraction("Шестеренщики", "Gearmen"); // Андроиды
export const TheBastionOfPurity = new Fraction("Оплот Чистоты", "TheBastionOfPurity"); // самый крупный хейвен без магии и технологии (антимагия + ЭМП)
export const FreeFortresses = new Fraction("Свободные крепости", "Free Fortresses"); // мелкие  хейвены в пустных землях без ресурсов

export const Enemies = new Fraction("Противники", "enemies"); // абстрактные противники для тестов
export const Player = new Fraction("Игрок", "player"); // абстрактные противники для тестов

export function PlayerDecorator() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            fraction: Fraction = Player;
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args: any[]) {
                super(...args);
            }
        };
    };
}

export function EnemiesDecorator() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            fraction: Fraction = Enemies;
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args: any[]) {
                super(...args);
            }
        };
    };
}
