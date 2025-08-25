import { EnemiesDecorator, Fraction, PlayerDecorator } from "@/entities/Fraction";
import { generateStats } from "./Stats";

interface IClassOptions {
    name: string;
    codename: string;
}

export class Battler {
    id = crypto.randomUUID();
    stats = generateStats();
    name: string;
    codename: string;
    level = 1;
    race = null;
    character_class = null;
    profession = null;
    image = "🧙‍♂️";
    fraction?: Fraction;
    
    constructor(options: IClassOptions) {
        this.name = options.name;
        this.codename = options.codename;
    }

    isAlly(target: Battler & { faction?: Fraction }): boolean {
        if (!this.fraction?.codename) return false;
        return this.fraction?.codename === target.faction?.codename;
    }

    hitChance() {
        const attack = this.stats.constants.attackBase + this.stats.characteristics.perception.getValue();
        return attack < 0 ? attack : 0;
    }

    defenceChance() {
        const defence = this.stats.characteristics.agility.getValue();
        return defence < 0 ? defence : 0;
    }

    // боеспособность
    get combatCapability() {
        const value = this.stats.secondaryCharacteristics.combat_capability.getValue() + 
            this.stats.characteristics.constitution.getStatValueModifier();
        return value > 0;
    }

    // рассудок
    get sanity() {
        const value = this.stats.secondaryCharacteristics.sanity.getValue() + 
            this.stats.characteristics.psyche.getStatValueModifier();
        return value;
    }

    // энергия
    get energy() {
        const value = this.stats.secondaryCharacteristics.energy.getValue() + 
            this.stats.characteristics.constitution.getStatValueModifier();
        return value;
    }

    // мана
    get mana() {
        const value = this.stats.secondaryCharacteristics.mana.getValue() + 
            this.stats.characteristics.gift.getStatValueModifier();
        return value;
    }

    // очки действия
    get actionPoints() {
        const value = this.stats.secondaryCharacteristics.actionPoints.getValue() + 
            this.stats.characteristics.agility.getStatValueModifier();
        return value;
    }

}

function RaceElfDecorator() {
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                if (this instanceof Battler) {
                    this.stats.characteristics.agility.changeSelfValue(60);
                    this.stats.characteristics.perception.changeSelfValue(20);
                    this.stats.skills.bow.changeSelfValue(15);
                }
            }
        };
    };
}

function ClassMageDecorator() {
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                if (this instanceof Battler) {
                    this.stats.characteristics.intelligence.changeSelfValue(60);
                    this.stats.skills.wild_magic.changeSelfValue(15);
                }
            }
        };
    };
}

@RaceElfDecorator()
@ClassMageDecorator()
@EnemiesDecorator()
class ElfMage extends Battler {
    constructor(options: IClassOptions) {
        super(options);
    }
}

export const enemy = new ElfMage({
    name: 'elf',
    codename: 'elf'
});

@PlayerDecorator()
class Player extends Battler {
    constructor(options: IClassOptions) {
        super(options);
    }
}

export const player = new Player({
    name: 'player',
    codename: 'player'
});