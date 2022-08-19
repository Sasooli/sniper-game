import React from 'react';
import Direction from "../Direction";
import LineOfSight from "../LineOfSight";
import BoardState, {TerrainTypes} from "../../../game-state/BoardState";

describe('LineOfSight', () => {
    describe('getEnclosingArc', () => {

        it('above and right of origin', () => {
            const expectedStart = new Direction(0.5, 1.5);
            const expectedEnd = new Direction(1.5, 0.5);

            const arc = LineOfSight.getEnclosingArc(1,1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('above and left of origin', () => {
            const expectedStart = new Direction(1.5, -0.5);
            const expectedEnd = new Direction(0.5, -1.5);

            const arc = LineOfSight.getEnclosingArc(1,-1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below and right of origin', () => {
            const expectedStart = new Direction(1.5, -1.5);
            const expectedEnd = new Direction(0.5, -2.5);

            const arc = LineOfSight.getEnclosingArc(1,-2);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below and left of origin', () => {
            const expectedStart = new Direction(-2.5, -4.5);
            const expectedEnd = new Direction(-3.5, -3.5);

            const arc = LineOfSight.getEnclosingArc(-3,-4);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('above origin on y axis', () => {
            const expectedStart = new Direction(0.5, 0.5);
            const expectedEnd = new Direction(-0.5, 0.5);

            const arc = LineOfSight.getEnclosingArc(0,1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below origin on y axis', () => {
            const expectedStart = new Direction(0.5, -5.5);
            const expectedEnd = new Direction(-0.5, -5.5);

            const arc = LineOfSight.getEnclosingArc(0,-6);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('right of origin on x axis', () => {
            const expectedStart = new Direction(0.5, -0.5);
            const expectedEnd = new Direction(0.5, 0.5);

            const arc = LineOfSight.getEnclosingArc(1,0);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('left of origin on x axis', () => {
            const expectedStart = new Direction(-2.5, -0.5);
            const expectedEnd = new Direction(-2.5, 0.5);

            const arc = LineOfSight.getEnclosingArc(-3,0);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
    })

    describe('getLinesOfSight', () => {
        it('middle of board with buildings', () => {
            const board = new BoardState(10, 6);
            board.setTerrain(1, 2, TerrainTypes.Building);
            board.setTerrain(5, 1, TerrainTypes.Building);
            board.setTerrain(5, 3, TerrainTypes.Building);
            board.setTerrain(5, 5, TerrainTypes.Building);
            board.setTerrain(8, 1, TerrainTypes.Building);

            const linesOfSight = LineOfSight.findLinesOfSight(board, 2, 1);
            expect(linesOfSight[0]).toEqual([true, true, false, false, false, false]);
            expect(linesOfSight[1]).toEqual([true, true, true, false, true, true]);
            expect(linesOfSight[2]).toEqual([true, null, true, true, true, true]);
            expect(linesOfSight[3]).toEqual([true, true, true, true, true, true]);
            expect(linesOfSight[4]).toEqual([true, true, true, true, true, true]);
            expect(linesOfSight[5]).toEqual([true, true, true, true, true, true]);
            expect(linesOfSight[6]).toEqual([true, false, true, false, false, false]);
            expect(linesOfSight[7]).toEqual([true, false, true, true, false, false]);
            expect(linesOfSight[8]).toEqual([false, false, false, true, false, false]);
            expect(linesOfSight[9]).toEqual([false, false, false, true, true, false]);
        })
    })
})
