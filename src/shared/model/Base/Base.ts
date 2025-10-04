
export interface BaseStatic {
  readonly name: string;
  readonly codename: string;
  readonly icon?: string;
}

export type BaseConstructor = (new () => Base) & BaseStatic;

export interface IBaseOptions {
  id?: string;
}

/** базовый класс для любой Base */
export class Base {
  name!: string;
  codename!: string;
  icon?: string;
  id: string;

  constructor(options: IBaseOptions = {}) {

    this.id = options.id || crypto.randomUUID();

    const Ctor = this.constructor as BaseConstructor;
    this.name = Ctor.name;
    this.codename = Ctor.codename;
    this.icon = Ctor.icon || '';
  }
}

