export interface IMapGeneratorOptions {
    width: number;
    height: number;
    treeDensity: number;
    clusterDensity: number;
}

export type MapType = Array<ICell[]>;

export interface ICell {
    type: TerrainsTypesEnum;
}

export enum TerrainsTypesEnum {
    GRASS = 0,
    SINGLE_TREE = 1,
    CLUSTER_TREE = 2
}