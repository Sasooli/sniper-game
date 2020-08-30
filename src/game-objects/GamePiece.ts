export default class GamePiece {
    private xPosition: number;
    private yPosition: number;
    private isFlipped: boolean;
    private readonly pieceType: PieceType;

    constructor(xPosition: number, yPosition: number, pieceType: PieceType, isFlipped: boolean = false) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.pieceType = pieceType;
        this.isFlipped = isFlipped;
    }

    public getCoordinates(): [number, number] {
        return [this.xPosition, this.yPosition];
    }

    public getIsFlipped(): boolean {
        return this.isFlipped;
    }

    public getPieceType(): PieceType {
        return this.pieceType;
    }

    public isAtLocation(xPosition: number, yPosition: number): boolean {
        return this.xPosition === xPosition && this.yPosition === yPosition;
    }

    public moveTo(newXPosition: number, newYPosition: number): void {
        this.xPosition = newXPosition;
        this.yPosition = newYPosition;
    }

    public flip(): void {
        this.isFlipped = !this.isFlipped;
    }
}

export enum PieceType {
    Sniper,
    Soldier,
}
