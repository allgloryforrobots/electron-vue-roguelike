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
