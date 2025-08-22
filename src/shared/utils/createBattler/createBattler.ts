export interface IOptions {
    codename: string;
}

export class Battler {
    id: string;

    // -- первичные характеристики

    // телосложение
    constitution = 10;
    // проворство
    agility = 10;

    // восприятие
    perception = 10;
    // дар
    gift = 10;
    // интеллект
    intelligence = 10;

    // эмпатия
    empathy = 10;
    // психика
    psyche = 10;
    // внешность
    appearance = 10;

    // -- константы

    // базовый шанс попадания
    attackBase = 60;
    // бонус к защите при блоке щитом
    shieldBonus = 20;
    // бонус к защите при парированием оружием
    parryBonus = 10;

    // -- навыки

    // боевые искусства
    martial_arts = 10;
    // ножевой бой
    knife = 10;
    // короткие клинки
    short_blades = 10;
    // длинные клинки
    long_blades = 10;
    // булава и цеп
    mace_and_flail = 10;
    // секиры
    axes = 10;
    // древковое
    pole = 10;
    // броски и праща
    throws_and_slings = 10;

    // экзотическое оружие (духовая трубка с дротиками, нунчаки и т.д.)
    exotic_weapons = 10;
    // конный бой
    horse_fight = 10;
    // критический удар
    critical_hit = 10;
    // два оружия
    dual_wield = 10;
    // атака в полете
    attack_in_flight = 10;
    // ниндзюцу (атаки через врагов или из заднего ряда)
    ninjutsu = 10;

    // лук
    bow = 10;
    // арбалет
    crossbow = 10;
    // огнестрельное
    firearm = 10;
    // тяжелое оружие (гранатомет, баллиста, пушка с ядрами)
    heavy_weapons = 10;

    // щит
    shield = 10;
    // парирование
    parry = 10;
    // уклонение
    evasion=  10;
    // легкая броня
    light_armor = 10;
    // тяжелая броня
    heavy_armor = 10;
    // бездоспешный бой
    unarmored_combat = 10;

    // плавание
    swimming = 10;
    // скалолазание
    climbing = 10;
    // акробатика
    acrobatics = 10;
    // атлетика
    athletics = 10;
    // скрытность
    stealth = 10;
    // разведка
    scouting = 10;
    // аугментации
    augmentations = 10;


    // решительность
    resolve = 10;
    // запугивание
    intimidation = 10;
    // блеф
    bluff = 10;
    // дипломатия
    diplomacy = 10;
    // манипулирование
    manipulation = 10;
    // соблазнение
    seduction = 10;


    // исполнение
    performance = 10;
    // расследование
    investigation = 10;
    // медицина
    medicine = 10;
    // знание (умение писать, языки, лор)
    knowledge = 10;
    // торговля
    trade = 10;
    // концентрация
    concentration  = 10;
    // артефакты
    artifacts = 10;
    
    // медвежатник
    safecracker = 10;
    // кража
    steal = 10;
    // инфомантия
    infomantia = 10;
    // азартные игры
    gambling = 10;

    // зачарование
    enchantment = 10;
    // ремесло
    craft = 10;
    // ловушки (создание, обезвреживание)
    traps = 10;
    // алхимия (бомбы, яды, фармацевтика)
    alchemy = 10;
    // переписывание свитков
    rewriting_the_scrolls = 10;
    // гербология
    herbology = 10;
    // добыча ресурсов
    resource_extraction = 10;
    // охота
    hunting = 10;


    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;
    // 
     = 10;



    
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