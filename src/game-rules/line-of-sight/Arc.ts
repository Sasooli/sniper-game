import Direction from "./Direction";

export default class Arc {
    private readonly _start: Direction;
    private readonly _end: Direction;

    get end(): Direction {
        return this._end;
    }
    get start(): Direction {
        return this._start;
    }

    public constructor(start: Direction, end: Direction) {
        this._start = start;
        this._end = end;
    }

    public containsDirection(direction: Direction): boolean {
        // TODO: implement
        return false;
    }
}