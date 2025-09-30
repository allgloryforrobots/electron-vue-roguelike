import { Property } from "../Property/Property";

export class Fraction extends Property {
  constructor() {
    super();
  }
}

// Прыгуны
export class SorcerersTongue extends Fraction {
  static readonly name = "Чароречье";
  static readonly codename = "SorcerersTongue";
}

export class Demonsia extends Fraction {
  static readonly name = "Демонзия";
  static readonly codename = "Demonsia";
}

export class HouseOfTheReborn extends Fraction {
  static readonly name = "Дом Перерожденных";
  static readonly codename = "House of the Reborn";
}

export class EnergyBarons extends Fraction {
  static readonly name = "Энергобароны";
  static readonly codename = "Energy_Barons";
}

// Генетические Династии
export class Ordenocracy extends Fraction {
  static readonly name = "Орденократия";
  static readonly codename = "Ordenocracy";
}

// Элементали
export class Ascended extends Fraction {
  static readonly name = "Вознесшиеся";
  static readonly codename = "Ascended";
}

// Андроиды ?
export class Gearmen extends Fraction {
  static readonly name = "Шестеренщики";
  static readonly codename = "Gearmen";
}

// самый крупный хейвен без магии и технологии (антимагия + ЭМП)
export class GeaTheBastionOfPurityrmen extends Fraction {
  static readonly name = "Оплот Чистоты";
  static readonly codename = "TheBastionOfPurity";
}

// мелкие  хейвены в пустных землях без ресурсов
export class FreeFortresses extends Fraction {
  static readonly name = "Свободные крепости";
  static readonly codename = "Free_Fortresses";
}

// абстрактные противники 
export class Enemies extends Fraction {
  static readonly name = "Противники";
  static readonly codename = "Enemies";
}

export class PlayerFraction extends Fraction {
  static readonly name = "Моя фракция";
  static readonly codename = "PlayerFraction";
}


// export function PlayerDecorator() {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return function <T extends new (...args: any[]) => object>(constructor: T) {
//         return class extends constructor {
//             fraction: Fraction = Player;
            
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             constructor(...args: any[]) {
//                 super(...args);
//             }
//         };
//     };
// }


