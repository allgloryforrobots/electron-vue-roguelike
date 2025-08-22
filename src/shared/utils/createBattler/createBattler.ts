export interface IOptions {
    codename: string;
}

export class Battler {
    id: string;

    // -- первичные характеристики

    // телосложение
    constitution = 10;
    // проворство
    agility = 10;

    // восприятие
    perception = 10;
    // дар
    gift = 10;
    // интеллект
    intelligence = 10;

    // эмпатия
    empathy = 10;
    // психика
    psyche = 10;
    // внешность
    appearance = 10;

    // -- константы

    // базовый шанс попадания
    attackBase = 60;
    // бонус к защите при блоке щитом
    shieldBonus = 20;
    // бонус к защите при парированием оружием
    parryBonus = 10;

    // -- навыки

    // боевые искусства
    martial_arts = 10;
    // ножевой бой
    knife = 10;
    // короткие клинки
    short_blades = 10;
    // длинные клинки
    long_blades = 10;
    // булава и цеп
    mace_and_flail = 10;
    // секиры
    axes = 10;
    // древковое
    pole = 10;
    // броски и праща
    throws_and_slings = 10;

    // экзотическое оружие (духовая трубка с дротиками, нунчаки и т.д.)
    exotic_weapons = 10;
    // конный бой
    horse_fight = 10;

    // лук
    bow = 10;
    // арбалет
    crossbow = 10;
    // огнестрельное
    firearm = 10;
    // тяжелое оружие (гранатомет, баллиста, пушка с ядрами)
    heavy_weapons = 10;

    // щит
    shield = 10;
    // парирование
    parry = 10;
    // уклонение
    evasion=  10;


    constructor(options: IOptions) {
        this.id = crypto.randomUUID();
        Object.assign(this, options);
    }

    hitChance() {
        const attack = this.attackBase + this.constitution;
        return attack;
    }

    defenceChance() {
        const defence = this.agility;
        return defence;
    }

}