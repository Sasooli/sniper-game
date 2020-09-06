export default class BoardState {
    get boardHeight(): number {
        return this._boardHeight;
    }
    get boardWidth(): number {
        return this._boardWidth;
    }
    private readonly _boardWidth: number;
    private readonly _boardHeight: number;
    private readonly terrain: TerrainTypes[][];

    constructor(boardWidth: number, boardHeight: number) {
        this._boardWidth = boardWidth;
        this._boardHeight = boardHeight;
        this.terrain = Array(boardWidth).fill(0).map(() => Array(boardHeight).fill(TerrainTypes.Open));
    }

    public getTerrain(x: number, y: number): TerrainTypes {
        return this.terrain[x][y];
    }

    public setTerrain(x: number, y: number, terrain: TerrainTypes) {
        this.terrain[x][y] = terrain;
    }

    public getAllTerrain(): TerrainTypes[][] {
        return this.terrain;
    }
}

export enum TerrainTypes {
    Open,
    Rubble,
    Building,
    Tower
}