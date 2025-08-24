interface IStatOptions {
    name: string;
    codename: string;
}

class Stat {
    name: string;
    codename: string;
    // значения без модификаторов, изменяется только прокачкой
    self_value = 0;
    // временные статусы
    temp_modifiers = 0;
    // бонусы или штрафы от экипировки (надеть/снять)
    equip_modifiers = 0;

    constructor(options: IStatOptions) {
        this.name = options.name;
        this.codename = options.codename;
    }

    modifySelfValue(modifier: number) {
        this.self_value += modifier;
    }

    setTempModifier(modifier: number) {
        this.temp_modifiers += modifier;
    }

    setEquipModifier(modifier: number) {
        this.equip_modifiers += modifier;
    }

    getValue(): number {
        const value = this.self_value + 
            this.temp_modifiers +
            this.equip_modifiers;
        return value;
    }

    getStatPercentModifier(): number {
        return Math.floor(this.getValue() / 10);
    }

    getStatValueModifier(): number {
        return Math.floor(this.getValue() / 30);
    }
}

class Characteristic extends Stat {
    constructor(options: IStatOptions) {
        super(options);
    }
}

class Skill extends Stat {
    constructor(options: IStatOptions) {
        super(options);
    }
}

class Resist extends Stat {
    constructor(options: IStatOptions) {
        super(options);
    }
}

export function generateStats() {
    // Характеристики
    const constitution = new Characteristic({ name: "Телосложение", codename: "constitution" });
    const agility = new Characteristic({ name: "Проворство", codename: "agility" });
    const perception = new Characteristic({ name: "Восприятие", codename: "perception" });
    const gift = new Characteristic({ name: "Дар", codename: "gift" });
    const intelligence = new Characteristic({ name: "Интеллект", codename: "intelligence" });
    const empathy = new Characteristic({ name: "Эмпатия", codename: "empathy" });
    const psyche = new Characteristic({ name: "Психика", codename: "psyche" });
    const appearance = new Characteristic({ name: "Внешность", codename: "appearance" });

    // Сопротивления
    const fire_resistance = new Resist({ name: "Сопротивление огню", codename: "fire_resistance" });
    const cold_resistance = new Resist({ name: "Сопротивление холоду", codename: "cold_resistance" });
    const electricity_resistance = new Resist({ name: "Сопротивление электричеству", codename: "electricity_resistance" });
    const poison_resistance = new Resist({ name: "Сопротивление яду", codename: "poison_resistance" });
    const acid_resistance = new Resist({ name: "Сопротивление кислоте", codename: "acid_resistance" });
    const crushing_resistance = new Resist({ name: "Сопротивление дробящему", codename: "crushing_resistance" });
    const piercing_resistance = new Resist({ name: "Сопротивление колющему", codename: "piercing_resistance" });
    const cutting_resistance = new Resist({ name: "Сопротивление режущему", codename: "cutting_resistance" });
    const magic_resistance = new Resist({ name: "Сопротивление магии", codename: "magic_resistance" });
    const psi_resistance = new Resist({ name: "Сопротивление ментальным эффектам", codename: "psi_resistance" });
    const phis_resistance = new Resist({ name: "Сопротивление физическим эффектам", codename: "phis_resistance" });

    // Боевые навыки
    const martial_arts = new Skill({ name: "Боевые искусства", codename: "martial_arts" });
    const knife = new Skill({ name: "Ножевой бой", codename: "knife" });
    const short_blades = new Skill({ name: "Короткие клинки", codename: "short_blades" });
    const long_blades = new Skill({ name: "Длинные клинки", codename: "long_blades" });
    const mace_and_flail = new Skill({ name: "Булава и цеп", codename: "mace_and_flail" });
    const axes = new Skill({ name: "Секиры", codename: "axes" });
    const pole = new Skill({ name: "Древковое", codename: "pole" });
    const throws_and_slings = new Skill({ name: "Броски и праща", codename: "throws_and_slings" });
    const exotic_weapons = new Skill({ name: "Экзотическое оружие", codename: "exotic_weapons" });
    const horse_fight = new Skill({ name: "Конный бой", codename: "horse_fight" });
    const critical_hit = new Skill({ name: "Критический удар", codename: "critical_hit" });
    const dual_wield = new Skill({ name: "Два оружия", codename: "dual_wield" });
    const attack_in_flight = new Skill({ name: "Атака в полете", codename: "attack_in_flight" });
    const ninjutsu = new Skill({ name: "Ниндзюцу", codename: "ninjutsu" });
    const bow = new Skill({ name: "Лук", codename: "bow" });
    const crossbow = new Skill({ name: "Арбалет", codename: "crossbow" });
    const firearm = new Skill({ name: "Огнестрельное", codename: "firearm" });
    const heavy_weapons = new Skill({ name: "Тяжелое оружие", codename: "heavy_weapons" });
    const shield = new Skill({ name: "Щит", codename: "shield" });
    const parry = new Skill({ name: "Парирование", codename: "parry" });
    const evasion = new Skill({ name: "Уклонение", codename: "evasion" });
    const light_armor = new Skill({ name: "Легкая броня", codename: "light_armor" });
    const heavy_armor = new Skill({ name: "Тяжелая броня", codename: "heavy_armor" });
    const unarmored_combat = new Skill({ name: "Бездоспешный бой", codename: "unarmored_combat" });

    // Физические навыки
    const swimming = new Skill({ name: "Плавание", codename: "swimming" });
    const climbing = new Skill({ name: "Скалолазание", codename: "climbing" });
    const acrobatics = new Skill({ name: "Акробатика", codename: "acrobatics" });
    const athletics = new Skill({ name: "Атлетика", codename: "athletics" });
    const stealth = new Skill({ name: "Скрытность", codename: "stealth" });
    const scouting = new Skill({ name: "Разведка", codename: "scouting" });
    const augmentations = new Skill({ name: "Аугментации", codename: "augmentations" });

    // Социальные навыки
    const resolve = new Skill({ name: "Решительность", codename: "resolve" });
    const intimidation = new Skill({ name: "Запугивание", codename: "intimidation" });
    const bluff = new Skill({ name: "Блеф", codename: "bluff" });
    const diplomacy = new Skill({ name: "Дипломатия", codename: "diplomacy" });
    const manipulation = new Skill({ name: "Манипулирование", codename: "manipulation" });
    const seduction = new Skill({ name: "Соблазнение", codename: "seduction" });
    const psychology = new Skill({ name: "Психология", codename: "psychology" });

    // Интеллектуальные навыки
    const performance = new Skill({ name: "Исполнение", codename: "performance" });
    const investigation = new Skill({ name: "Расследование", codename: "investigation" });
    const medicine = new Skill({ name: "Медицина", codename: "medicine" });
    const knowledge = new Skill({ name: "Знание", codename: "knowledge" });
    const trade = new Skill({ name: "Торговля", codename: "trade" });
    const concentration = new Skill({ name: "Концентрация", codename: "concentration" });
    const artifacts = new Skill({ name: "Артефакты", codename: "artifacts" });
    const tactics = new Skill({ name: "Тактика", codename: "tactics" });

    // Воровские навыки
    const safecracker = new Skill({ name: "Медвежатник", codename: "safecracker" });
    const steal = new Skill({ name: "Кража", codename: "steal" });
    const infomantia = new Skill({ name: "Инфомантия", codename: "infomantia" });
    const gambling = new Skill({ name: "Азартные игры", codename: "gambling" });
    const piloting = new Skill({ name: "Пилотирование", codename: "piloting" });

    // Ремесленные навыки
    const enchantment = new Skill({ name: "Зачарование", codename: "enchantment" });
    const blacksmithing = new Skill({ name: "Кузнечное дело", codename: "blacksmithing" });
    const leatherworking = new Skill({ name: "Кожевничество", codename: "leatherworking" });
    const woodworking = new Skill({ name: "Столярное дело", codename: "woodworking" });
    const jewelry_making = new Skill({ name: "Ювелирное дело", codename: "jewelry_making" });
    const cooking = new Skill({ name: "Поварское дело", codename: "cooking" });
    const animal_training = new Skill({ name: "Дрессировка животных", codename: "animal_training" });
    const farming = new Skill({ name: "Фермерство", codename: "farming" });
    const sex = new Skill({ name: "Секс", codename: "sex" });

    // Специализированные навыки
    const traps = new Skill({ name: "Ловушки", codename: "traps" });
    const alchemy = new Skill({ name: "Алхимия", codename: "alchemy" });
    const rewriting_the_scrolls = new Skill({ name: "Переписывание свитков", codename: "rewriting_the_scrolls" });
    const herbology = new Skill({ name: "Гербология", codename: "herbology" });
    const resource_extraction = new Skill({ name: "Добыча ресурсов", codename: "resource_extraction" });
    const hunting = new Skill({ name: "Охота", codename: "hunting" });
    const cartography = new Skill({ name: "Картография", codename: "cartography" });

    // Магические навыки
    const biomancy = new Skill({ name: "Биомантия", codename: "biomancy" });
    const cryptomagic = new Skill({ name: "Криптомагия", codename: "cryptomagic" });
    const white_magic = new Skill({ name: "Белая магия", codename: "white_magic" });
    const psionics = new Skill({ name: "Псионика", codename: "psionics" });
    const black_magic = new Skill({ name: "Черная магия", codename: "black_magic" });
    const wild_magic = new Skill({ name: "Дикая магия", codename: "wild_magic" });

    // Технические навыки
    const gunsmith = new Skill({ name: "Оружейник", codename: "gunsmith" });
    const mechanics = new Skill({ name: "Механика", codename: "mechanics" });
    const electrics = new Skill({ name: "Электрика", codename: "electrics" });
    const metallurgy = new Skill({ name: "Металлургия", codename: "metallurgy" });
    const implants = new Skill({ name: "Импланты", codename: "implants" });

    // Специальные навыки (спецнавыки)
    const tough_skin = new Skill({ name: "Прочная шкура", codename: "tough_skin" });
    const quick_reaction = new Skill({ name: "Быстрая реакция", codename: "quick_reaction" });
    const sharp_eye = new Skill({ name: "Острый глаз", codename: "sharp_eye" });
    const powerful_magic = new Skill({ name: "Мощная магия", codename: "powerful_magic" });
    const power_of_the_mind = new Skill({ name: "Сила Разума", codename: "power_of_the_mind" });
    const power_of_charisma = new Skill({ name: "Сила харизмы", codename: "power_of_charisma" });
    const steel_fortitude = new Skill({ name: "Стальная стойкость", codename: "steel_fortitude" });
    const style_icon = new Skill({ name: "Икона стиля", codename: "style_icon" });

    // Коллекции для удобного доступа
    const characteristics = { 
        constitution, 
        agility, 
        perception, 
        gift, 
        intelligence, 
        empathy, 
        psyche, 
        appearance 
    };

    const resists = { 
        fire_resistance, 
        cold_resistance, 
        electricity_resistance, 
        poison_resistance, 
        acid_resistance, 
        crushing_resistance, 
        piercing_resistance, 
        cutting_resistance, 
        magic_resistance, 
        psi_resistance, 
        phis_resistance 
    };

    const skills = { 
        // Специальные навыки
        tough_skin, 
        quick_reaction, 
        sharp_eye, 
        powerful_magic, 
        power_of_the_mind, 
        power_of_charisma, 
        steel_fortitude, 
        style_icon,
        
        // Боевые навыки
        martial_arts, 
        knife, 
        short_blades, 
        long_blades, 
        mace_and_flail, 
        axes, 
        pole, 
        throws_and_slings, 
        exotic_weapons, 
        horse_fight, 
        critical_hit, 
        dual_wield, 
        attack_in_flight, 
        ninjutsu, 
        bow, 
        crossbow, 
        firearm, 
        heavy_weapons, 
        shield, 
        parry, 
        evasion, 
        light_armor, 
        heavy_armor, 
        unarmored_combat,
        
        // Физические навыки
        swimming, 
        climbing, 
        acrobatics, 
        athletics, 
        stealth, 
        scouting, 
        augmentations,
        
        // Социальные навыки
        resolve, 
        intimidation, 
        bluff, 
        diplomacy, 
        manipulation, 
        seduction, 
        psychology,
        
        // Интеллектуальные навыки
        performance, 
        investigation, 
        medicine, 
        knowledge, 
        trade, 
        concentration, 
        artifacts, 
        tactics,
        
        // Воровские навыки
        safecracker, 
        steal, 
        infomantia, 
        gambling, 
        piloting,
        
        // Ремесленные навыки
        enchantment, 
        blacksmithing, 
        leatherworking, 
        woodworking, 
        jewelry_making, 
        cooking, 
        animal_training, 
        farming, 
        sex,
        
        // Специализированные навыки
        traps, 
        alchemy, 
        rewriting_the_scrolls, 
        herbology, 
        resource_extraction, 
        hunting, 
        cartography,
        
        // Магические навыки
        biomancy, 
        cryptomagic, 
        white_magic, 
        psionics, 
        black_magic, 
        wild_magic,
        
        // Технические навыки
        gunsmith, 
        mechanics, 
        electrics, 
        metallurgy, 
        implants 
    };

    const constants = {
        // базовый шанс попадания
        attack_base: 60,
        // бонус к защите при блоке щитом
        shield_bonus: 20,
        // бонус к защите при парированием оружием
        parry_bonus: 10,
    }

    return {
        characteristics,
        resists,
        skills,
        constants
    };
}