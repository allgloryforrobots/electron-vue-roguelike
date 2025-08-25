import { Cell } from "../lib/MapGenerator";

export interface IMapGeneratorOptions {
  width: number;
  height: number;
  treeDensity: number;
  clusterDensity: number;
}

export type MapType = Array<Cell[]>;

export interface ICellOptions {
  type: TerrainsTypesEnum;
}

export enum TerrainsTypesEnum {
  EMPTY = 'empty',
  SINGLE_TREE = 'singleTree',
  CLUSTER_TREE = 'cluster_tree',
}

export interface PathfindingCell {
  x: number;
  y: number;
  type: TerrainsTypesEnum;
  f: number; // f = g + h
  g: number; // стоимость пути от старта
  h: number; // эвристическая оценка до цели
  parent: PathfindingCell | null;
  closed: boolean;
  opened: boolean;
}

export interface PathfindingResult {
  path: { x: number; y: number }[];
  success: boolean;
  steps: number;
}