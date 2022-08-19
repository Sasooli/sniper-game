import Arc from "./Arc";
import Direction from "./Direction";

export default class ArcList{
    private arcs: Arc[];
    private isUniversal: boolean;

    public constructor() {
        this.arcs = [];
        this.isUniversal = false;
    }

    public strictlyContains(direction: Direction): boolean {
        if (this.isUniversal) return true;
        return this.arcs
            .map(arc => arc.strictlyContains(direction))
            .includes(true);
    }

    public mergeArc(arcToMerge: Arc) {

        let startArc: Arc | null = null;
        let endArc: Arc | null = null;

        for (let arc of this.arcs) {
            if (arc.looselyContains(arcToMerge.start)) startArc = arc;
            if (arc.looselyContains(arcToMerge.end)) endArc = arc;
        }

        if (this.isUniversal) {
            return;
        } else if (startArc && endArc && startArc === endArc) {
            if (!new Arc(startArc.start, arcToMerge.end).looselyContains(arcToMerge.start)) {
                this.arcs = [];
                this.isUniversal = true;
            }
        } else if (startArc && endArc) {
            this.addArcAndTrimList(new Arc(startArc.start, endArc.end));
        } else if (!startArc && endArc) {
            this.addArcAndTrimList(new Arc(arcToMerge.start, endArc.end));
        } else if (startArc && !endArc) {
            this.addArcAndTrimList(new Arc(startArc.start, arcToMerge.end));
        } else {
            this.addArcAndTrimList((arcToMerge));
        }
    }

    private addArcAndTrimList(arcToAdd: Arc) {
        const newArcs: Arc[] = [];
        for (let arc of this.arcs) {
            if (!arcToAdd.looselyContains(arc.start)) {
                newArcs.push(arc)
            }
        }
        newArcs.push(arcToAdd);
        this.arcs = newArcs;
    }

    public getLength() {
        return this.isUniversal ? -1 : this.arcs.length;
    }
}