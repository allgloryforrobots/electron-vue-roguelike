import { LANGUAGES } from "@/shared/config/locale/locale";
import { Base, BaseConstructor } from "../Base/Base";
import { BaseMap, BaseMapType, BaseNames } from "../Meta/Meta";

export class Group extends Base {
  items: DeepPartial<BaseMapType> = {};
  get constructors(): BaseConstructor[] {
    const Ctor = this.constructor as typeof Group & { items?: Record<string, BaseConstructor> };
    return Ctor.items ? Object.values(Ctor.items).filter(Boolean) : [];
  }

  get sortedConstructors(): BaseConstructor[] {
    return [...this.constructors].sort((a, b) => a.name.localeCompare(b.name, LANGUAGES.RU));
  }

  get list(): Base[] {
    return this.constructors.map(Ctor => new Ctor());
  }

  get sortedList(): Base[] {
    return this.sortedConstructors.map(Ctor => new Ctor());
  }
}

// === Основные характеристики ===
export class CharacteristicsGroup extends Group {
  static readonly name = "Основные характеристики";
  static readonly codename = "characteristics";
  static readonly icon = "fa-user";
  static items = {
    [BaseNames.Constitution]: BaseMap[BaseNames.Constitution],
    [BaseNames.Agility]: BaseMap[BaseNames.Agility],
    [BaseNames.Perception]: BaseMap[BaseNames.Perception],
    [BaseNames.Gift]: BaseMap[BaseNames.Gift],
    [BaseNames.Intelligence]: BaseMap[BaseNames.Intelligence],
    [BaseNames.Empathy]: BaseMap[BaseNames.Empathy],
    [BaseNames.Psyche]: BaseMap[BaseNames.Psyche],
    [BaseNames.Appearance]: BaseMap[BaseNames.Appearance],
  };
}

// === Второстепенные характеристики ===
export class SecondaryCharacteristicsGroup extends Group {
  static readonly name = "Второстепенные характеристики";
  static readonly codename = "secondary_characteristics";
  static readonly icon = "fa-user-clock";
  static items = {
    [BaseNames.CombatCapability]: BaseMap[BaseNames.CombatCapability],
    [BaseNames.Sanity]: BaseMap[BaseNames.Sanity],
    [BaseNames.Energy]: BaseMap[BaseNames.Energy],
    [BaseNames.Mana]: BaseMap[BaseNames.Mana],
    [BaseNames.ActionPoints]: BaseMap[BaseNames.ActionPoints],
    [BaseNames.RangeOfVision]: BaseMap[BaseNames.RangeOfVision],
    [BaseNames.HearingRange]: BaseMap[BaseNames.HearingRange],
  };
}

// === Сопротивления ===
export class ResistancesGroup extends Group {
  static readonly name = "Сопротивления";
  static readonly codename = "resistances";
  static readonly icon = "fa-shield-alt";
  static items = {
    [BaseNames.FireResistance]: BaseMap[BaseNames.FireResistance],
    [BaseNames.ColdResistance]: BaseMap[BaseNames.ColdResistance],
    [BaseNames.ElectricityResistance]: BaseMap[BaseNames.ElectricityResistance],
    [BaseNames.PoisonResistance]: BaseMap[BaseNames.PoisonResistance],
    [BaseNames.AcidResistance]: BaseMap[BaseNames.AcidResistance],
    [BaseNames.CrushingResistance]: BaseMap[BaseNames.CrushingResistance],
    [BaseNames.PiercingResistance]: BaseMap[BaseNames.PiercingResistance],
    [BaseNames.CuttingResistance]: BaseMap[BaseNames.CuttingResistance],
    [BaseNames.MagicResistance]: BaseMap[BaseNames.MagicResistance],
    [BaseNames.PsiResistance]: BaseMap[BaseNames.PsiResistance],
    [BaseNames.PhysResistance]: BaseMap[BaseNames.PhysResistance],
  };
}

// === Ближний бой ===
export class CloseCombatGroup extends Group {
  static readonly name = "Ближний бой";
  static readonly codename = "close_combat";
  static readonly icon = "fa-fist-raised";
  static items = {
    [BaseNames.MartialArts]: BaseMap[BaseNames.MartialArts],
    [BaseNames.Knife]: BaseMap[BaseNames.Knife],
    [BaseNames.ShortBlades]: BaseMap[BaseNames.ShortBlades],
    [BaseNames.LongBlades]: BaseMap[BaseNames.LongBlades],
    [BaseNames.MaceAndFlail]: BaseMap[BaseNames.MaceAndFlail],
    [BaseNames.Axes]: BaseMap[BaseNames.Axes],
    [BaseNames.Pole]: BaseMap[BaseNames.Pole],
  };
}

// === Дальний бой ===
export class RangeCombatGroup extends Group {
  static readonly name = "Дальний бой";
  static readonly codename = "range_combat";
  static readonly icon = "fa-bullseye";
  static items = {
    [BaseNames.ThrowsAndSlings]: BaseMap[BaseNames.ThrowsAndSlings],
    [BaseNames.Bow]: BaseMap[BaseNames.Bow],
    [BaseNames.Crossbow]: BaseMap[BaseNames.Crossbow],
    [BaseNames.Firearm]: BaseMap[BaseNames.Firearm],
    [BaseNames.Wand]: BaseMap[BaseNames.Wand],
  };
}

// === Искусность ===
export class FinesseGroup extends Group {
  static readonly name = "Искусность";
  static readonly codename = "finesse";
  static readonly icon = "fa-dice-d20";
  static items = {
    [BaseNames.HorseFight]: BaseMap[BaseNames.HorseFight],
    [BaseNames.CriticalHit]: BaseMap[BaseNames.CriticalHit],
    [BaseNames.DualWield]: BaseMap[BaseNames.DualWield],
    [BaseNames.AttackInFlight]: BaseMap[BaseNames.AttackInFlight],
    [BaseNames.Ninjutsu]: BaseMap[BaseNames.Ninjutsu],
    [BaseNames.HeavyWeapons]: BaseMap[BaseNames.HeavyWeapons],
    [BaseNames.ExoticWeapons]: BaseMap[BaseNames.ExoticWeapons],
  };
}

// === Защита ===
export class DefenceGroup extends Group {
  static readonly name = "Защита";
  static readonly codename = "defence";
  static readonly icon = "fa-shield";
  static items = {
    [BaseNames.Shield]: BaseMap[BaseNames.Shield],
    [BaseNames.Parry]: BaseMap[BaseNames.Parry],
    [BaseNames.Evasion]: BaseMap[BaseNames.Evasion],
    [BaseNames.LightArmor]: BaseMap[BaseNames.LightArmor],
    [BaseNames.HeavyArmor]: BaseMap[BaseNames.HeavyArmor],
    [BaseNames.UnarmoredCombat]: BaseMap[BaseNames.UnarmoredCombat],
  };
}

// === Физические навыки ===
export class PhysicalGroup extends Group {
  static readonly name = "Физические навыки";
  static readonly codename = "physical";
  static readonly icon = "fa-running";
  static items = {
    [BaseNames.Swimming]: BaseMap[BaseNames.Swimming],
    [BaseNames.Climbing]: BaseMap[BaseNames.Climbing],
    [BaseNames.Acrobatics]: BaseMap[BaseNames.Acrobatics],
    [BaseNames.Athletics]: BaseMap[BaseNames.Athletics],
    [BaseNames.Stealth]: BaseMap[BaseNames.Stealth],
    [BaseNames.Scouting]: BaseMap[BaseNames.Scouting],
    [BaseNames.Augmentations]: BaseMap[BaseNames.Augmentations],
  };
}

// === Социальные навыки ===
export class SocialGroup extends Group {
  static readonly name = "Социальные навыки";
  static readonly codename = "social";
  static readonly icon = "fa-users";
  static items = {
    [BaseNames.Resolve]: BaseMap[BaseNames.Resolve],
    [BaseNames.Intimidation]: BaseMap[BaseNames.Intimidation],
    [BaseNames.Bluff]: BaseMap[BaseNames.Bluff],
    [BaseNames.Diplomacy]: BaseMap[BaseNames.Diplomacy],
    [BaseNames.Manipulation]: BaseMap[BaseNames.Manipulation],
    [BaseNames.Seduction]: BaseMap[BaseNames.Seduction],
    [BaseNames.Psychology]: BaseMap[BaseNames.Psychology],
  };
}

// === Интеллектуальные навыки ===
export class IntellectualGroup extends Group {
  static readonly name = "Интеллектуальные навыки";
  static readonly codename = "intellectual";
  static readonly icon = "fa-brain";
  static items = {
    [BaseNames.Acting]: BaseMap[BaseNames.Acting],
    [BaseNames.Investigation]: BaseMap[BaseNames.Investigation],
    [BaseNames.Medicine]: BaseMap[BaseNames.Medicine],
    [BaseNames.Knowledge]: BaseMap[BaseNames.Knowledge],
    [BaseNames.Trade]: BaseMap[BaseNames.Trade],
    [BaseNames.Concentration]: BaseMap[BaseNames.Concentration],
    [BaseNames.Artifacts]: BaseMap[BaseNames.Artifacts],
    [BaseNames.Tactics]: BaseMap[BaseNames.Tactics],
  };
}

// === Воровские навыки ===
export class ThievingGroup extends Group {
  static readonly name = "Воровские навыки";
  static readonly codename = "thieving";
  static readonly icon = "fa-mask";
  static items = {
    [BaseNames.Safecracker]: BaseMap[BaseNames.Safecracker],
    [BaseNames.Steal]: BaseMap[BaseNames.Steal],
    [BaseNames.Infomantia]: BaseMap[BaseNames.Infomantia],
    [BaseNames.Gambling]: BaseMap[BaseNames.Gambling],
    [BaseNames.Piloting]: BaseMap[BaseNames.Piloting],
  };
}

// === Ремесленные навыки ===
export class CraftingGroup extends Group {
  static readonly name = "Ремесленные навыки";
  static readonly codename = "crafting";
  static readonly icon = "fa-hammer";
  static items = {
    [BaseNames.Enchantment]: BaseMap[BaseNames.Enchantment],
    [BaseNames.Blacksmithing]: BaseMap[BaseNames.Blacksmithing],
    [BaseNames.Leatherworking]: BaseMap[BaseNames.Leatherworking],
    [BaseNames.Woodworking]: BaseMap[BaseNames.Woodworking],
    [BaseNames.JewelryMaking]: BaseMap[BaseNames.JewelryMaking],
    [BaseNames.Cooking]: BaseMap[BaseNames.Cooking],
    [BaseNames.AnimalTraining]: BaseMap[BaseNames.AnimalTraining],
    [BaseNames.Farming]: BaseMap[BaseNames.Farming],
    [BaseNames.Sex]: BaseMap[BaseNames.Sex],
  };
}

// === Специализированные навыки ===
export class SpecializedGroup extends Group {
  static readonly name = "Специализированные навыки";
  static readonly codename = "specialized";
  static readonly icon = "fa-tools";
  static items = {
    [BaseNames.Traps]: BaseMap[BaseNames.Traps],
    [BaseNames.Alchemy]: BaseMap[BaseNames.Alchemy],
    [BaseNames.RewritingTheScrolls]: BaseMap[BaseNames.RewritingTheScrolls],
    [BaseNames.Herbology]: BaseMap[BaseNames.Herbology],
    [BaseNames.ResourceExtraction]: BaseMap[BaseNames.ResourceExtraction],
    [BaseNames.Hunting]: BaseMap[BaseNames.Hunting],
    [BaseNames.Cartography]: BaseMap[BaseNames.Cartography],
  };
}

// === Магические навыки ===
export class MagicalGroup extends Group {
  static readonly name = "Магические навыки";
  static readonly codename = "magical";
  static readonly icon = "fa-magic";
  static items = {
    [BaseNames.Biomancy]: BaseMap[BaseNames.Biomancy],
    [BaseNames.Cryptomagic]: BaseMap[BaseNames.Cryptomagic],
    [BaseNames.WhiteMagic]: BaseMap[BaseNames.WhiteMagic],
    [BaseNames.Psionics]: BaseMap[BaseNames.Psionics],
    [BaseNames.BlackMagic]: BaseMap[BaseNames.BlackMagic],
    [BaseNames.WildMagic]: BaseMap[BaseNames.WildMagic],
  };
}

// === Технические навыки ===
export class TechnicalGroup extends Group {
  static readonly name = "Технические навыки";
  static readonly codename = "technical";
  static readonly icon = "fa-microchip";
  static items = {
    [BaseNames.Gunsmith]: BaseMap[BaseNames.Gunsmith],
    [BaseNames.Mechanics]: BaseMap[BaseNames.Mechanics],
    [BaseNames.Electrics]: BaseMap[BaseNames.Electrics],
    [BaseNames.Metallurgy]: BaseMap[BaseNames.Metallurgy],
    [BaseNames.Implants]: BaseMap[BaseNames.Implants],
    [BaseNames.Analysis]: BaseMap[BaseNames.Analysis],
    [BaseNames.Artistry]: BaseMap[BaseNames.Artistry],
  };
}

// === Специальные навыки ===
export class SpecialGroup extends Group {
  static readonly name = "Специальные навыки";
  static readonly codename = "special";
  static readonly icon = "fa-star";
  static items = {
    [BaseNames.ToughSkin]: BaseMap[BaseNames.ToughSkin],
    [BaseNames.QuickReaction]: BaseMap[BaseNames.QuickReaction],
    [BaseNames.SharpEye]: BaseMap[BaseNames.SharpEye],
    [BaseNames.PowerfulMagic]: BaseMap[BaseNames.PowerfulMagic],
    [BaseNames.PowerOfTheMind]: BaseMap[BaseNames.PowerOfTheMind],
    [BaseNames.PowerOfCharisma]: BaseMap[BaseNames.PowerOfCharisma],
    [BaseNames.SteelFortitude]: BaseMap[BaseNames.SteelFortitude],
    [BaseNames.StyleIcon]: BaseMap[BaseNames.StyleIcon],
  };
}