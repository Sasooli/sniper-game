export default class BoardState {
    private boardWidth: number;
    private boardHeight: number;
    private terrain: TerrainTypes[][];

    constructor(boardWidth: number, boardHeight: number) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.terrain = Array(boardWidth).fill(0).map(() => Array(boardHeight).fill(TerrainTypes.Open));
    }

    public getTerrain(x: number, y: number): TerrainTypes {
        return this.terrain[x][y];
    }

    public setTerrain(x: number, y: number, terrain: TerrainTypes) {
        this.terrain[x][y] = terrain;
    }
}

export enum TerrainTypes {
    Open,
    Rubble,
    Building,
    Tower
}