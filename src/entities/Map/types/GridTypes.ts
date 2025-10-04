import { GroundCell } from "@/shared/model/Cell/Cell";

export interface IMapGeneratorOptions {
  width: number;
  height: number;
  treeDensity: number;
  clusterDensity: number;
}

export type MapType = GroundCell[][];
