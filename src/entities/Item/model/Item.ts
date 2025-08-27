export interface IItemOptions {
    name: string;
    codename: string;
}

export class Item {
    name: string;
    codename: string;

    constructor(options: IItemOptions) {
        this.name = options.name;
        this.codename = options.codename;
    }
}