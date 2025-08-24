export interface IMapHandlerOptions {
    width: number;
    height: number;
    treeDensity: number;
    clusterDensity: number;
}

export type MapType = Array<ICell[]>;

export interface ICell {
    type: TerrainsTypesEnum;
    // только для тестов алгоритма нахождения пути
    isPath?: boolean
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