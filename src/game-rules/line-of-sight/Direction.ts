export default class Direction {
    private _x: number;
    private _y: number;

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    public constructor(x: number, y: number) {
        if (x === 0) throw new Error("invalid argument: x cannot be 0");
        if (y === 0) throw new Error("invalid argument: y cannot be 0");
        this._x = x;
        this._y = y;
    }
}