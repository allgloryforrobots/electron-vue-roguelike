import { Battler } from "@/shared/model/Battler/Battler";
import { GroundCell, MoveCosts } from "@/shared/model/Cell/Cell";
import { Obstacle } from "@/shared/model/Obstacle/Obstacle";

export interface IMapGeneratorOptions {
  width: number;
  height: number;
  treeDensity: number;
  clusterDensity: number;
}

export type MapType = GroundCell[][];

interface IPathfindingCellOptions {
  x: number;
  y: number;
  moveCost: MoveCosts;
  battler: Battler | null;
  obstacle: Obstacle | null;
}

export class PathfindingCell extends GroundCell {
  x: number;
  y: number;

  f: number = 0; // f = g + h
  g: number = 0; // стоимость пути от старта
  h: number = 0; // эвристическая оценка до цели
  parent: PathfindingCell | null = null;
  closed: boolean = false;
  opened: boolean = false;

  constructor(options: IPathfindingCellOptions) {
    super()
    this.x = options.x;
    this.y = options.y;
    this.moveCost = options.moveCost;
    this.battler =  options.battler;
    this.obstacle =  options.obstacle;
  }
}

export interface PathfindingResult {
  path: { x: number; y: number }[];
  success: boolean;
  steps: number;
}