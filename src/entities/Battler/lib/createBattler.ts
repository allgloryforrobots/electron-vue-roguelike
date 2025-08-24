import { IOptions } from "../types/battlerTypes";

export class Battler {
    id: string;

    // -- константы

    // базовый шанс попадания
    attack_base = 60;
    // бонус к защите при блоке щитом
    shield_bonus = 20;
    // бонус к защите при парированием оружием
    parry_bonus = 0;

    // -- общее

    level = 1;
    race = null;
    character_class = null; // бродяга
    profession = null;

    // -- сопротивления

    // сопротивление огню
    fire_resistance = 0;
    // сопротивление  холоду
    cold_resistance = 0;
    // сопротивление электричеству
    electricity_resistance = 0;
    // сопротивление яду
    poison_resistance = 0;
    // сопротивление кислоте
    acid_resistance = 0;
    // сопротивление дробящему
    crushing_resistance = 0;
    // сопротивление колющему (+стрелы)
    piercing_resistance = 0;
    // сопротивление режущему
    cutting_resistance = 0;
    // сопротивление магии
    magic_resistance = 0;
    // сопротивление ментальным эффектам
    psi_resistance = 0;
    // сопротивление физическим эффектам
    phis_resistance = 0;

    // -- первичные характеристики

    // телосложение
    constitution = 0;
    // проворство
    agility = 0;
    // восприятие
    perception = 0;
    // дар
    gift = 0;
    // интеллект
    intelligence = 0;
    // эмпатия
    empathy = 0;
    // психика
    psyche = 0;
    // внешность
    appearance = 0;

    /**
     * @param stat характеристика или навык
     * @return модификатор (процент)
     */
    getStatPercentModifier(stat: number): number {
        return Math.floor(stat / 10);
    }

    /**
     * @param stat характеристика или навык
     * @return модификатор (целочисленное)
     */
    getStatValueModifier(stat: number): number {
        return Math.floor(stat / 30);
    }

    /**
     * @return модификатор уровня (целочисленное)
     */
    getLevelValueModifier(): number {
        return Math.floor(this.level / 3);
    }

    // -- вторичные характеристики
    // боеспособность (5 +5 +5)
    get max_combat_capability(): number {
        return this.combat_capability_base + 
            this.getStatValueModifier(this.constitution) + 
            this.getLevelValueModifier();
    }
    combat_capability_base = 5;
    current_combat_capability = this.max_combat_capability;

    // -- спецнавыки

    // Прочная шкура (телосложение)
    tough_skin = 0;
    // Быстрая реакция (проворство) 
    quick_reaction = 0;
    // Острый глаз (восприятие)
    sharp_eye = 0;
    // Мощная магия (дар)
    powerful_magic = 0;
    // Сила Разума (интеллект)
    power_of_the_mind = 0;
    // сила харизмы (эмпатия)
    power_of_charisma = 0;
    // Стальная стойкость (психика)
    steel_fortitude = 0;
    // Икона стиля (внешность)
    style_icon = 0;

    // -- навыки

    // боевые искусства
    martial_arts = 0;
    // ножевой бой
    knife = 0;
    // короткие клинки
    short_blades = 0;
    // длинные клинки
    long_blades = 0;
    // булава и цеп
    mace_and_flail = 0;
    // секиры
    axes = 0;
    // древковое
    pole = 0;
    // броски и праща
    throws_and_slings = 0;

    // экзотическое оружие (духовая трубка с дротиками, нунчаки и т.д.)
    exotic_weapons = 0;
    // конный бой
    horse_fight = 0;
    // критический удар
    critical_hit = 0;
    // два оружия
    dual_wield = 0;
    // атака в полете
    attack_in_flight = 0;
    // ниндзюцу (атаки через врагов или из заднего ряда)
    ninjutsu = 0;

    // лук
    bow = 0;
    // арбалет
    crossbow = 0;
    // огнестрельное
    firearm = 0;
    // тяжелое оружие (гранатомет, баллиста, пушка с ядрами)
    heavy_weapons = 0;

    // щит
    shield = 0;
    // парирование
    parry = 0;
    // уклонение
    evasion=  0;
    // легкая броня
    light_armor = 0;
    // тяжелая броня
    heavy_armor = 0;
    // бездоспешный бой
    unarmored_combat = 0;

    // плавание
    swimming = 0;
    // скалолазание
    climbing = 0;
    // акробатика
    acrobatics = 0;
    // атлетика
    athletics = 0;
    // скрытность
    stealth = 0;
    // разведка
    scouting = 0;
    // аугментации
    augmentations = 0;

    // решительность
    resolve = 0;
    // запугивание
    intimidation = 0;
    // блеф
    bluff = 0;
    // дипломатия
    diplomacy = 0;
    // манипулирование
    manipulation = 0;
    // соблазнение
    seduction = 0;
    // психология
    psychology = 0;

    // исполнение
    performance = 0;
    // расследование
    investigation = 0;
    // медицина
    medicine = 0;
    // знание (умение писать, языки, лор)
    knowledge = 0;
    // торговля
    trade = 0;
    // концентрация
    concentration  = 0;
    // артефакты
    artifacts = 0;
    // тактика
    tactics = 0;
    
    // медвежатник
    safecracker = 0;
    // кража
    steal = 0;
    // инфомантия
    infomantia = 0;
    // азартные игры
    gambling = 0;
    // пилотирование
    piloting = 0;

    // зачарование
    enchantment = 0;
    // кузнечное дело
    blacksmithing = 0;
    // кожевничество
    leatherworking = 0;
    // cтолярное дело
    woodworking = 0;
    // ювелирное дело
    jewelry_making = 0;
    // поварское дело
    cooking = 0;
    // дрессировка животных 
    animal_training = 0;
    // фермерство
    farming = 0;
    // секс
    sex = 0;

    // ловушки (создание, обезвреживание)
    traps = 0;
    // алхимия (бомбы, яды, фармацевтика)
    alchemy = 0;
    // переписывание свитков
    rewriting_the_scrolls = 0;
    // гербология
    herbology = 0;
    // добыча ресурсов
    resource_extraction = 0;
    // охота
    hunting = 0;
    // картография
    cartography = 0;

    // биомантия
    biomancy = 0;
    // криптомагия
    cryptomagic = 0;
    // белая магия 
    white_magic = 0;
    // псионика
    psionics = 0;
    // черная магия
    black_magic = 0;
    // дикая магия
    wild_magic = 0;

    // оружейник
    gunsmith = 0;
    // механика
    mechanics = 0;
    // электрика
    electrics = 0;
    // металлургия
    metallurgy = 0;
    // импланты
    implants = 0;
    
    constructor(options: IOptions) {
        this.id = crypto.randomUUID();
        Object.assign(this, options);
    }

    hitChance() {
        const attack = this.attack_base + this.constitution;
        return attack;
    }

    defenceChance() {
        const defence = this.agility;
        return defence;
    }

}

class NPC extends Battler {
    constructor(options: IOptions) {
        super(options);
    }

    setLevel(level: number) {
        // super.setLevel(level);
    }
}

class HumanNPC extends NPC {
    constructor(options: IOptions) {
        super(options);
    }

    setLevel(level: number) {
        super.setLevel(level);
    }
}

class MageNPC extends HumanNPC {
    constructor(options: IOptions) {
        super(options);
    }

    setLevel(level: number) {
        super.setLevel(level);
    }
}

class WhiteMageNPC extends MageNPC {
    constructor(options: IOptions) {
        super(options);
    }

    setLevel(level: number) {
        super.setLevel(level);
    }
}

// class Arnold extends NPC {
//     constructor(options: IOptions) {
//         super(options);
//         this.agility = 100;
//     }
// }
