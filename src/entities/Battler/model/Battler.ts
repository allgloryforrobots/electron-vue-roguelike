import { generateStats } from "./Stats";

type StatsType = ReturnType<typeof generateStats>;

interface IClassOptions {
    name: string;
    codename: string;
}

export class Battler {
    id = crypto.randomUUID();
    stats: StatsType;
    name: string;
    codename: string;
    level = 1;
    race = null;
    character_class = null;
    profession = null;
    
    constructor(options: IClassOptions) {
        this.name = options.name;
        this.codename = options.codename;
        this.stats = generateStats();
    }

    hitChance() {
        const attack = this.stats.constants.attack_base + this.stats.characteristics.constitution.getValue();
        return attack;
    }

    defenceChance() {
        const defence = this.stats.characteristics.agility.getValue();
        return defence;
    }

}

function RaceElf() {
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                if (this instanceof Battler) {
                    this.stats.characteristics.agility.modifySelfValue(60);
                    this.stats.characteristics.perception.modifySelfValue(20);
                    this.stats.skills.bow.modifySelfValue(15);
                }
            }
        };
    };
}

function ClassMage() {
    return function <T extends new (...args: any[]) => object>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                if (this instanceof Battler) {
                    this.stats.characteristics.intelligence.modifySelfValue(60);
                    this.stats.skills.wild_magic.modifySelfValue(15);
                }
            }
        };
    };
}

@RaceElf()
@ClassMage()
class ElfMage extends Battler {
    constructor(options: IClassOptions) {
        super(options);
    }
}

export const elf = new ElfMage({
    name: 'elf',
    codename: 'elf'
});