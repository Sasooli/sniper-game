import Arc from "./Arc";
import Direction from "./Direction";

export default class LineOfSight {

    public static EnclosingArc(xDisplacement: number, yDisplacement: number): Arc {
        let startDirection, endDirection: Direction;

        const topLeft = new Direction(xDisplacement - 0.5, yDisplacement + 0.5);
        const topRight = new Direction(xDisplacement + 0.5, yDisplacement + 0.5);
        const bottomLeft = new Direction(xDisplacement - 0.5, yDisplacement - 0.5);
        const bottomRight = new Direction(xDisplacement + 0.5, yDisplacement - 0.5);

        if (xDisplacement > 0 && yDisplacement >= 0) {
            startDirection = topLeft;
        } else if (xDisplacement >= 0 && yDisplacement < 0) {
            startDirection = topRight;
        } else if (xDisplacement < 0 && yDisplacement <= 0) {
            startDirection = bottomRight;
        } else if (xDisplacement <= 0 && yDisplacement > 0) {
            startDirection = bottomLeft;
        } else {
            throw new Error("invalid displacement")
        }

        if (xDisplacement <= 0 && yDisplacement < 0) {
            endDirection = topLeft;
        } else if (xDisplacement < 0 && yDisplacement >= 0) {
            endDirection = topRight;
        } else if (xDisplacement >= 0 && yDisplacement > 0) {
            endDirection = bottomRight;
        } else if (xDisplacement > 0 && yDisplacement <= 0) {
            endDirection = bottomLeft;
        } else {
            throw new Error("invalid displacement")
        }

        return new Arc(startDirection, endDirection);
    }
}