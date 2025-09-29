import { Constitution, Agility, Perception, Gift, Intelligence, Empathy, Psyche, Appearance, CombatCapability, Sanity, Energy, Mana, ActionPoints, RangeOfVision, HearingRange, FireResistance, ColdResistance, ElectricityResistance, PoisonResistance, AcidResistance, CrushingResistance, PiercingResistance, CuttingResistance, MagicResistance, PsiResistance, PhysResistance, MartialArts, Knife, ShortBlades, LongBlades, MaceAndFlail, Axes, Pole, ThrowsAndSlings, ExoticWeapons, HorseFight, CriticalHit, DualWield, AttackInFlight, Ninjutsu, Bow, Crossbow, Firearm, HeavyWeapons, Shield, Parry, Evasion, LightArmor, HeavyArmor, UnarmoredCombat, Wand, Swimming, Climbing, Acrobatics, Athletics, Stealth, Scouting, Augmentations, Resolve, Intimidation, Bluff, Diplomacy, Manipulation, Seduction, Psychology, Acting, Investigation, Medicine, Knowledge, Trade, Concentration, Artifacts, Tactics, Safecracker, Steal, Infomantia, Gambling, Piloting, Enchantment, Blacksmithing, Leatherworking, Woodworking, JewelryMaking, Cooking, AnimalTraining, Farming, Sex, Traps, Alchemy, RewritingTheScrolls, Herbology, ResourceExtraction, Hunting, Cartography, Biomancy, Cryptomagic, WhiteMagic, Psionics, BlackMagic, WildMagic, Gunsmith, Mechanics, Electrics, Metallurgy, Implants, Analysis, Artistry, ToughSkin, QuickReaction, SharpEye, PowerfulMagic, PowerOfTheMind, PowerOfCharisma, SteelFortitude, StyleIcon } from "../Stats/Stats";

/** базовый класс для любой Property */
export class Property {

}

export enum PropertyNames {
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

export type PropertyMapType = Record<PropertyNames, Property>;

export const PropertyMap: PropertyMapType = {
  // === Основные характеристики ===
  [PropertyNames.Constitution]: Constitution,
  [PropertyNames.Agility]: Agility,
  [PropertyNames.Perception]: Perception,
  [PropertyNames.Gift]: Gift,
  [PropertyNames.Intelligence]: Intelligence,
  [PropertyNames.Empathy]: Empathy,
  [PropertyNames.Psyche]: Psyche,
  [PropertyNames.Appearance]: Appearance,

  // === Второстепенные характеристики ===
  [PropertyNames.CombatCapability]: CombatCapability,
  [PropertyNames.Sanity]: Sanity,
  [PropertyNames.Energy]: Energy,
  [PropertyNames.Mana]: Mana,
  [PropertyNames.ActionPoints]: ActionPoints,
  [PropertyNames.RangeOfVision]: RangeOfVision,
  [PropertyNames.HearingRange]: HearingRange,

  // === Сопротивления ===
  [PropertyNames.FireResistance]: FireResistance,
  [PropertyNames.ColdResistance]: ColdResistance,
  [PropertyNames.ElectricityResistance]: ElectricityResistance,
  [PropertyNames.PoisonResistance]: PoisonResistance,
  [PropertyNames.AcidResistance]: AcidResistance,
  [PropertyNames.CrushingResistance]: CrushingResistance,
  [PropertyNames.PiercingResistance]: PiercingResistance,
  [PropertyNames.CuttingResistance]: CuttingResistance,
  [PropertyNames.MagicResistance]: MagicResistance,
  [PropertyNames.PsiResistance]: PsiResistance,
  [PropertyNames.PhysResistance]: PhysResistance, // Обрати внимание: в enum ты написал "PhysResistance", а в классе — "PhisResistance"

  // === Боевые навыки ===
  [PropertyNames.MartialArts]: MartialArts,
  [PropertyNames.Knife]: Knife,
  [PropertyNames.ShortBlades]: ShortBlades,
  [PropertyNames.LongBlades]: LongBlades,
  [PropertyNames.MaceAndFlail]: MaceAndFlail,
  [PropertyNames.Axes]: Axes,
  [PropertyNames.Pole]: Pole,
  [PropertyNames.ThrowsAndSlings]: ThrowsAndSlings,
  [PropertyNames.ExoticWeapons]: ExoticWeapons,
  [PropertyNames.HorseFight]: HorseFight,
  [PropertyNames.CriticalHit]: CriticalHit,
  [PropertyNames.DualWield]: DualWield,
  [PropertyNames.AttackInFlight]: AttackInFlight,
  [PropertyNames.Ninjutsu]: Ninjutsu,
  [PropertyNames.Bow]: Bow,
  [PropertyNames.Crossbow]: Crossbow,
  [PropertyNames.Firearm]: Firearm,
  [PropertyNames.HeavyWeapons]: HeavyWeapons,
  [PropertyNames.Shield]: Shield,
  [PropertyNames.Parry]: Parry,
  [PropertyNames.Evasion]: Evasion,
  [PropertyNames.LightArmor]: LightArmor,
  [PropertyNames.HeavyArmor]: HeavyArmor,
  [PropertyNames.UnarmoredCombat]: UnarmoredCombat,
  [PropertyNames.Wand]: Wand,

  // === Физические навыки ===
  [PropertyNames.Swimming]: Swimming,
  [PropertyNames.Climbing]: Climbing,
  [PropertyNames.Acrobatics]: Acrobatics,
  [PropertyNames.Athletics]: Athletics,
  [PropertyNames.Stealth]: Stealth,
  [PropertyNames.Scouting]: Scouting,
  [PropertyNames.Augmentations]: Augmentations,

  // === Социальные навыки ===
  [PropertyNames.Resolve]: Resolve,
  [PropertyNames.Intimidation]: Intimidation,
  [PropertyNames.Bluff]: Bluff,
  [PropertyNames.Diplomacy]: Diplomacy,
  [PropertyNames.Manipulation]: Manipulation,
  [PropertyNames.Seduction]: Seduction,
  [PropertyNames.Psychology]: Psychology,

  // === Интеллектуальные навыки ===
  [PropertyNames.Acting]: Acting,
  [PropertyNames.Investigation]: Investigation,
  [PropertyNames.Medicine]: Medicine,
  [PropertyNames.Knowledge]: Knowledge,
  [PropertyNames.Trade]: Trade,
  [PropertyNames.Concentration]: Concentration,
  [PropertyNames.Artifacts]: Artifacts,
  [PropertyNames.Tactics]: Tactics,

  // === Воровские навыки ===
  [PropertyNames.Safecracker]: Safecracker,
  [PropertyNames.Steal]: Steal,
  [PropertyNames.Infomantia]: Infomantia,
  [PropertyNames.Gambling]: Gambling,
  [PropertyNames.Piloting]: Piloting,

  // === Ремесленные навыки ===
  [PropertyNames.Enchantment]: Enchantment,
  [PropertyNames.Blacksmithing]: Blacksmithing,
  [PropertyNames.Leatherworking]: Leatherworking,
  [PropertyNames.Woodworking]: Woodworking,
  [PropertyNames.JewelryMaking]: JewelryMaking,
  [PropertyNames.Cooking]: Cooking,
  [PropertyNames.AnimalTraining]: AnimalTraining,
  [PropertyNames.Farming]: Farming,
  [PropertyNames.Sex]: Sex,

  // === Специализированные навыки ===
  [PropertyNames.Traps]: Traps,
  [PropertyNames.Alchemy]: Alchemy,
  [PropertyNames.RewritingTheScrolls]: RewritingTheScrolls,
  [PropertyNames.Herbology]: Herbology,
  [PropertyNames.ResourceExtraction]: ResourceExtraction,
  [PropertyNames.Hunting]: Hunting,
  [PropertyNames.Cartography]: Cartography,

  // === Магические навыки ===
  [PropertyNames.Biomancy]: Biomancy,
  [PropertyNames.Cryptomagic]: Cryptomagic,
  [PropertyNames.WhiteMagic]: WhiteMagic,
  [PropertyNames.Psionics]: Psionics,
  [PropertyNames.BlackMagic]: BlackMagic,
  [PropertyNames.WildMagic]: WildMagic,

  // === Технические навыки ===
  [PropertyNames.Gunsmith]: Gunsmith,
  [PropertyNames.Mechanics]: Mechanics,
  [PropertyNames.Electrics]: Electrics,
  [PropertyNames.Metallurgy]: Metallurgy,
  [PropertyNames.Implants]: Implants,
  [PropertyNames.Analysis]: Analysis,
  [PropertyNames.Artistry]: Artistry,

  // === Специальные навыки ===
  [PropertyNames.ToughSkin]: ToughSkin,
  [PropertyNames.QuickReaction]: QuickReaction,
  [PropertyNames.SharpEye]: SharpEye,
  [PropertyNames.PowerfulMagic]: PowerfulMagic,
  [PropertyNames.PowerOfTheMind]: PowerOfTheMind,
  [PropertyNames.PowerOfCharisma]: PowerOfCharisma,
  [PropertyNames.SteelFortitude]: SteelFortitude,
  [PropertyNames.StyleIcon]: StyleIcon,
};