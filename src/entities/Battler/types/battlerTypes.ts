export interface IOptions {
    codename: string;
    constitution?: number;
    agility?: number;
    perception?: number;
    gift?: number;
    intelligence?: number;
    empathy?: number;
    psyche?: number;

    martial_arts?: number;
    knife?: number;
    short_blades?: number;
    long_blades?: number;
    mace_and_flail?: number;
    axes?: number;
    pole?: number;
    throws_and_slings?: number;
    exotic_weapons?: number;
    // horse_fight?: number;
    critical_hit?: number;
    dual_wield?: number;
    // attack_in_flight?: number;
    // ninjutsu?: number;
    bow?: number;
    crossbow?: number;
    firearm?: number;
    heavy_weapons?: number;
    shield?: number;
    parry?: number;
    evasion?: number;
    light_armor?: number;
    heavy_armor?: number;
    unarmored_combat?: number;

    swimming?: number;
    // climbing?: number;
    // acrobatics?: number;
    athletics?: number;
    stealth?: number;
    scouting?: number;

    resolve?: number;
    concentration?: number;
    biomancy?: number;
    cryptomagic?: number;
    white_magic?: number;
    psionics?: number;
    black_magic?: number;
    wild_magic?: number;
}

export enum RACES {
    HUMAN = 'human'
}

export enum CLASSES {
    ROGUE = 'rogue'
}

export enum PROFESSIONS {
    NOPE = 'nope'
}
