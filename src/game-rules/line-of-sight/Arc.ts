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

    public strictlyContains(candidate: Direction): boolean {
        function strictlyGreater(a: number, b: number): boolean {
            return a > b;
        }
        return this.containsDirection(candidate, strictlyGreater);
    }

    public looselyContains(candidate: Direction): boolean {
        function looselyGreater(a: number, b: number): boolean {
            return a >= b;
        }
        return this.containsDirection(candidate, looselyGreater);
    }

    public containsDirection(candidate: Direction, gtr: Function): boolean {
        const x_start = this._start.x;
        const y_start = this._start.y;
        const x_end = this._end.x;
        const y_end = this._end.y;
        const x_candidate = candidate.x;
        const y_candidate = candidate.y;

        const grad_start = this._start.y / this._start.x;
        const grad_end = this._end.y / this._end.x;
        const grad_candidate = candidate.y / candidate.x;

        if (x_start * x_end > 0) {
            if (x_candidate * x_end > 0) {
                if (gtr(grad_start, grad_candidate) && gtr(grad_candidate, grad_end)) return true;
                if (grad_start >= grad_end) return false;
                if (gtr(grad_candidate, grad_end) || gtr(grad_start, grad_candidate)) return true;
                return false;
            } else {
                return grad_end > grad_start;
            }
        } else {
            if (x_candidate * x_end > 0) {
                return gtr(grad_candidate, grad_end);
            } else {
                return gtr(grad_start, grad_candidate);
            }
        }
    }
}