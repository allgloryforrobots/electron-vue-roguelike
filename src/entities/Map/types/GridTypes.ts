import { GroundCell } from "@/shared/model/Cell/Cell";

export interface IMapGeneratorOptions {
  width: number;
  height: number;
  treeDensity: number;
  clusterDensity: number;
}

export type MapType = Array<GroundCell[]>;


export interface PathfindingCell extends GroundCell {
  x: number;
  y: number;

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