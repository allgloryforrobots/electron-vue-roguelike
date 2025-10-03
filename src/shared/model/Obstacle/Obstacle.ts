import { Base } from "../Base/Base";

export class Obstacle extends Base {
  constructor() {
      super();
  }
}

export class Tree extends Obstacle {
  static readonly name = "Дерево";
  static readonly codename = "Tree";
  static readonly icon = "🌳";
}