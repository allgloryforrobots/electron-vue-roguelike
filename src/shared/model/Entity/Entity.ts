/** базовый класс для любой Entity */
export class Entity {
    id = crypto.randomUUID();
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
  Performance = "performance",
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