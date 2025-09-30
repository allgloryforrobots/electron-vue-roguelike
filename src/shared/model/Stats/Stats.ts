import { Property } from "@/shared/model/Property/Property";

export class Stat extends Property {
	constructor() {
		super();
  }
}

export class Characteristic extends Stat {
  constructor() {
	super();
  }
}

export class Skill extends Stat {
  constructor() {
      super();
  }
}

export class Resist extends Stat {
  constructor() {
      super();
  }
}

// Характеристики
export class Constitution extends Characteristic {
  static readonly name = "Телосложение";
  static readonly codename = "constitution";
  static readonly icon = "fa-heart-pulse";
}

export class Agility extends Characteristic {
  static readonly name = "Проворство";
  static readonly codename = "agility";
  static readonly icon = "fa-person-running";
}

export class Perception extends Characteristic {
  static readonly name = "Восприятие";
  static readonly codename = "perception";
  static readonly icon = "fa-eye";
}

export class Gift extends Characteristic {
  static readonly name = "Дар";
  static readonly codename = "gift";
  static readonly icon = "fa-wand-magic-sparkles";
}

export class Intelligence extends Characteristic {
  static readonly name = "Интеллект";
  static readonly codename = "intelligence";
  static readonly icon = "fa-brain";
}

export class Empathy extends Characteristic {
  static readonly name = "Эмпатия";
  static readonly codename = "empathy";
  static readonly icon = "fa-hands-holding-heart";
}

export class Psyche extends Characteristic {
  static readonly name = "Психика";
  static readonly codename = "psyche";
  static readonly icon = "fa-head-side-brain";
}

export class Appearance extends Characteristic {
  static readonly name = "Внешность";
  static readonly codename = "appearance";
  static readonly icon = "fa-face-smile";
}


// Второстепенные характеристики
export class CombatCapability extends Characteristic {
  static readonly name = "Боеспособность";
  static readonly codename = "combat_capability";
  static readonly icon = "fa-boxing-glove";
}

export class Sanity extends Characteristic {
  static readonly name = "Рассудок";
  static readonly codename = "sanity";
  static readonly icon = "fa-head-side-virus";
}

export class Energy extends Characteristic {
  static readonly name = "Энергия";
  static readonly codename = "energy";
  static readonly icon = "fa-bolt";
}

export class Mana extends Characteristic {
  static readonly name = "Мана";
  static readonly codename = "mana";
  static readonly icon = "fa-fire-flame-curved";
}

export class ActionPoints extends Characteristic {
  static readonly name = "Очки действия";
  static readonly codename = "actionPoints";
  static readonly icon = "fa-hourglass-half";
}

export class RangeOfVision extends Characteristic {
  static readonly name = "Дальность зрения";
  static readonly codename = "rangeOfVision";
  static readonly icon = "fa-telescope";
}

export class HearingRange extends Characteristic {
  static readonly name = "Дальность слуха";
  static readonly codename = "hearingRange";
  static readonly icon = "fa-ear-listen";
}

// Сопротивления
export class FireResistance extends Resist {
  static readonly name = "Сопротивление огню";
  static readonly codename = "fire_resistance";
  static readonly icon = "fa-fire";
}

export class ColdResistance extends Resist {
  static readonly name = "Сопротивление холоду";
  static readonly codename = "cold_resistance";
  static readonly icon = "fa-snowflake";
}

export class ElectricityResistance extends Resist {
  static readonly name = "Сопротивление электричеству";
  static readonly codename = "electricity_resistance";
  static readonly icon = "fa-bolt-lightning";
}

export class PoisonResistance extends Resist {
  static readonly name = "Сопротивление яду";
  static readonly codename = "poison_resistance";
  static readonly icon = "fa-skull-crossbones";
}

export class AcidResistance extends Resist {
  static readonly name = "Сопротивление кислоте";
  static readonly codename = "acid_resistance";
  static readonly icon = "fa-flask";
}

export class CrushingResistance extends Resist {
  static readonly name = "Сопротивление дробящему";
  static readonly codename = "crushing_resistance";
  static readonly icon = "fa-hammer";
}

export class PiercingResistance extends Resist {
  static readonly name = "Сопротивление колющему";
  static readonly codename = "piercing_resistance";
  static readonly icon = "fa-arrow-right";
}

export class CuttingResistance extends Resist {
  static readonly name = "Сопротивление режущему";
  static readonly codename = "cutting_resistance";
  static readonly icon = "fa-scissors";
}

export class MagicResistance extends Resist {
  static readonly name = "Сопротивление магии";
  static readonly codename = "magic_resistance";
  static readonly icon = "fa-hand-sparkles";
}

export class PsiResistance extends Resist {
  static readonly name = "Сопротивление ментальным эффектам";
  static readonly codename = "psi_resistance";
  static readonly icon = "fa-mind-share";
}

export class PhysResistance extends Resist {
  static readonly name = "Сопротивление физическим эффектам";
  static readonly codename = "phis_resistance";
  static readonly icon = "fa-shield-halved";
}

// Боевые навыки
export class MartialArts extends Skill {
  static readonly name = "Боевые искусства";
  static readonly codename = "martial_arts";
  static readonly icon = "fa-hand-fist";
}

export class Knife extends Skill {
  static readonly name = "Ножевой бой";
  static readonly codename = "knife";
  static readonly icon = "fa-knife";
}

export class ShortBlades extends Skill {
  static readonly name = "Короткие клинки";
  static readonly codename = "short_blades";
  static readonly icon = "fa-sword-laser";
}

export class LongBlades extends Skill {
  static readonly name = "Длинные клинки";
  static readonly codename = "long_blades";
  static readonly icon = "fa-sword";
}

export class MaceAndFlail extends Skill {
  static readonly name = "Булава и цеп";
  static readonly codename = "mace_and_flail";
  static readonly icon = "fa-mace";
}

export class Axes extends Skill {
  static readonly name = "Секиры";
  static readonly codename = "axes";
  static readonly icon = "fa-axe";
}

export class Pole extends Skill {
  static readonly name = "Древковое";
  static readonly codename = "pole";
  static readonly icon = "fa-staff";
}

export class ThrowsAndSlings extends Skill {
  static readonly name = "Броски и праща";
  static readonly codename = "throws_and_slings";
  static readonly icon = "fa-baseball";
}

export class ExoticWeapons extends Skill {
  static readonly name = "Экзотическое оружие";
  static readonly codename = "exotic_weapons";
  static readonly icon = "fa-khanda";
}

export class HorseFight extends Skill {
  static readonly name = "Конный бой";
  static readonly codename = "horse_fight";
  static readonly icon = "fa-horse";
}

export class CriticalHit extends Skill {
  static readonly name = "Критический удар";
  static readonly codename = "critical_hit";
  static readonly icon = "fa-crosshairs";
}

export class DualWield extends Skill {
  static readonly name = "Два оружия";
  static readonly codename = "dual_wield";
  static readonly icon = "fa-swords";
}

export class AttackInFlight extends Skill {
  static readonly name = "Атака в полете";
  static readonly codename = "attack_in_flight";
  static readonly icon = "fa-dove";
}

export class Ninjutsu extends Skill {
  static readonly name = "Ниндзюцу";
  static readonly codename = "ninjutsu";
  static readonly icon = "fa-user-ninja";
}

export class Bow extends Skill {
  static readonly name = "Лук";
  static readonly codename = "bow";
  static readonly icon = "fa-bow-arrow";
}

export class Crossbow extends Skill {
  static readonly name = "Арбалет";
  static readonly codename = "crossbow";
  static readonly icon = "fa-bullseye-arrow";
}

export class Firearm extends Skill {
  static readonly name = "Огнестрельное";
  static readonly codename = "firearm";
  static readonly icon = "fa-gun";
}

export class HeavyWeapons extends Skill {
  static readonly name = "Тяжелое оружие";
  static readonly codename = "heavy_weapons";
  static readonly icon = "fa-explosion";
}

export class Shield extends Skill {
  static readonly name = "Щит";
  static readonly codename = "shield";
  static readonly icon = "fa-shield-cross";
}

export class Parry extends Skill {
  static readonly name = "Парирование";
  static readonly codename = "parry";
  static readonly icon = "fa-arrow-up-to-arc";
}

export class Evasion extends Skill {
  static readonly name = "Уклонение";
  static readonly codename = "evasion";
  static readonly icon = "fa-person-running-fast";
}

export class LightArmor extends Skill {
  static readonly name = "Легкая броня";
  static readonly codename = "light_armor";
  static readonly icon = "fa-vest";
}

export class HeavyArmor extends Skill {
  static readonly name = "Тяжелая броня";
  static readonly codename = "heavy_armor";
  static readonly icon = "fa-helmet-battle";
}

export class UnarmoredCombat extends Skill {
  static readonly name = "Бездоспешный бой";
  static readonly codename = "unarmored_combat";
  static readonly icon = "fa-transporter-1";
}

export class Wand extends Skill {
  static readonly name = "Волшебные палочки";
  static readonly codename = "wand";
  static readonly icon = "fa-wand-magic";
}

// Физические навыки
export class Swimming extends Skill {
  static readonly name = "Плавание";
  static readonly codename = "swimming";
  static readonly icon = "fa-person-swimming";
}

export class Climbing extends Skill {
  static readonly name = "Скалолазание";
  static readonly codename = "climbing";
  static readonly icon = "fa-mountain";
}

export class Acrobatics extends Skill {
  static readonly name = "Акробатика";
  static readonly codename = "acrobatics";
  static readonly icon = "fa-person-dots-from-line";
}

export class Athletics extends Skill {
  static readonly name = "Атлетика";
  static readonly codename = "athletics";
  static readonly icon = "fa-dumbbell";
}

export class Stealth extends Skill {
  static readonly name = "Скрытность";
  static readonly codename = "stealth";
  static readonly icon = "fa-user-secret";
}

export class Scouting extends Skill {
  static readonly name = "Разведка";
  static readonly codename = "scouting";
  static readonly icon = "fa-binoculars";
}

export class Augmentations extends Skill {
  static readonly name = "Аугментации";
  static readonly codename = "augmentations";
  static readonly icon = "fa-microchip";
}

// Социальные навыки
export class Resolve extends Skill {
  static readonly name = "Решительность";
  static readonly codename = "resolve";
  static readonly icon = "fa-shield-heart";
}

export class Intimidation extends Skill {
  static readonly name = "Запугивание";
  static readonly codename = "intimidation";
  static readonly icon = "fa-face-angry";
}

export class Bluff extends Skill {
  static readonly name = "Блеф";
  static readonly codename = "bluff";
  static readonly icon = "fa-theater-masks";
}

export class Diplomacy extends Skill {
  static readonly name = "Дипломатия";
  static readonly codename = "diplomacy";
  static readonly icon = "fa-handshake";
}

export class Manipulation extends Skill {
  static readonly name = "Манипулирование";
  static readonly codename = "manipulation";
  static readonly icon = "fa-chess";
}

export class Seduction extends Skill {
  static readonly name = "Соблазнение";
  static readonly codename = "seduction";
  static readonly icon = "fa-lips";
}

export class Psychology extends Skill {
  static readonly name = "Психология";
  static readonly codename = "psychology";
  static readonly icon = "fa-head-side-heart";
}

// Интеллектуальные навыки
export class Acting extends Skill {
  static readonly name = "Исполнение";
  static readonly codename = "performance";
  static readonly icon = "fa-masks-theater";
}

export class Investigation extends Skill {
  static readonly name = "Расследование";
  static readonly codename = "investigation";
  static readonly icon = "fa-magnifying-glass";
}

export class Medicine extends Skill {
  static readonly name = "Медицина";
  static readonly codename = "medicine";
  static readonly icon = "fa-briefcase-medical";
}

export class Knowledge extends Skill {
  static readonly name = "Знание";
  static readonly codename = "knowledge";
  static readonly icon = "fa-book";
}

export class Trade extends Skill {
  static readonly name = "Торговля";
  static readonly codename = "trade";
  static readonly icon = "fa-coins";
}

export class Concentration extends Skill {
  static readonly name = "Концентрация";
  static readonly codename = "concentration";
  static readonly icon = "fa-dharmachakra";
}

export class Artifacts extends Skill {
  static readonly name = "Артефакты";
  static readonly codename = "artifacts";
  static readonly icon = "fa-ring";
}

export class Tactics extends Skill {
  static readonly name = "Тактика";
  static readonly codename = "tactics";
  static readonly icon = "fa-chess-board";
}

// Воровские навыки
export class Safecracker extends Skill {
  static readonly name = "Медвежатник";
  static readonly codename = "safecracker";
  static readonly icon = "fa-lock";
}

export class Steal extends Skill {
  static readonly name = "Кража";
  static readonly codename = "steal";
  static readonly icon = "fa-hand-back-fist";
}

export class Infomantia extends Skill {
  static readonly name = "Инфомантия";
  static readonly codename = "infomantia";
  static readonly icon = "fa-network-wired";
}

export class Gambling extends Skill {
  static readonly name = "Азартные игры";
  static readonly codename = "gambling";
  static readonly icon = "fa-dice";
}

export class Piloting extends Skill {
  static readonly name = "Пилотирование";
  static readonly codename = "piloting";
  static readonly icon = "fa-jet-fighter";
}

// Ремесленные навыки
export class Enchantment extends Skill {
  static readonly name = "Зачарование";
  static readonly codename = "enchantment";
  static readonly icon = "fa-wand-sparkles";
}

export class Blacksmithing extends Skill {
  static readonly name = "Кузнечное дело";
  static readonly codename = "blacksmithing";
  static readonly icon = "fa-hammer";
}

export class Leatherworking extends Skill {
  static readonly name = "Кожевничество";
  static readonly codename = "leatherworking";
  static readonly icon = "fa-vest-patches";
}

export class Woodworking extends Skill {
  static readonly name = "Столярное дело";
  static readonly codename = "woodworking";
  static readonly icon = "fa-tree";
}

export class JewelryMaking extends Skill {
  static readonly name = "Ювелирное дело";
  static readonly codename = "jewelry_making";
  static readonly icon = "fa-gem";
}

export class Cooking extends Skill {
  static readonly name = "Поварское дело";
  static readonly codename = "cooking";
  static readonly icon = "fa-utensils";
}

export class AnimalTraining extends Skill {
  static readonly name = "Дрессировка животных";
  static readonly codename = "animal_training";
  static readonly icon = "fa-paw";
}

export class Farming extends Skill {
  static readonly name = "Фермерство";
  static readonly codename = "farming";
  static readonly icon = "fa-wheat-alt";
}

export class Sex extends Skill {
  static readonly name = "Секс";
  static readonly codename = "sex";
  static readonly icon = "fa-heart";
}

// Специализированные навыки
export class Traps extends Skill {
  static readonly name = "Ловушки";
  static readonly codename = "traps";
  static readonly icon = "fa-sensor-triangle-exclamation";
}

export class Alchemy extends Skill {
  static readonly name = "Алхимия";
  static readonly codename = "alchemy";
  static readonly icon = "fa-flask-potion";
}

export class RewritingTheScrolls extends Skill {
  static readonly name = "Переписывание свитков";
  static readonly codename = "rewriting_the_scrolls";
  static readonly icon = "fa-scroll";
}

export class Herbology extends Skill {
  static readonly name = "Гербология";
  static readonly codename = "herbology";
  static readonly icon = "fa-leaf";
}

export class ResourceExtraction extends Skill {
  static readonly name = "Добыча ресурсов";
  static readonly codename = "resource_extraction";
  static readonly icon = "fa-pickaxe";
}

export class Hunting extends Skill {
  static readonly name = "Охота";
  static readonly codename = "hunting";
  static readonly icon = "fa-democrat";
}

export class Cartography extends Skill {
  static readonly name = "Картография";
  static readonly codename = "cartography";
  static readonly icon = "fa-map";
}

// Магические навыки
export class Biomancy extends Skill {
  static readonly name = "Биомантия";
  static readonly codename = "biomancy";
  static readonly icon = "fa-dna";
}

export class Cryptomagic extends Skill {
  static readonly name = "Криптомагия";
  static readonly codename = "cryptomagic";
  static readonly icon = "fa-lock";
}

export class WhiteMagic extends Skill {
  static readonly name = "Белая магия";
  static readonly codename = "white_magic";
  static readonly icon = "fa-dove";
}

export class Psionics extends Skill {
  static readonly name = "Псионика";
  static readonly codename = "psionics";
  static readonly icon = "fa-brain-circuit";
}

export class BlackMagic extends Skill {
  static readonly name = "Черная магия";
  static readonly codename = "black_magic";
  static readonly icon = "fa-skull";
}

export class WildMagic extends Skill {
  static readonly name = "Дикая магия";
  static readonly codename = "wild_magic";
  static readonly icon = "fa-wind";
}

// Технические навыки
export class Gunsmith extends Skill {
  static readonly name = "Оружейник";
  static readonly codename = "gunsmith";
  static readonly icon = "fa-screwdriver-wrench";
}

export class Mechanics extends Skill {
  static readonly name = "Механика";
  static readonly codename = "mechanics";
  static readonly icon = "fa-gears";
}

export class Electrics extends Skill {
  static readonly name = "Электрика";
  static readonly codename = "electrics";
  static readonly icon = "fa-plug";
}

export class Metallurgy extends Skill {
  static readonly name = "Металлургия";
  static readonly codename = "metallurgy";
  static readonly icon = "fa-industry";
}

export class Implants extends Skill {
  static readonly name = "Импланты";
  static readonly codename = "implants";
  static readonly icon = "fa-microchip-ai";
}

export class Analysis extends Skill {
  static readonly name = "Анализ";
  static readonly codename = "analysis";
  static readonly icon = "fa-chart-line";
}

export class Artistry extends Skill {
  static readonly name = "Искусность";
  static readonly codename = "artistry";
  static readonly icon = "fa-palette";
}

// Специальные навыки (спецнавыки)
export class ToughSkin extends Skill {
  static readonly name = "Прочная шкура";
  static readonly codename = "tough_skin";
  static readonly icon = "fa-shield-alt";
}

export class QuickReaction extends Skill {
  static readonly name = "Быстрая реакция";
  static readonly codename = "quick_reaction";
  static readonly icon = "fa-cat";
}

export class SharpEye extends Skill {
  static readonly name = "Острый глаз";
  static readonly codename = "sharp_eye";
  static readonly icon = "fa-arrows-to-eye";
}

export class PowerfulMagic extends Skill {
  static readonly name = "Мощная магия";
  static readonly codename = "powerful_magic";
  static readonly icon = "fa-fire-flame";
}

export class PowerOfTheMind extends Skill {
  static readonly name = "Сила Разума";
  static readonly codename = "power_of_the_mind";
  static readonly icon = "fa-head-side";
}

export class PowerOfCharisma extends Skill {
  static readonly name = "Сила харизмы";
  static readonly codename = "power_of_charisma";
  static readonly icon = "fa-crown";
}

export class SteelFortitude extends Skill {
  static readonly name = "Стальная стойкость";
  static readonly codename = "steel_fortitude";
  static readonly icon = "fa-shield-virus";
}

export class StyleIcon extends Skill {
  static readonly name = "Икона стиля";
  static readonly codename = "style_icon";
  static readonly icon = "fa-star";
}

//     const constants = {
//         // базовый шанс попадания
//         attackBase: 60,
//         // бонус к защите при блоке щитом
//         shieldBonus: 20,
//         // бонус к защите при парированием оружием
//         parryBonus: 10,
//         // сколько клеток может пройти (либо развернуться на 90) бесплатно
//         movePoints: 2,
//         // база под любые целочисленные значения (HP, MP, энергия)
//         baseValueModifier: 3,
//         // энергии тратиться на атаку тяжелым оружием
//         heavyWeaponAttackEnergyCost: 0.5,
//         // энергии тратиться на атаку оружием типа одноручного меча
//         middleWeaponAttackEnergyCost: 0.25,
//         // энергии тратиться на атаку кинжалом, кулаками
//         lightWeaponAttackEnergyCost: 0.1,
//         // энергии тратиться на прохождение 1 клетки в тяжелой броне
//         heavyArmorMovementEnergyCost: 0.1,
//         // дальность зрения днем
//         rangeOfVisionDay: 12,
//         // дальность зрения ночью
//         rangeOfVisionNight: 5,
//     }
