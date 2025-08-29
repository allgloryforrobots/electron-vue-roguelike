  const testItems = [
	// ТЯЖЕЛАЯ БРОНЯ
	new Item({
		name: "Стальной полный шлем",
		codename: "steel_great_helmet",
		slot: InventorySlotItemType.HEAD,
		lockSlots: [],
		itemType: itemTypes.helmet,
		icon: itemIconsByType.heavy.helmet,
		armorType: "heavy",
		marker: itemIconsByType.heavy.marker
	}),
	new Item({
		name: "Наплечье дракона",
		codename: "dragon_pauldrons",
		slot: InventorySlotItemType.LEGS,
		lockSlots: [],
		itemType: itemTypes.boots,
		icon: itemIconsByType.heavy.shoulders,
		armorType: "heavy",
		marker: itemIconsByType.heavy.marker
	}),
	new Item({
		name: "Доспех платиновой стражи",
		codename: "platinum_guard_armor",
		slot: InventorySlotItemType.BODY,
		lockSlots: [],
		itemType: itemTypes.armor,
		icon: itemIconsByType.heavy.chest,
		armorType: "heavy",
		marker: itemIconsByType.heavy.marker
	}),

	// СРЕДНЯЯ БРОНЯ
	new Item({
		name: "Кожаная шляпа следопыта",
		codename: "ranger_leather_hat",
		slot: InventorySlotItemType.HEAD,
		lockSlots: [],
		itemType: itemTypes.helmet,
		icon: itemIconsByType.medium.helmet,
		armorType: "medium",
		marker: itemIconsByType.medium.marker
	}),
	new Item({
		name: "Кольчужный доспех",
		codename: "chainmail_armor",
		slot: InventorySlotItemType.BODY,
		lockSlots: [],
		itemType: itemTypes.armor,
		icon: itemIconsByType.medium.chest,
		armorType: "medium",
		marker: itemIconsByType.medium.marker
	}),
	new Item({
		name: "Щит кольчужного плетения",
		codename: "chainmail_shield",
		slot: InventorySlotItemType.LEFT_HAND,
		lockSlots: [],
		itemType: itemTypes.shield,
		icon: itemIconsByType.medium.shield,
		armorType: "medium",
		marker: itemIconsByType.medium.marker
	}),

	// ЛЕГКАЯ БРОНЯ
	new Item({
		name: "Кожаный клобук",
		codename: "leather_cap",
		slot: InventorySlotItemType.HEAD,
		lockSlots: [],
		itemType: itemTypes.helmet,
		icon: itemIconsByType.light.helmet,
		armorType: "light",
		marker: itemIconsByType.light.marker
	}),
	new Item({
		name: "Кожаная куртка",
		codename: "leather_jacket",
		slot: InventorySlotItemType.BODY,
		lockSlots: [],
		itemType: itemTypes.armor,
		icon: itemIconsByType.light.chest,
		armorType: "light",
		marker: itemIconsByType.light.marker
	}),
	new Item({
		name: "Перчатки ловкости",
		codename: "agility_gloves",
		slot: InventorySlotItemType.ARMS,
		lockSlots: [],
		itemType: itemTypes.gloves,
		icon: itemIconsByType.light.gloves,
		armorType: "light",
		marker: itemIconsByType.light.marker
	}),
];

