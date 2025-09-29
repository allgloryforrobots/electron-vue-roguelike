import { Entity, EntityMap, EntityNames } from "../Entity/Entity";
import type { EntityMapType } from "../Entity/Entity";

export class Group extends Entity {
  items: DeepPartial<EntityMapType> = {};
  constructor() {
      super();
  }

  get list(): Entity[] {
    return Object.values(this.items);
  }
}

// === Основные характеристики ===
export class CharacteristicsGroup extends Group {
  static readonly name = "Основные характеристики";
  static readonly codename = "characteristics";
  static readonly icon = "fa-user";
  static items = {
    [EntityNames.Constitution]: EntityMap[EntityNames.Constitution],
    [EntityNames.Agility]: EntityMap[EntityNames.Agility],
    [EntityNames.Perception]: EntityMap[EntityNames.Perception],
    [EntityNames.Gift]: EntityMap[EntityNames.Gift],
    [EntityNames.Intelligence]: EntityMap[EntityNames.Intelligence],
    [EntityNames.Empathy]: EntityMap[EntityNames.Empathy],
    [EntityNames.Psyche]: EntityMap[EntityNames.Psyche],
    [EntityNames.Appearance]: EntityMap[EntityNames.Appearance],
  };
}

// === Второстепенные характеристики ===
export class SecondaryCharacteristicsGroup extends Group {
  static readonly name = "Второстепенные характеристики";
  static readonly codename = "secondary_characteristics";
  static readonly icon = "fa-user-clock";
  static items = {
    [EntityNames.CombatCapability]: EntityMap[EntityNames.CombatCapability],
    [EntityNames.Sanity]: EntityMap[EntityNames.Sanity],
    [EntityNames.Energy]: EntityMap[EntityNames.Energy],
    [EntityNames.Mana]: EntityMap[EntityNames.Mana],
    [EntityNames.ActionPoints]: EntityMap[EntityNames.ActionPoints],
    [EntityNames.RangeOfVision]: EntityMap[EntityNames.RangeOfVision],
    [EntityNames.HearingRange]: EntityMap[EntityNames.HearingRange],
  };
}

// === Сопротивления ===
export class ResistancesGroup extends Group {
  static readonly name = "Сопротивления";
  static readonly codename = "resistances";
  static readonly icon = "fa-shield-alt";
  static items = {
    [EntityNames.FireResistance]: EntityMap[EntityNames.FireResistance],
    [EntityNames.ColdResistance]: EntityMap[EntityNames.ColdResistance],
    [EntityNames.ElectricityResistance]: EntityMap[EntityNames.ElectricityResistance],
    [EntityNames.PoisonResistance]: EntityMap[EntityNames.PoisonResistance],
    [EntityNames.AcidResistance]: EntityMap[EntityNames.AcidResistance],
    [EntityNames.CrushingResistance]: EntityMap[EntityNames.CrushingResistance],
    [EntityNames.PiercingResistance]: EntityMap[EntityNames.PiercingResistance],
    [EntityNames.CuttingResistance]: EntityMap[EntityNames.CuttingResistance],
    [EntityNames.MagicResistance]: EntityMap[EntityNames.MagicResistance],
    [EntityNames.PsiResistance]: EntityMap[EntityNames.PsiResistance],
    [EntityNames.PhysResistance]: EntityMap[EntityNames.PhysResistance],
  };
}

// === Ближний бой ===
export class CloseCombatGroup extends Group {
  static readonly name = "Ближний бой";
  static readonly codename = "close_combat";
  static readonly icon = "fa-fist-raised";
  static items = {
    [EntityNames.MartialArts]: EntityMap[EntityNames.MartialArts],
    [EntityNames.Knife]: EntityMap[EntityNames.Knife],
    [EntityNames.ShortBlades]: EntityMap[EntityNames.ShortBlades],
    [EntityNames.LongBlades]: EntityMap[EntityNames.LongBlades],
    [EntityNames.MaceAndFlail]: EntityMap[EntityNames.MaceAndFlail],
    [EntityNames.Axes]: EntityMap[EntityNames.Axes],
    [EntityNames.Pole]: EntityMap[EntityNames.Pole],
  };
}

// === Дальний бой ===
export class RangeCombatGroup extends Group {
  static readonly name = "Дальний бой";
  static readonly codename = "range_combat";
  static readonly icon = "fa-bullseye";
  static items = {
    [EntityNames.ThrowsAndSlings]: EntityMap[EntityNames.ThrowsAndSlings],
    [EntityNames.Bow]: EntityMap[EntityNames.Bow],
    [EntityNames.Crossbow]: EntityMap[EntityNames.Crossbow],
    [EntityNames.Firearm]: EntityMap[EntityNames.Firearm],
    [EntityNames.Wand]: EntityMap[EntityNames.Wand],
  };
}

// === Искусность ===
export class FinesseGroup extends Group {
  static readonly name = "Искусность";
  static readonly codename = "finesse";
  static readonly icon = "fa-dice-d20";
  static items = {
    [EntityNames.HorseFight]: EntityMap[EntityNames.HorseFight],
    [EntityNames.CriticalHit]: EntityMap[EntityNames.CriticalHit],
    [EntityNames.DualWield]: EntityMap[EntityNames.DualWield],
    [EntityNames.AttackInFlight]: EntityMap[EntityNames.AttackInFlight],
    [EntityNames.Ninjutsu]: EntityMap[EntityNames.Ninjutsu],
    [EntityNames.HeavyWeapons]: EntityMap[EntityNames.HeavyWeapons],
    [EntityNames.ExoticWeapons]: EntityMap[EntityNames.ExoticWeapons],
  };
}

// === Защита ===
export class DefenceGroup extends Group {
  static readonly name = "Защита";
  static readonly codename = "defence";
  static readonly icon = "fa-shield";
  static items = {
    [EntityNames.Shield]: EntityMap[EntityNames.Shield],
    [EntityNames.Parry]: EntityMap[EntityNames.Parry],
    [EntityNames.Evasion]: EntityMap[EntityNames.Evasion],
    [EntityNames.LightArmor]: EntityMap[EntityNames.LightArmor],
    [EntityNames.HeavyArmor]: EntityMap[EntityNames.HeavyArmor],
    [EntityNames.UnarmoredCombat]: EntityMap[EntityNames.UnarmoredCombat],
  };
}

// === Физические навыки ===
export class PhysicalGroup extends Group {
  static readonly name = "Физические навыки";
  static readonly codename = "physical";
  static readonly icon = "fa-running";
  static items = {
    [EntityNames.Swimming]: EntityMap[EntityNames.Swimming],
    [EntityNames.Climbing]: EntityMap[EntityNames.Climbing],
    [EntityNames.Acrobatics]: EntityMap[EntityNames.Acrobatics],
    [EntityNames.Athletics]: EntityMap[EntityNames.Athletics],
    [EntityNames.Stealth]: EntityMap[EntityNames.Stealth],
    [EntityNames.Scouting]: EntityMap[EntityNames.Scouting],
    [EntityNames.Augmentations]: EntityMap[EntityNames.Augmentations],
  };
}

// === Социальные навыки ===
export class SocialGroup extends Group {
  static readonly name = "Социальные навыки";
  static readonly codename = "social";
  static readonly icon = "fa-users";
  static items = {
    [EntityNames.Resolve]: EntityMap[EntityNames.Resolve],
    [EntityNames.Intimidation]: EntityMap[EntityNames.Intimidation],
    [EntityNames.Bluff]: EntityMap[EntityNames.Bluff],
    [EntityNames.Diplomacy]: EntityMap[EntityNames.Diplomacy],
    [EntityNames.Manipulation]: EntityMap[EntityNames.Manipulation],
    [EntityNames.Seduction]: EntityMap[EntityNames.Seduction],
    [EntityNames.Psychology]: EntityMap[EntityNames.Psychology],
  };
}

// === Интеллектуальные навыки ===
export class IntellectualGroup extends Group {
  static readonly name = "Интеллектуальные навыки";
  static readonly codename = "intellectual";
  static readonly icon = "fa-brain";
  static items = {
    [EntityNames.Acting]: EntityMap[EntityNames.Acting],
    [EntityNames.Investigation]: EntityMap[EntityNames.Investigation],
    [EntityNames.Medicine]: EntityMap[EntityNames.Medicine],
    [EntityNames.Knowledge]: EntityMap[EntityNames.Knowledge],
    [EntityNames.Trade]: EntityMap[EntityNames.Trade],
    [EntityNames.Concentration]: EntityMap[EntityNames.Concentration],
    [EntityNames.Artifacts]: EntityMap[EntityNames.Artifacts],
    [EntityNames.Tactics]: EntityMap[EntityNames.Tactics],
  };
}

// === Воровские навыки ===
export class ThievingGroup extends Group {
  static readonly name = "Воровские навыки";
  static readonly codename = "thieving";
  static readonly icon = "fa-mask";
  static items = {
    [EntityNames.Safecracker]: EntityMap[EntityNames.Safecracker],
    [EntityNames.Steal]: EntityMap[EntityNames.Steal],
    [EntityNames.Infomantia]: EntityMap[EntityNames.Infomantia],
    [EntityNames.Gambling]: EntityMap[EntityNames.Gambling],
    [EntityNames.Piloting]: EntityMap[EntityNames.Piloting],
  };
}

// === Ремесленные навыки ===
export class CraftingGroup extends Group {
  static readonly name = "Ремесленные навыки";
  static readonly codename = "crafting";
  static readonly icon = "fa-hammer";
  static items = {
    [EntityNames.Enchantment]: EntityMap[EntityNames.Enchantment],
    [EntityNames.Blacksmithing]: EntityMap[EntityNames.Blacksmithing],
    [EntityNames.Leatherworking]: EntityMap[EntityNames.Leatherworking],
    [EntityNames.Woodworking]: EntityMap[EntityNames.Woodworking],
    [EntityNames.JewelryMaking]: EntityMap[EntityNames.JewelryMaking],
    [EntityNames.Cooking]: EntityMap[EntityNames.Cooking],
    [EntityNames.AnimalTraining]: EntityMap[EntityNames.AnimalTraining],
    [EntityNames.Farming]: EntityMap[EntityNames.Farming],
    [EntityNames.Sex]: EntityMap[EntityNames.Sex],
  };
}

// === Специализированные навыки ===
export class SpecializedGroup extends Group {
  static readonly name = "Специализированные навыки";
  static readonly codename = "specialized";
  static readonly icon = "fa-tools";
  static items = {
    [EntityNames.Traps]: EntityMap[EntityNames.Traps],
    [EntityNames.Alchemy]: EntityMap[EntityNames.Alchemy],
    [EntityNames.RewritingTheScrolls]: EntityMap[EntityNames.RewritingTheScrolls],
    [EntityNames.Herbology]: EntityMap[EntityNames.Herbology],
    [EntityNames.ResourceExtraction]: EntityMap[EntityNames.ResourceExtraction],
    [EntityNames.Hunting]: EntityMap[EntityNames.Hunting],
    [EntityNames.Cartography]: EntityMap[EntityNames.Cartography],
  };
}

// === Магические навыки ===
export class MagicalGroup extends Group {
  static readonly name = "Магические навыки";
  static readonly codename = "magical";
  static readonly icon = "fa-magic";
  static items = {
    [EntityNames.Biomancy]: EntityMap[EntityNames.Biomancy],
    [EntityNames.Cryptomagic]: EntityMap[EntityNames.Cryptomagic],
    [EntityNames.WhiteMagic]: EntityMap[EntityNames.WhiteMagic],
    [EntityNames.Psionics]: EntityMap[EntityNames.Psionics],
    [EntityNames.BlackMagic]: EntityMap[EntityNames.BlackMagic],
    [EntityNames.WildMagic]: EntityMap[EntityNames.WildMagic],
  };
}

// === Технические навыки ===
export class TechnicalGroup extends Group {
  static readonly name = "Технические навыки";
  static readonly codename = "technical";
  static readonly icon = "fa-microchip";
  static items = {
    [EntityNames.Gunsmith]: EntityMap[EntityNames.Gunsmith],
    [EntityNames.Mechanics]: EntityMap[EntityNames.Mechanics],
    [EntityNames.Electrics]: EntityMap[EntityNames.Electrics],
    [EntityNames.Metallurgy]: EntityMap[EntityNames.Metallurgy],
    [EntityNames.Implants]: EntityMap[EntityNames.Implants],
    [EntityNames.Analysis]: EntityMap[EntityNames.Analysis],
    [EntityNames.Artistry]: EntityMap[EntityNames.Artistry],
  };
}

// === Специальные навыки ===
export class SpecialGroup extends Group {
  static readonly name = "Специальные навыки";
  static readonly codename = "special";
  static readonly icon = "fa-star";
  static items = {
    [EntityNames.ToughSkin]: EntityMap[EntityNames.ToughSkin],
    [EntityNames.QuickReaction]: EntityMap[EntityNames.QuickReaction],
    [EntityNames.SharpEye]: EntityMap[EntityNames.SharpEye],
    [EntityNames.PowerfulMagic]: EntityMap[EntityNames.PowerfulMagic],
    [EntityNames.PowerOfTheMind]: EntityMap[EntityNames.PowerOfTheMind],
    [EntityNames.PowerOfCharisma]: EntityMap[EntityNames.PowerOfCharisma],
    [EntityNames.SteelFortitude]: EntityMap[EntityNames.SteelFortitude],
    [EntityNames.StyleIcon]: EntityMap[EntityNames.StyleIcon],
  };
}