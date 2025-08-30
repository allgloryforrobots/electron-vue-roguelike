interface IStatOptions {
    name: string;
    codename: string;
    icon: string;
}

class Stat {
    name: string;
    codename: string;
    icon: string;
    // значения без модификаторов, изменяется только прокачкой
    self_value = 0;
    // временные статусы
    temp_modifiers = 0;
    // бонусы или штрафы от экипировки (надеть/снять)
    equip_modifiers = 0;
    

    constructor(options: IStatOptions) {
        this.name = options.name;
        this.codename = options.codename;
        this.icon = options.icon;
    }

    changeSelfValue(modifier: number) {
        this.self_value += modifier;
    }

    changeTempModifier(modifier: number) {
        this.temp_modifiers += modifier;
    }

    changeEquipModifier(modifier: number) {
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

export class Skill extends Stat {
    constructor(options: IStatOptions) {
        super(options);
    }
}

class Resist extends Stat {
    constructor(options: IStatOptions) {
        super(options);
    }
}

export type GenerateStatsReturnType = ReturnType<typeof generateStats>;

export function generateStats() {
    // Характеристики
    const constitution = new Characteristic({ name: "Телосложение", codename: "constitution", icon: "fa-heart-pulse" });
    const agility = new Characteristic({ name: "Проворство", codename: "agility", icon: "fa-person-running" });
    const perception = new Characteristic({ name: "Восприятие", codename: "perception", icon: "fa-eye" });
    const gift = new Characteristic({ name: "Дар", codename: "gift", icon: "fa-wand-magic-sparkles" });
    const intelligence = new Characteristic({ name: "Интеллект", codename: "intelligence", icon: "fa-brain" });
    const empathy = new Characteristic({ name: "Эмпатия", codename: "empathy", icon: "fa-hands-holding-heart" });
    const psyche = new Characteristic({ name: "Психика", codename: "psyche", icon: "fa-head-side-brain" });
    const appearance = new Characteristic({ name: "Внешность", codename: "appearance", icon: "fa-face-smile" });

    // Второстепенные характеристики
    const combat_capability = new Characteristic({ name: "Боеспособность", codename: "combat_capability", icon: "fa-boxing-glove" });
    const sanity = new Characteristic({ name: "Рассудок", codename: "sanity", icon: "fa-head-side-virus" });
    const energy = new Characteristic({ name: "Энергия", codename: "energy", icon: "fa-bolt" });
    const mana = new Characteristic({ name: "Мана", codename: "mana", icon: "fa-fire-flame-curved" });
    const actionPoints = new Characteristic({ name: "Очки действия", codename: "actionPoints", icon: "fa-hourglass-half" });
    const rangeOfVision = new Characteristic({ name: "Дальность зрения", codename: "rangeOfVision", icon: "fa-binoculars" });
    const hearingRange = new Characteristic({ name: "Дальность слуха", codename: "hearingRange", icon: "fa-ear-listen" });

    // Сопротивления
    const fire_resistance = new Resist({ name: "Сопротивление огню", codename: "fire_resistance", icon: "fa-fire" });
    const cold_resistance = new Resist({ name: "Сопротивление холоду", codename: "cold_resistance", icon: "fa-snowflake" });
    const electricity_resistance = new Resist({ name: "Сопротивление электричеству", codename: "electricity_resistance", icon: "fa-bolt-lightning" });
    const poison_resistance = new Resist({ name: "Сопротивление яду", codename: "poison_resistance", icon: "fa-skull-crossbones" });
    const acid_resistance = new Resist({ name: "Сопротивление кислоте", codename: "acid_resistance", icon: "fa-flask" });
    const crushing_resistance = new Resist({ name: "Сопротивление дробящему", codename: "crushing_resistance", icon: "fa-hammer" });
    const piercing_resistance = new Resist({ name: "Сопротивление колющему", codename: "piercing_resistance", icon: "fa-arrow-right" });
    const cutting_resistance = new Resist({ name: "Сопротивление режущему", codename: "cutting_resistance", icon: "fa-scissors" });
    const magic_resistance = new Resist({ name: "Сопротивление магии", codename: "magic_resistance", icon: "fa-hand-sparkles" });
    const psi_resistance = new Resist({ name: "Сопротивление ментальным эффектам", codename: "psi_resistance", icon: "fa-mind-share" });
    const phis_resistance = new Resist({ name: "Сопротивление физическим эффектам", codename: "phis_resistance", icon: "fa-shield-halved" });

    // Боевые навыки
    const martial_arts = new Skill({ name: "Боевые искусства", codename: "martial_arts", icon: "fa-hand-fist" });
    const knife = new Skill({ name: "Ножевой бой", codename: "knife", icon: "fa-knife" });
    const short_blades = new Skill({ name: "Короткие клинки", codename: "short_blades", icon: "fa-sword-laser" });
    const long_blades = new Skill({ name: "Длинные клинки", codename: "long_blades", icon: "fa-sword" });
    const mace_and_flail = new Skill({ name: "Булава и цеп", codename: "mace_and_flail", icon: "fa-mace" });
    const axes = new Skill({ name: "Секиры", codename: "axes", icon: "fa-axe" });
    const pole = new Skill({ name: "Древковое", codename: "pole", icon: "fa-staff" });
    const throws_and_slings = new Skill({ name: "Броски и праща", codename: "throws_and_slings", icon: "fa-baseball" });
    const exotic_weapons = new Skill({ name: "Экзотическое оружие", codename: "exotic_weapons", icon: "fa-star" });
    const horse_fight = new Skill({ name: "Конный бой", codename: "horse_fight", icon: "fa-horse" });
    const critical_hit = new Skill({ name: "Критический удар", codename: "critical_hit", icon: "fa-crosshairs" });
    const dual_wield = new Skill({ name: "Два оружия", codename: "dual_wield", icon: "fa-swords" });
    const attack_in_flight = new Skill({ name: "Атака в полете", codename: "attack_in_flight", icon: "fa-dove" });
    const ninjutsu = new Skill({ name: "Ниндзюцу", codename: "ninjutsu", icon: "fa-user-ninja" });
    const bow = new Skill({ name: "Лук", codename: "bow", icon: "fa-bow-arrow" });
    const crossbow = new Skill({ name: "Арбалет", codename: "crossbow", icon: "fa-crosshairs" });
    const firearm = new Skill({ name: "Огнестрельное", codename: "firearm", icon: "fa-gun" });
    const heavy_weapons = new Skill({ name: "Тяжелое оружие", codename: "heavy_weapons", icon: "fa-explosion" });
    const shield = new Skill({ name: "Щит", codename: "shield", icon: "fa-shield" });
    const parry = new Skill({ name: "Парирование", codename: "parry", icon: "fa-shield-blank" });
    const evasion = new Skill({ name: "Уклонение", codename: "evasion", icon: "fa-person-running" });
    const light_armor = new Skill({ name: "Легкая броня", codename: "light_armor", icon: "fa-vest" });
    const heavy_armor = new Skill({ name: "Тяжелая броня", codename: "heavy_armor", icon: "fa-helmet-battle" });
    const unarmored_combat = new Skill({ name: "Бездоспешный бой", codename: "unarmored_combat", icon: "fa-hand-fist" });
    const wand = new Skill({ name: "Волшебные палочки", codename: "wand", icon: "fa-wand-magic" });

    // Физические навыки
    const swimming = new Skill({ name: "Плавание", codename: "swimming", icon: "fa-person-swimming" });
    const climbing = new Skill({ name: "Скалолазание", codename: "climbing", icon: "fa-mountain" });
    const acrobatics = new Skill({ name: "Акробатика", codename: "acrobatics", icon: "fa-person-dots-from-line" });
    const athletics = new Skill({ name: "Атлетика", codename: "athletics", icon: "fa-dumbbell" });
    const stealth = new Skill({ name: "Скрытность", codename: "stealth", icon: "fa-user-secret" });
    const scouting = new Skill({ name: "Разведка", codename: "scouting", icon: "fa-binoculars" });
    const augmentations = new Skill({ name: "Аугментации", codename: "augmentations", icon: "fa-microchip" });

    // Социальные навыки
    const resolve = new Skill({ name: "Решительность", codename: "resolve", icon: "fa-shield-heart" });
    const intimidation = new Skill({ name: "Запугивание", codename: "intimidation", icon: "fa-face-angry" });
    const bluff = new Skill({ name: "Блеф", codename: "bluff", icon: "fa-theater-masks" });
    const diplomacy = new Skill({ name: "Дипломатия", codename: "diplomacy", icon: "fa-handshake" });
    const manipulation = new Skill({ name: "Манипулирование", codename: "manipulation", icon: "fa-chess" });
    const seduction = new Skill({ name: "Соблазнение", codename: "seduction", icon: "fa-lips" });
    const psychology = new Skill({ name: "Психология", codename: "psychology", icon: "fa-head-side-heart" });

    // Интеллектуальные навыки
    const performance = new Skill({ name: "Исполнение", codename: "performance", icon: "fa-masks-theater" });
    const investigation = new Skill({ name: "Расследование", codename: "investigation", icon: "fa-magnifying-glass" });
    const medicine = new Skill({ name: "Медицина", codename: "medicine", icon: "fa-briefcase-medical" });
    const knowledge = new Skill({ name: "Знание", codename: "knowledge", icon: "fa-book" });
    const trade = new Skill({ name: "Торговля", codename: "trade", icon: "fa-coins" });
    const concentration = new Skill({ name: "Концентрация", codename: "concentration", icon: "fa-dharmachakra" });
    const artifacts = new Skill({ name: "Артефакты", codename: "artifacts", icon: "fa-ring" });
    const tactics = new Skill({ name: "Тактика", codename: "tactics", icon: "fa-chess-board" });

    // Воровские навыки
    const safecracker = new Skill({ name: "Медвежатник", codename: "safecracker", icon: "fa-lock" });
    const steal = new Skill({ name: "Кража", codename: "steal", icon: "fa-hand-back-fist" });
    const infomantia = new Skill({ name: "Инфомантия", codename: "infomantia", icon: "fa-network-wired" });
    const gambling = new Skill({ name: "Азартные игры", codename: "gambling", icon: "fa-dice" });
    const piloting = new Skill({ name: "Пилотирование", codename: "piloting", icon: "fa-jet-fighter" });

    // Ремесленные навыки
    const enchantment = new Skill({ name: "Зачарование", codename: "enchantment", icon: "fa-wand-sparkles" });
    const blacksmithing = new Skill({ name: "Кузнечное дело", codename: "blacksmithing", icon: "fa-hammer" });
    const leatherworking = new Skill({ name: "Кожевничество", codename: "leatherworking", icon: "fa-leather" });
    const woodworking = new Skill({ name: "Столярное дело", codename: "woodworking", icon: "fa-tree" });
    const jewelry_making = new Skill({ name: "Ювелирное дело", codename: "jewelry_making", icon: "fa-gem" });
    const cooking = new Skill({ name: "Поварское дело", codename: "cooking", icon: "fa-utensils" });
    const animal_training = new Skill({ name: "Дрессировка животных", codename: "animal_training", icon: "fa-paw" });
    const farming = new Skill({ name: "Фермерство", codename: "farming", icon: "fa-wheat-alt" });
    const sex = new Skill({ name: "Секс", codename: "sex", icon: "fa-heart" });

    // Специализированные навыки
    const traps = new Skill({ name: "Ловушки", codename: "traps", icon: "fa-trap" });
    const alchemy = new Skill({ name: "Алхимия", codename: "alchemy", icon: "fa-flask-potion" });
    const rewriting_the_scrolls = new Skill({ name: "Переписывание свитков", codename: "rewriting_the_scrolls", icon: "fa-scroll" });
    const herbology = new Skill({ name: "Гербология", codename: "herbology", icon: "fa-leaf" });
    const resource_extraction = new Skill({ name: "Добыча ресурсов", codename: "resource_extraction", icon: "fa-pickaxe" });
    const hunting = new Skill({ name: "Охота", codename: "hunting", icon: "fa-crosshairs" });
    const cartography = new Skill({ name: "Картография", codename: "cartography", icon: "fa-map" });

    // Магические навыки
    const biomancy = new Skill({ name: "Биомантия", codename: "biomancy", icon: "fa-dna" });
    const cryptomagic = new Skill({ name: "Криптомагия", codename: "cryptomagic", icon: "fa-lock" });
    const white_magic = new Skill({ name: "Белая магия", codename: "white_magic", icon: "fa-dove" });
    const psionics = new Skill({ name: "Псионика", codename: "psionics", icon: "fa-brain-circuit" });
    const black_magic = new Skill({ name: "Черная магия", codename: "black_magic", icon: "fa-skull" });
    const wild_magic = new Skill({ name: "Дикая магия", codename: "wild_magic", icon: "fa-wind" });

    // Технические навыки
    const gunsmith = new Skill({ name: "Оружейник", codename: "gunsmith", icon: "fa-screwdriver-wrench" });
    const mechanics = new Skill({ name: "Механика", codename: "mechanics", icon: "fa-gears" });
    const electrics = new Skill({ name: "Электрика", codename: "electrics", icon: "fa-bolt" });
    const metallurgy = new Skill({ name: "Металлургия", codename: "metallurgy", icon: "fa-industry" });
    const implants = new Skill({ name: "Импланты", codename: "implants", icon: "fa-microchip" });

    // Специальные навыки (спецнавыки)
    const tough_skin = new Skill({ name: "Прочная шкура", codename: "tough_skin", icon: "fa-shield-alt" });
    const quick_reaction = new Skill({ name: "Быстрая реакция", codename: "quick_reaction", icon: "fa-bolt" });
    const sharp_eye = new Skill({ name: "Острый глаз", codename: "sharp_eye", icon: "fa-eye" });
    const powerful_magic = new Skill({ name: "Мощная магия", codename: "powerful_magic", icon: "fa-fire-flame" });
    const power_of_the_mind = new Skill({ name: "Сила Разума", codename: "power_of_the_mind", icon: "fa-brain" });
    const power_of_charisma = new Skill({ name: "Сила харизмы", codename: "power_of_charisma", icon: "fa-crown" });
    const steel_fortitude = new Skill({ name: "Стальная стойкость", codename: "steel_fortitude", icon: "fa-shield-virus" });
    const style_icon = new Skill({ name: "Икона стиля", codename: "style_icon", icon: "fa-star" });

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
        wand,
        
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

    const skillsByGroups = {
        special: {
            name: "Специальные навыки",
            skills: {
                tough_skin,
                quick_reaction,
                sharp_eye,
                powerful_magic,
                power_of_the_mind,
                power_of_charisma,
                steel_fortitude,
                style_icon
            }
        },
        closeCombat: {
            name: "Ближний бой",
            skills: {
                martial_arts,
                knife,
                short_blades,
                long_blades,
                mace_and_flail,
                axes,
                pole,
                throws_and_slings,
                bow,
                crossbow,
                firearm,
                wand
            }
        },
        rangeCombat: {
            name: "Дальний бой",
            skills: {
                throws_and_slings,
                bow,
                crossbow,
                firearm,
                wand
            }
        },
        finesse: {
            name: "Искусность",
            skills: {
                horse_fight,
                critical_hit,
                dual_wield,
                attack_in_flight,
                ninjutsu,
                heavy_weapons,
                exotic_weapons
            }
        },
        defence: {
            name: "Защита",
            skills: {
                shield,
                parry,
                evasion,
                light_armor,
                heavy_armor,
                unarmored_combat,
            }
        },
        physical: {
            name: "Физические навыки",
            skills: {
                swimming,
                climbing,
                acrobatics,
                athletics,
                stealth,
                scouting,
                augmentations
            }
        },
        social: {
            name: "Социальные навыки",
            skills: {
                resolve,
                intimidation,
                bluff,
                diplomacy,
                manipulation,
                seduction,
                psychology
            }
        },
        intellectual: {
            name: "Интеллектуальные навыки",
            skills: {
                performance,
                investigation,
                medicine,
                knowledge,
                trade,
                concentration,
                artifacts,
                tactics
            }
        },
        thieving: {
            name: "Воровские навыки",
            skills: {
                safecracker,
                steal,
                infomantia,
                gambling,
                piloting
            }
        },
        crafting: {
            name: "Ремесленные навыки",
            skills: {
                enchantment,
                blacksmithing,
                leatherworking,
                woodworking,
                jewelry_making,
                cooking,
                animal_training,
                farming,
                sex
            }
        },
        specialized: {
            name: "Специализированные навыки",
            skills: {
                traps,
                alchemy,
                rewriting_the_scrolls,
                herbology,
                resource_extraction,
                hunting,
                cartography
            }
        },
        magical: {
            name: "Магические навыки",
            skills: {
                biomancy,
                cryptomagic,
                white_magic,
                psionics,
                black_magic,
                wild_magic
            }
        },
        technical: {
            name: "Технические навыки",
            skills: {
                gunsmith,
                mechanics,
                electrics,
                metallurgy,
                implants
            }
        }
    };

    const constants = {
        // базовый шанс попадания
        attackBase: 60,
        // бонус к защите при блоке щитом
        shieldBonus: 20,
        // бонус к защите при парированием оружием
        parryBonus: 10,
        // сколько клеток может пройти (либо развернуться на 90) бесплатно
        movePoints: 2,
        // база под любые целочисленные значения (HP, MP, энергия)
        baseValueModifier: 3,
        // энергии тратиться на атаку тяжелым оружием
        heavyWeaponAttackEnergyCost: 0.5,
        // энергии тратиться на атаку оружием типа одноручного меча
        middleWeaponAttackEnergyCost: 0.25,
        // энергии тратиться на атаку кинжалом, кулаками
        lightWeaponAttackEnergyCost: 0.1,
        // энергии тратиться на прохождение 1 клетки в тяжелой броне
        heavyArmorMovementEnergyCost: 0.1,
        // дальность зрения днем
        rangeOfVisionDay: 12,
        // дальность зрения ночью
        rangeOfVisionNight: 5,
    }

    const secondaryCharacteristics = {
        combat_capability,
        sanity,
        energy,
        mana,
        actionPoints,
        rangeOfVision,
        hearingRange,
    }

    return {
        characteristics,
        secondaryCharacteristics,
        resists,
        skills,
        constants,
        skillsByGroups
    };
}