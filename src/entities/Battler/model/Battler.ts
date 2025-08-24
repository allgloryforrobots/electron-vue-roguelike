import { generateStats } from "./Stats";

type StatsType = ReturnType<typeof generateStats>;

export class Battler {
    id = crypto.randomUUID();
    stats: StatsType;

    // -- общее

    level = 1;
    race = null;
    character_class = null; // бродяга
    profession = null;
    
    constructor() {
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
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
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
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
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
    constructor() {
        super();
    }
}

export const elf = new ElfMage();