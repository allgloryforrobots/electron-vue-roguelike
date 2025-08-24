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

function ModifyStat(statPath: string, value: number) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                if (this instanceof Battler) {
                    const path = statPath.split('.');
                    let target: any = this.stats;
                    
                    for (let i = 0; i < path.length - 1; i++) {
                        target = target[path[i]];
                    }
                    
                    const finalProp = path[path.length - 1];
                    if (target[finalProp] && typeof target[finalProp].setSelfValue === 'function') {
                        target[finalProp].setSelfValue(value);
                    }
                }
            }
        };
    };
}

@ModifyStat('skills.mechanics', 20)
class Mage extends Battler {
    constructor() {
        super();
    }
}

export const mage = new Mage();