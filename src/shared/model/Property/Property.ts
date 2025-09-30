
export interface PropertyStatic {
  readonly name: string;
  readonly codename: string;
  readonly icon?: string;
}

export type PropertyConstructor = (new () => Property) & PropertyStatic;

/** базовый класс для любой Property */
export class Property {
  name!: string;
  codename!: string;
  icon?: string;

  constructor() {
    const Ctor = this.constructor as PropertyConstructor;
    this.name = Ctor.name;
    this.codename = Ctor.codename;
    this.icon = Ctor.icon || '';
  }
}

