export default class GamePiece {
    private isFlipped: boolean;
    private readonly pieceType: PieceType;

    constructor(pieceType: PieceType, isFlipped: boolean = false) {
        this.pieceType = pieceType;
        this.isFlipped = isFlipped;
    }

    public getIsFlipped(): boolean {
        return this.isFlipped;
    }

    public getPieceType(): PieceType {
        return this.pieceType;
    }

    public flip(): void {
        this.isFlipped = !this.isFlipped;
    }
}

export enum PieceType {
    None,
    Sniper,
    Soldier,
}
