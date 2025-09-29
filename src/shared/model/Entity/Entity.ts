import { AcidResistance, Acrobatics, ActionPoints, Agility, Alchemy, Analysis, AnimalTraining, Appearance, Artifacts, Artistry, Athletics, AttackInFlight, Augmentations, Axes, Biomancy, BlackMagic, Blacksmithing, Bluff, Bow, Cartography, Climbing, ColdResistance, CombatCapability, Concentration, Constitution, Cooking, CriticalHit, Crossbow, CrushingResistance, Cryptomagic, CuttingResistance, Diplomacy, DualWield, ElectricityResistance, Electrics, Empathy, Enchantment, Energy, Evasion, ExoticWeapons, Farming, Firearm, FireResistance, Gambling, Gift, Gunsmith, HearingRange, HeavyArmor, HeavyWeapons, Herbology, HorseFight, Hunting, Implants, Infomantia, Intelligence, Sex, Intimidation, Investigation, JewelryMaking, Knife, Knowledge, Leatherworking, LightArmor, LongBlades, MaceAndFlail, MagicResistance, Mana, Manipulation, MartialArts, Mechanics, Medicine, Metallurgy, Ninjutsu, Parry, Perception, PhysResistance, PiercingResistance, Piloting, PoisonResistance, Pole, PowerfulMagic, PowerOfCharisma, PowerOfTheMind, Psionics, PsiResistance, Psyche, Psychology, QuickReaction, RangeOfVision, Resolve, ResourceExtraction, RewritingTheScrolls, Safecracker, Sanity, Scouting, Seduction, SharpEye, Shield, ShortBlades, Steal, Stealth, SteelFortitude, StyleIcon, Swimming, Tactics, ThrowsAndSlings, ToughSkin, Trade, Traps, UnarmoredCombat, Wand, WhiteMagic, WildMagic, Woodworking, Acting } from "@/entities/Battler/model/Stats";

/** базовый класс для любой Entity */
export class Entity {

}

export enum EntityNames {
  // === Основные характеристики ===
  Constitution = "constitution",
  Agility = "agility",
  Perception = "perception",
  Gift = "gift",
  Intelligence = "intelligence",
  Empathy = "empathy",
  Psyche = "psyche",
  Appearance = "appearance",

  // === Второстепенные характеристики ===
  CombatCapability = "combat_capability",
  Sanity = "sanity",
  Energy = "energy",
  Mana = "mana",
  ActionPoints = "actionPoints",
  RangeOfVision = "rangeOfVision",
  HearingRange = "hearingRange",

  // === Сопротивления ===
  FireResistance = "fire_resistance",
  ColdResistance = "cold_resistance",
  ElectricityResistance = "electricity_resistance",
  PoisonResistance = "poison_resistance",
  AcidResistance = "acid_resistance",
  CrushingResistance = "crushing_resistance",
  PiercingResistance = "piercing_resistance",
  CuttingResistance = "cutting_resistance",
  MagicResistance = "magic_resistance",
  PsiResistance = "psi_resistance",
  PhysResistance = "phys_resistance",

  // === Боевые навыки ===
  MartialArts = "martial_arts",
  Knife = "knife",
  ShortBlades = "short_blades",
  LongBlades = "long_blades",
  MaceAndFlail = "mace_and_flail",
  Axes = "axes",
  Pole = "pole",
  ThrowsAndSlings = "throws_and_slings",
  ExoticWeapons = "exotic_weapons",
  HorseFight = "horse_fight",
  CriticalHit = "critical_hit",
  DualWield = "dual_wield",
  AttackInFlight = "attack_in_flight",
  Ninjutsu = "ninjutsu",
  Bow = "bow",
  Crossbow = "crossbow",
  Firearm = "firearm",
  HeavyWeapons = "heavy_weapons",
  Shield = "shield",
  Parry = "parry",
  Evasion = "evasion",
  LightArmor = "light_armor",
  HeavyArmor = "heavy_armor",
  UnarmoredCombat = "unarmored_combat",
  Wand = "wand",

  // === Физические навыки ===
  Swimming = "swimming",
  Climbing = "climbing",
  Acrobatics = "acrobatics",
  Athletics = "athletics",
  Stealth = "stealth",
  Scouting = "scouting",
  Augmentations = "augmentations",

  // === Социальные навыки ===
  Resolve = "resolve",
  Intimidation = "intimidation",
  Bluff = "bluff",
  Diplomacy = "diplomacy",
  Manipulation = "manipulation",
  Seduction = "seduction",
  Psychology = "psychology",

  // === Интеллектуальные навыки ===
  Acting = "performance",
  Investigation = "investigation",
  Medicine = "medicine",
  Knowledge = "knowledge",
  Trade = "trade",
  Concentration = "concentration",
  Artifacts = "artifacts",
  Tactics = "tactics",

  // === Воровские навыки ===
  Safecracker = "safecracker",
  Steal = "steal",
  Infomantia = "infomantia",
  Gambling = "gambling",
  Piloting = "piloting",

  // === Ремесленные навыки ===
  Enchantment = "enchantment",
  Blacksmithing = "blacksmithing",
  Leatherworking = "leatherworking",
  Woodworking = "woodworking",
  JewelryMaking = "jewelry_making",
  Cooking = "cooking",
  AnimalTraining = "animal_training",
  Farming = "farming",
  Sex = "sex",

  // === Специализированные навыки ===
  Traps = "traps",
  Alchemy = "alchemy",
  RewritingTheScrolls = "rewriting_the_scrolls",
  Herbology = "herbology",
  ResourceExtraction = "resource_extraction",
  Hunting = "hunting",
  Cartography = "cartography",

  // === Магические навыки ===
  Biomancy = "biomancy",
  Cryptomagic = "cryptomagic",
  WhiteMagic = "white_magic",
  Psionics = "psionics",
  BlackMagic = "black_magic",
  WildMagic = "wild_magic",

  // === Технические навыки ===
  Gunsmith = "gunsmith",
  Mechanics = "mechanics",
  Electrics = "electrics",
  Metallurgy = "metallurgy",
  Implants = "implants",
  Analysis = "analysis",
  Artistry = "artistry",

  // === Специальные навыки (спецнавыки) ===
  ToughSkin = "tough_skin",
  QuickReaction = "quick_reaction",
  SharpEye = "sharp_eye",
  PowerfulMagic = "powerful_magic",
  PowerOfTheMind = "power_of_the_mind",
  PowerOfCharisma = "power_of_charisma",
  SteelFortitude = "steel_fortitude",
  StyleIcon = "style_icon",
}

export type EntityMapType = Record<EntityNames, Entity>;

export const EntityMap: EntityMapType = {
  // === Основные характеристики ===
  [EntityNames.Constitution]: Constitution,
  [EntityNames.Agility]: Agility,
  [EntityNames.Perception]: Perception,
  [EntityNames.Gift]: Gift,
  [EntityNames.Intelligence]: Intelligence,
  [EntityNames.Empathy]: Empathy,
  [EntityNames.Psyche]: Psyche,
  [EntityNames.Appearance]: Appearance,

  // === Второстепенные характеристики ===
  [EntityNames.CombatCapability]: CombatCapability,
  [EntityNames.Sanity]: Sanity,
  [EntityNames.Energy]: Energy,
  [EntityNames.Mana]: Mana,
  [EntityNames.ActionPoints]: ActionPoints,
  [EntityNames.RangeOfVision]: RangeOfVision,
  [EntityNames.HearingRange]: HearingRange,

  // === Сопротивления ===
  [EntityNames.FireResistance]: FireResistance,
  [EntityNames.ColdResistance]: ColdResistance,
  [EntityNames.ElectricityResistance]: ElectricityResistance,
  [EntityNames.PoisonResistance]: PoisonResistance,
  [EntityNames.AcidResistance]: AcidResistance,
  [EntityNames.CrushingResistance]: CrushingResistance,
  [EntityNames.PiercingResistance]: PiercingResistance,
  [EntityNames.CuttingResistance]: CuttingResistance,
  [EntityNames.MagicResistance]: MagicResistance,
  [EntityNames.PsiResistance]: PsiResistance,
  [EntityNames.PhysResistance]: PhysResistance, // Обрати внимание: в enum ты написал "PhysResistance", а в классе — "PhisResistance"

  // === Боевые навыки ===
  [EntityNames.MartialArts]: MartialArts,
  [EntityNames.Knife]: Knife,
  [EntityNames.ShortBlades]: ShortBlades,
  [EntityNames.LongBlades]: LongBlades,
  [EntityNames.MaceAndFlail]: MaceAndFlail,
  [EntityNames.Axes]: Axes,
  [EntityNames.Pole]: Pole,
  [EntityNames.ThrowsAndSlings]: ThrowsAndSlings,
  [EntityNames.ExoticWeapons]: ExoticWeapons,
  [EntityNames.HorseFight]: HorseFight,
  [EntityNames.CriticalHit]: CriticalHit,
  [EntityNames.DualWield]: DualWield,
  [EntityNames.AttackInFlight]: AttackInFlight,
  [EntityNames.Ninjutsu]: Ninjutsu,
  [EntityNames.Bow]: Bow,
  [EntityNames.Crossbow]: Crossbow,
  [EntityNames.Firearm]: Firearm,
  [EntityNames.HeavyWeapons]: HeavyWeapons,
  [EntityNames.Shield]: Shield,
  [EntityNames.Parry]: Parry,
  [EntityNames.Evasion]: Evasion,
  [EntityNames.LightArmor]: LightArmor,
  [EntityNames.HeavyArmor]: HeavyArmor,
  [EntityNames.UnarmoredCombat]: UnarmoredCombat,
  [EntityNames.Wand]: Wand,

  // === Физические навыки ===
  [EntityNames.Swimming]: Swimming,
  [EntityNames.Climbing]: Climbing,
  [EntityNames.Acrobatics]: Acrobatics,
  [EntityNames.Athletics]: Athletics,
  [EntityNames.Stealth]: Stealth,
  [EntityNames.Scouting]: Scouting,
  [EntityNames.Augmentations]: Augmentations,

  // === Социальные навыки ===
  [EntityNames.Resolve]: Resolve,
  [EntityNames.Intimidation]: Intimidation,
  [EntityNames.Bluff]: Bluff,
  [EntityNames.Diplomacy]: Diplomacy,
  [EntityNames.Manipulation]: Manipulation,
  [EntityNames.Seduction]: Seduction,
  [EntityNames.Psychology]: Psychology,

  // === Интеллектуальные навыки ===
  [EntityNames.Acting]: Acting,
  [EntityNames.Investigation]: Investigation,
  [EntityNames.Medicine]: Medicine,
  [EntityNames.Knowledge]: Knowledge,
  [EntityNames.Trade]: Trade,
  [EntityNames.Concentration]: Concentration,
  [EntityNames.Artifacts]: Artifacts,
  [EntityNames.Tactics]: Tactics,

  // === Воровские навыки ===
  [EntityNames.Safecracker]: Safecracker,
  [EntityNames.Steal]: Steal,
  [EntityNames.Infomantia]: Infomantia,
  [EntityNames.Gambling]: Gambling,
  [EntityNames.Piloting]: Piloting,

  // === Ремесленные навыки ===
  [EntityNames.Enchantment]: Enchantment,
  [EntityNames.Blacksmithing]: Blacksmithing,
  [EntityNames.Leatherworking]: Leatherworking,
  [EntityNames.Woodworking]: Woodworking,
  [EntityNames.JewelryMaking]: JewelryMaking,
  [EntityNames.Cooking]: Cooking,
  [EntityNames.AnimalTraining]: AnimalTraining,
  [EntityNames.Farming]: Farming,
  [EntityNames.Sex]: Sex,

  // === Специализированные навыки ===
  [EntityNames.Traps]: Traps,
  [EntityNames.Alchemy]: Alchemy,
  [EntityNames.RewritingTheScrolls]: RewritingTheScrolls,
  [EntityNames.Herbology]: Herbology,
  [EntityNames.ResourceExtraction]: ResourceExtraction,
  [EntityNames.Hunting]: Hunting,
  [EntityNames.Cartography]: Cartography,

  // === Магические навыки ===
  [EntityNames.Biomancy]: Biomancy,
  [EntityNames.Cryptomagic]: Cryptomagic,
  [EntityNames.WhiteMagic]: WhiteMagic,
  [EntityNames.Psionics]: Psionics,
  [EntityNames.BlackMagic]: BlackMagic,
  [EntityNames.WildMagic]: WildMagic,

  // === Технические навыки ===
  [EntityNames.Gunsmith]: Gunsmith,
  [EntityNames.Mechanics]: Mechanics,
  [EntityNames.Electrics]: Electrics,
  [EntityNames.Metallurgy]: Metallurgy,
  [EntityNames.Implants]: Implants,
  [EntityNames.Analysis]: Analysis,
  [EntityNames.Artistry]: Artistry,

  // === Специальные навыки ===
  [EntityNames.ToughSkin]: ToughSkin,
  [EntityNames.QuickReaction]: QuickReaction,
  [EntityNames.SharpEye]: SharpEye,
  [EntityNames.PowerfulMagic]: PowerfulMagic,
  [EntityNames.PowerOfTheMind]: PowerOfTheMind,
  [EntityNames.PowerOfCharisma]: PowerOfCharisma,
  [EntityNames.SteelFortitude]: SteelFortitude,
  [EntityNames.StyleIcon]: StyleIcon,
};