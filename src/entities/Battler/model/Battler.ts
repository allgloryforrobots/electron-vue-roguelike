import { EnemiesDecorator, Fraction, PlayerDecorator } from "@/entities/Fraction";
import { generateStats } from "./Stats";
import { Direction } from "@/widgets/FOVGrid";
import { generateSlots } from "@/entities/Item/lib/equipSlots/equipSlots";

export interface IPosition {
    x: number;
    y: number;
}

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
    position: IPosition = { x: 0, y: 0 };
    direction: Direction;

    inventory = generateSlots();
    
    constructor(options: IClassOptions) {
        this.name = options.name;
        this.codename = options.codename;
        this.direction = Direction.DOWN;
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

    get rangeOfVision() {
        const value = this.stats.characteristics.perception.getStatValueModifier() + 
            this.stats.constants.rangeOfVisionDay;
        return value;
    }

    // боеспособность
    get combatCapability() {
        const value = this.stats.secondaryCharacteristics.combat_capability.getValue() + 
            this.stats.characteristics.constitution.getStatValueModifier();
        return value;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const playerCharacter = new Player({
    name: 'player',
    codename: 'player'
});