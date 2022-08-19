import Arc from "./Arc";
import Direction from "./Direction";
import BoardState, {TerrainTypes} from "../../game-state/BoardState";
import ArcList from "./ArcList";

export default class LineOfSight {

    public static findLinesOfSight(boardState: BoardState, originX: number, originY: number): boolean[][] {
        let absYDisplacement, xCoord, yCoord: number;
        let centerDirection: Direction;

        if (!boardState.validateCoordinates(originX,originY)) throw new Error("Invalid origin coordinates")

        const arcList = new ArcList();
        const linesOfSight: boolean[][] = Array(boardState.boardWidth).fill(null)
          .map(() => Array(boardState.boardHeight).fill(null));

        const maxDistance = Math.max(originX, boardState.boardWidth) + Math.max(originX, boardState.boardHeight - originY)

        for (let distance = 1; distance <= maxDistance; distance++) {
            for (let xDisplacement = -distance; xDisplacement <= distance; xDisplacement++) {
                absYDisplacement = distance - Math.abs(xDisplacement);
                const yDisplacements = absYDisplacement === 0 ? [0] : [-absYDisplacement, absYDisplacement];
                for (let yDisplacement of yDisplacements) {
                    yCoord = originY + yDisplacement;
                    xCoord = originX + xDisplacement;
                    if (boardState.validateCoordinates(xCoord, yCoord)) {
                        centerDirection = new Direction(xDisplacement, yDisplacement);
                        linesOfSight[xCoord][yCoord] = !arcList.strictlyContains(centerDirection);
                        if (boardState.getAllTerrain()[xCoord][yCoord] === TerrainTypes.Building) {
                            arcList.mergeArc(this.getEnclosingArc(xDisplacement, yDisplacement));
                        }
                    }
                }
            }
        }
        return linesOfSight;
    }

    public static getEnclosingArc(xDisplacement: number, yDisplacement: number): Arc {
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
