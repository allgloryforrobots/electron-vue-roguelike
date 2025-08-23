export interface IOptions {
    codename: string;
    constitution?: number;
    agility?: number;
    perception?: number;
    gift?: number;
    intelligence?: number;
    empathy?: number;
    psyche?: number;

    martial_arts?: number;
    knife?: number;
    short_blades?: number;
    long_blades?: number;
    mace_and_flail?: number;
    axes?: number;
    pole?: number;
    throws_and_slings?: number;
    exotic_weapons?: number;
    // horse_fight?: number;
    critical_hit?: number;
    dual_wield?: number;
    // attack_in_flight?: number;
    // ninjutsu?: number;
    bow?: number;
    crossbow?: number;
    firearm?: number;
    heavy_weapons?: number;
    shield?: number;
    parry?: number;
    evasion?: number;
    light_armor?: number;
    heavy_armor?: number;
    unarmored_combat?: number;

    swimming?: number;
    // climbing?: number;
    // acrobatics?: number;
    athletics?: number;
    stealth?: number;
    scouting?: number;

    resolve?: number;
    concentration?: number;
    biomancy?: number;
    cryptomagic?: number;
    white_magic?: number;
    psionics?: number;
    black_magic?: number;
    wild_magic?: number;
}

export class Battler {
    id: string;

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

    // -- константы

    // базовый шанс попадания
    attackBase = 60;
    // бонус к защите при блоке щитом
    shieldBonus = 20;
    // бонус к защите при парированием оружием
    parryBonus = 0;

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
        const attack = this.attackBase + this.constitution;
        return attack;
    }

    defenceChance() {
        const defence = this.agility;
        return defence;
    }

}

// class Mage extends Battler {
//     constructor(options: IOptions) {
//         super(options);
//         this.gift = 100;
//     }
// }

// class Arnold extends Mage {
//     constructor(options: IOptions) {
//         super(options);
//         this.agility = 100;
//     }
// }
