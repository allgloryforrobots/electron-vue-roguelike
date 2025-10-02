
export interface BaseStatic {
  readonly name: string;
  readonly codename: string;
  readonly icon?: string;
}

export type BaseConstructor = (new () => Base) & BaseStatic;

/** базовый класс для любой Base */
export class Base {
  name!: string;
  codename!: string;
  icon?: string;

  constructor() {
    const Ctor = this.constructor as BaseConstructor;
    this.name = Ctor.name;
    this.codename = Ctor.codename;
    this.icon = Ctor.icon || '';
  }
}

