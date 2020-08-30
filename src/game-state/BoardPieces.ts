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
}