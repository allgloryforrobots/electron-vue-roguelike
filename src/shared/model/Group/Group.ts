import { Property, PropertyMapType, PropertyNames, PropertyMap } from "../Property/Property";

export class Group extends Property {
  items: DeepPartial<PropertyMapType> = {};
  constructor() {
      super();
  }

  get list(): Property[] {
    return Object.values(this.items);
  }
}

// === Основные характеристики ===
export class CharacteristicsGroup extends Group {
  static readonly name = "Основные характеристики";
  static readonly codename = "characteristics";
  static readonly icon = "fa-user";
  static items = {
    [PropertyNames.Constitution]: PropertyMap[PropertyNames.Constitution],
    [PropertyNames.Agility]: PropertyMap[PropertyNames.Agility],
    [PropertyNames.Perception]: PropertyMap[PropertyNames.Perception],
    [PropertyNames.Gift]: PropertyMap[PropertyNames.Gift],
    [PropertyNames.Intelligence]: PropertyMap[PropertyNames.Intelligence],
    [PropertyNames.Empathy]: PropertyMap[PropertyNames.Empathy],
    [PropertyNames.Psyche]: PropertyMap[PropertyNames.Psyche],
    [PropertyNames.Appearance]: PropertyMap[PropertyNames.Appearance],
  };
}

// === Второстепенные характеристики ===
export class SecondaryCharacteristicsGroup extends Group {
  static readonly name = "Второстепенные характеристики";
  static readonly codename = "secondary_characteristics";
  static readonly icon = "fa-user-clock";
  static items = {
    [PropertyNames.CombatCapability]: PropertyMap[PropertyNames.CombatCapability],
    [PropertyNames.Sanity]: PropertyMap[PropertyNames.Sanity],
    [PropertyNames.Energy]: PropertyMap[PropertyNames.Energy],
    [PropertyNames.Mana]: PropertyMap[PropertyNames.Mana],
    [PropertyNames.ActionPoints]: PropertyMap[PropertyNames.ActionPoints],
    [PropertyNames.RangeOfVision]: PropertyMap[PropertyNames.RangeOfVision],
    [PropertyNames.HearingRange]: PropertyMap[PropertyNames.HearingRange],
  };
}

// === Сопротивления ===
export class ResistancesGroup extends Group {
  static readonly name = "Сопротивления";
  static readonly codename = "resistances";
  static readonly icon = "fa-shield-alt";
  static items = {
    [PropertyNames.FireResistance]: PropertyMap[PropertyNames.FireResistance],
    [PropertyNames.ColdResistance]: PropertyMap[PropertyNames.ColdResistance],
    [PropertyNames.ElectricityResistance]: PropertyMap[PropertyNames.ElectricityResistance],
    [PropertyNames.PoisonResistance]: PropertyMap[PropertyNames.PoisonResistance],
    [PropertyNames.AcidResistance]: PropertyMap[PropertyNames.AcidResistance],
    [PropertyNames.CrushingResistance]: PropertyMap[PropertyNames.CrushingResistance],
    [PropertyNames.PiercingResistance]: PropertyMap[PropertyNames.PiercingResistance],
    [PropertyNames.CuttingResistance]: PropertyMap[PropertyNames.CuttingResistance],
    [PropertyNames.MagicResistance]: PropertyMap[PropertyNames.MagicResistance],
    [PropertyNames.PsiResistance]: PropertyMap[PropertyNames.PsiResistance],
    [PropertyNames.PhysResistance]: PropertyMap[PropertyNames.PhysResistance],
  };
}

// === Ближний бой ===
export class CloseCombatGroup extends Group {
  static readonly name = "Ближний бой";
  static readonly codename = "close_combat";
  static readonly icon = "fa-fist-raised";
  static items = {
    [PropertyNames.MartialArts]: PropertyMap[PropertyNames.MartialArts],
    [PropertyNames.Knife]: PropertyMap[PropertyNames.Knife],
    [PropertyNames.ShortBlades]: PropertyMap[PropertyNames.ShortBlades],
    [PropertyNames.LongBlades]: PropertyMap[PropertyNames.LongBlades],
    [PropertyNames.MaceAndFlail]: PropertyMap[PropertyNames.MaceAndFlail],
    [PropertyNames.Axes]: PropertyMap[PropertyNames.Axes],
    [PropertyNames.Pole]: PropertyMap[PropertyNames.Pole],
  };
}

// === Дальний бой ===
export class RangeCombatGroup extends Group {
  static readonly name = "Дальний бой";
  static readonly codename = "range_combat";
  static readonly icon = "fa-bullseye";
  static items = {
    [PropertyNames.ThrowsAndSlings]: PropertyMap[PropertyNames.ThrowsAndSlings],
    [PropertyNames.Bow]: PropertyMap[PropertyNames.Bow],
    [PropertyNames.Crossbow]: PropertyMap[PropertyNames.Crossbow],
    [PropertyNames.Firearm]: PropertyMap[PropertyNames.Firearm],
    [PropertyNames.Wand]: PropertyMap[PropertyNames.Wand],
  };
}

// === Искусность ===
export class FinesseGroup extends Group {
  static readonly name = "Искусность";
  static readonly codename = "finesse";
  static readonly icon = "fa-dice-d20";
  static items = {
    [PropertyNames.HorseFight]: PropertyMap[PropertyNames.HorseFight],
    [PropertyNames.CriticalHit]: PropertyMap[PropertyNames.CriticalHit],
    [PropertyNames.DualWield]: PropertyMap[PropertyNames.DualWield],
    [PropertyNames.AttackInFlight]: PropertyMap[PropertyNames.AttackInFlight],
    [PropertyNames.Ninjutsu]: PropertyMap[PropertyNames.Ninjutsu],
    [PropertyNames.HeavyWeapons]: PropertyMap[PropertyNames.HeavyWeapons],
    [PropertyNames.ExoticWeapons]: PropertyMap[PropertyNames.ExoticWeapons],
  };
}

// === Защита ===
export class DefenceGroup extends Group {
  static readonly name = "Защита";
  static readonly codename = "defence";
  static readonly icon = "fa-shield";
  static items = {
    [PropertyNames.Shield]: PropertyMap[PropertyNames.Shield],
    [PropertyNames.Parry]: PropertyMap[PropertyNames.Parry],
    [PropertyNames.Evasion]: PropertyMap[PropertyNames.Evasion],
    [PropertyNames.LightArmor]: PropertyMap[PropertyNames.LightArmor],
    [PropertyNames.HeavyArmor]: PropertyMap[PropertyNames.HeavyArmor],
    [PropertyNames.UnarmoredCombat]: PropertyMap[PropertyNames.UnarmoredCombat],
  };
}

// === Физические навыки ===
export class PhysicalGroup extends Group {
  static readonly name = "Физические навыки";
  static readonly codename = "physical";
  static readonly icon = "fa-running";
  static items = {
    [PropertyNames.Swimming]: PropertyMap[PropertyNames.Swimming],
    [PropertyNames.Climbing]: PropertyMap[PropertyNames.Climbing],
    [PropertyNames.Acrobatics]: PropertyMap[PropertyNames.Acrobatics],
    [PropertyNames.Athletics]: PropertyMap[PropertyNames.Athletics],
    [PropertyNames.Stealth]: PropertyMap[PropertyNames.Stealth],
    [PropertyNames.Scouting]: PropertyMap[PropertyNames.Scouting],
    [PropertyNames.Augmentations]: PropertyMap[PropertyNames.Augmentations],
  };
}

// === Социальные навыки ===
export class SocialGroup extends Group {
  static readonly name = "Социальные навыки";
  static readonly codename = "social";
  static readonly icon = "fa-users";
  static items = {
    [PropertyNames.Resolve]: PropertyMap[PropertyNames.Resolve],
    [PropertyNames.Intimidation]: PropertyMap[PropertyNames.Intimidation],
    [PropertyNames.Bluff]: PropertyMap[PropertyNames.Bluff],
    [PropertyNames.Diplomacy]: PropertyMap[PropertyNames.Diplomacy],
    [PropertyNames.Manipulation]: PropertyMap[PropertyNames.Manipulation],
    [PropertyNames.Seduction]: PropertyMap[PropertyNames.Seduction],
    [PropertyNames.Psychology]: PropertyMap[PropertyNames.Psychology],
  };
}

// === Интеллектуальные навыки ===
export class IntellectualGroup extends Group {
  static readonly name = "Интеллектуальные навыки";
  static readonly codename = "intellectual";
  static readonly icon = "fa-brain";
  static items = {
    [PropertyNames.Acting]: PropertyMap[PropertyNames.Acting],
    [PropertyNames.Investigation]: PropertyMap[PropertyNames.Investigation],
    [PropertyNames.Medicine]: PropertyMap[PropertyNames.Medicine],
    [PropertyNames.Knowledge]: PropertyMap[PropertyNames.Knowledge],
    [PropertyNames.Trade]: PropertyMap[PropertyNames.Trade],
    [PropertyNames.Concentration]: PropertyMap[PropertyNames.Concentration],
    [PropertyNames.Artifacts]: PropertyMap[PropertyNames.Artifacts],
    [PropertyNames.Tactics]: PropertyMap[PropertyNames.Tactics],
  };
}

// === Воровские навыки ===
export class ThievingGroup extends Group {
  static readonly name = "Воровские навыки";
  static readonly codename = "thieving";
  static readonly icon = "fa-mask";
  static items = {
    [PropertyNames.Safecracker]: PropertyMap[PropertyNames.Safecracker],
    [PropertyNames.Steal]: PropertyMap[PropertyNames.Steal],
    [PropertyNames.Infomantia]: PropertyMap[PropertyNames.Infomantia],
    [PropertyNames.Gambling]: PropertyMap[PropertyNames.Gambling],
    [PropertyNames.Piloting]: PropertyMap[PropertyNames.Piloting],
  };
}

// === Ремесленные навыки ===
export class CraftingGroup extends Group {
  static readonly name = "Ремесленные навыки";
  static readonly codename = "crafting";
  static readonly icon = "fa-hammer";
  static items = {
    [PropertyNames.Enchantment]: PropertyMap[PropertyNames.Enchantment],
    [PropertyNames.Blacksmithing]: PropertyMap[PropertyNames.Blacksmithing],
    [PropertyNames.Leatherworking]: PropertyMap[PropertyNames.Leatherworking],
    [PropertyNames.Woodworking]: PropertyMap[PropertyNames.Woodworking],
    [PropertyNames.JewelryMaking]: PropertyMap[PropertyNames.JewelryMaking],
    [PropertyNames.Cooking]: PropertyMap[PropertyNames.Cooking],
    [PropertyNames.AnimalTraining]: PropertyMap[PropertyNames.AnimalTraining],
    [PropertyNames.Farming]: PropertyMap[PropertyNames.Farming],
    [PropertyNames.Sex]: PropertyMap[PropertyNames.Sex],
  };
}

// === Специализированные навыки ===
export class SpecializedGroup extends Group {
  static readonly name = "Специализированные навыки";
  static readonly codename = "specialized";
  static readonly icon = "fa-tools";
  static items = {
    [PropertyNames.Traps]: PropertyMap[PropertyNames.Traps],
    [PropertyNames.Alchemy]: PropertyMap[PropertyNames.Alchemy],
    [PropertyNames.RewritingTheScrolls]: PropertyMap[PropertyNames.RewritingTheScrolls],
    [PropertyNames.Herbology]: PropertyMap[PropertyNames.Herbology],
    [PropertyNames.ResourceExtraction]: PropertyMap[PropertyNames.ResourceExtraction],
    [PropertyNames.Hunting]: PropertyMap[PropertyNames.Hunting],
    [PropertyNames.Cartography]: PropertyMap[PropertyNames.Cartography],
  };
}

// === Магические навыки ===
export class MagicalGroup extends Group {
  static readonly name = "Магические навыки";
  static readonly codename = "magical";
  static readonly icon = "fa-magic";
  static items = {
    [PropertyNames.Biomancy]: PropertyMap[PropertyNames.Biomancy],
    [PropertyNames.Cryptomagic]: PropertyMap[PropertyNames.Cryptomagic],
    [PropertyNames.WhiteMagic]: PropertyMap[PropertyNames.WhiteMagic],
    [PropertyNames.Psionics]: PropertyMap[PropertyNames.Psionics],
    [PropertyNames.BlackMagic]: PropertyMap[PropertyNames.BlackMagic],
    [PropertyNames.WildMagic]: PropertyMap[PropertyNames.WildMagic],
  };
}

// === Технические навыки ===
export class TechnicalGroup extends Group {
  static readonly name = "Технические навыки";
  static readonly codename = "technical";
  static readonly icon = "fa-microchip";
  static items = {
    [PropertyNames.Gunsmith]: PropertyMap[PropertyNames.Gunsmith],
    [PropertyNames.Mechanics]: PropertyMap[PropertyNames.Mechanics],
    [PropertyNames.Electrics]: PropertyMap[PropertyNames.Electrics],
    [PropertyNames.Metallurgy]: PropertyMap[PropertyNames.Metallurgy],
    [PropertyNames.Implants]: PropertyMap[PropertyNames.Implants],
    [PropertyNames.Analysis]: PropertyMap[PropertyNames.Analysis],
    [PropertyNames.Artistry]: PropertyMap[PropertyNames.Artistry],
  };
}

// === Специальные навыки ===
export class SpecialGroup extends Group {
  static readonly name = "Специальные навыки";
  static readonly codename = "special";
  static readonly icon = "fa-star";
  static items = {
    [PropertyNames.ToughSkin]: PropertyMap[PropertyNames.ToughSkin],
    [PropertyNames.QuickReaction]: PropertyMap[PropertyNames.QuickReaction],
    [PropertyNames.SharpEye]: PropertyMap[PropertyNames.SharpEye],
    [PropertyNames.PowerfulMagic]: PropertyMap[PropertyNames.PowerfulMagic],
    [PropertyNames.PowerOfTheMind]: PropertyMap[PropertyNames.PowerOfTheMind],
    [PropertyNames.PowerOfCharisma]: PropertyMap[PropertyNames.PowerOfCharisma],
    [PropertyNames.SteelFortitude]: PropertyMap[PropertyNames.SteelFortitude],
    [PropertyNames.StyleIcon]: PropertyMap[PropertyNames.StyleIcon],
  };
}