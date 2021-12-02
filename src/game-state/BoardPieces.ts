import GamePiece, { PieceType } from "../game-objects/GamePiece";

export default class BoardPieces {
    private pieceList: GamePiece[];

    constructor() {
        this.pieceList = [];
    }

    public findPieceAt(xPosition: number, yPosition: number): GamePiece | undefined {
        return this.pieceList
            .find(piece => piece.getXPosition() === xPosition && piece.getYPosition() === yPosition);
    }

    public placeNewPiece(xPosition: number, yPosition: number, pieceType: PieceType, isFlipped: boolean = false): void {
        // Is there already a piece here?
        if (this.findPieceAt(xPosition, yPosition))
            console.warn(
                `A piece has been added to a square that already had a piece on it!\n` +
                `This will probably have some weird consequences.\n` +
                `Attempted to place a ${pieceType} piece at (${xPosition}, ${yPosition}),` +
                `where there is already a ${this.findPieceAt(xPosition, yPosition)?.getPieceType()} piece.`
            );

        this.pieceList.push(new GamePiece(xPosition, yPosition, pieceType, isFlipped));
    }

    public movePiece(xFrom: number, yFrom: number, xTo: number, yTo: number): void {
        try {
            this.findPieceAt(xFrom, yFrom)?.moveTo(xTo, yTo);
        }
        catch(error) {
            console.error(`You tried to move a piece at (${xFrom}, ${yFrom}), but there is no piece there!`);
        }
    }

    public flipPiece(xPosition: number, yPosition: number): void {
        try {
            this.findPieceAt(xPosition, yPosition)?.flip();
        }
        catch(error) {
            console.error(`You tried to flip a piece at (${xPosition}, ${yPosition}), but there is no piece there!`);
        }
    }

    public removePiece(xPosition: number, yPosition: number): void {
        // TODO: Error handling
        const indexToRemove = this.pieceList
            .findIndex(piece => piece.getXPosition() === xPosition && piece.getYPosition() === yPosition)
        if (indexToRemove !== -1) this.pieceList.splice(indexToRemove, 1);
    }
}