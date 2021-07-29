import {MAXBOARDSIZE} from "../App";
import GamePiece from "../game-objects/GamePiece";

export enum TerrainTypes {
    Open,
    Rubble,
    Building,
    Tower
}

export default class BoardState {
    get boardHeight(): number {
        return this._boardHeight;
    }
    get boardWidth(): number {
        return this._boardWidth;
    }
    private _boardWidth: number;
    private _boardHeight: number;
    private readonly terrain: TerrainTypes[][];
    private readonly pieces: (GamePiece | undefined)[][];

    constructor(boardWidth: number, boardHeight: number) {
        this._boardWidth = boardWidth;
        this._boardHeight = boardHeight;
        this.terrain = Array(boardWidth).fill(0).map(() => Array(boardHeight).fill(TerrainTypes.Open));
        this.pieces = Array(boardWidth).fill(0).map(() => Array(boardHeight).fill(undefined));
    }

    public getPiece(x: number, y: number): GamePiece | undefined {
        return this.pieces[x][y];
    }

    public setPiece(x: number, y: number, piece: GamePiece) {
        this.pieces[x][y] = piece;
    }

    public flipPiece(x: number, y: number) {
        this.pieces[x][y]?.flip();
    }

    public removePiece(x: number, y: number) {
        this.pieces[x][y] = undefined;
    }

    public getAllPieces(): (GamePiece | undefined)[][] {
        return this.pieces;
    }

    public hasPiece(x: number, y: number): boolean {
        return !!this.pieces[x][y];
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

    public addRowTop(): void {
        if (this._boardHeight + 1 > MAXBOARDSIZE) throw new Error("Failed to add row - board is already maximum height");
        this.terrain.forEach((col) => col.unshift(TerrainTypes.Open));
        this.pieces.forEach((col) => col.unshift(undefined));
        this._boardHeight++;
    }

    public addRowBottom(): void {
        if (this._boardHeight + 1 > MAXBOARDSIZE) throw new Error("Failed to add row - board is already maximum height");
        this.terrain.forEach((col) => col.push(TerrainTypes.Open));
        this.pieces.forEach((col) => col.push(undefined));
        this._boardHeight++;
    }

    public addColLeft(): void {
        if (this._boardWidth + 1 > MAXBOARDSIZE) throw new Error("Failed to add column - board is already maximum width");
        this.terrain.unshift(Array(this._boardHeight).fill(TerrainTypes.Open));
        this.pieces.unshift(Array(this._boardHeight).fill(undefined));
        this._boardWidth++;
    }

    public addColRight(): void {
        if (this._boardWidth + 1 > MAXBOARDSIZE) throw new Error("Failed to add column - board is already maximum width");
        this.terrain.push(Array(this._boardHeight).fill(TerrainTypes.Open));
        this.pieces.push(Array(this._boardHeight).fill(undefined));
        this._boardWidth++;
    }

    public removeRowTop(): void {
        if (this._boardHeight === 1) throw new Error("Failed to remove row - board is already minimum height");
        this.terrain.forEach((col) => col.shift());
        this.pieces.forEach((col) => col.shift());
        this._boardHeight--;
    }

    public removeRowBottom(): void {
        if (this._boardHeight === 1) throw new Error("Failed to remove row - board is already minimum height");
        this.terrain.forEach((col) => col.pop());
        this.pieces.forEach((col) => col.pop());
        this._boardHeight--;
    }

    public removeColLeft(): void {
        if (this.boardWidth === 1) throw new Error("Failed to remove column - board is already minimum width");
        this.terrain.shift();
        this.pieces.shift();
        this._boardWidth--;
    }

    public removeColRight(): void {
        if (this.boardWidth === 1) throw new Error("Failed to remove column - board is already minimum width");
        this.terrain.pop();
        this.pieces.pop();
        this._boardWidth--;
    }
}