import React from 'react';
import Arc from "../Arc";
import Direction from "../Direction";
import LineOfSight from "../LineOfSight";

describe('LineOfSight', () => {
    describe('EnclosingArc', () => {

        it('above and right of origin', () => {
            const expectedStart = new Direction(0.5, 1.5);
            const expectedEnd = new Direction(1.5, 0.5);

            const arc = LineOfSight.EnclosingArc(1,1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('above and left of origin', () => {
            const expectedStart = new Direction(1.5, -0.5);
            const expectedEnd = new Direction(0.5, -1.5);

            const arc = LineOfSight.EnclosingArc(1,-1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below and right of origin', () => {
            const expectedStart = new Direction(1.5, -1.5);
            const expectedEnd = new Direction(0.5, -2.5);

            const arc = LineOfSight.EnclosingArc(1,-2);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below and left of origin', () => {
            const expectedStart = new Direction(-2.5, -4.5);
            const expectedEnd = new Direction(-3.5, -3.5);

            const arc = LineOfSight.EnclosingArc(-3,-4);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('above origin on y axis', () => {
            const expectedStart = new Direction(0.5, 0.5);
            const expectedEnd = new Direction(-0.5, 0.5);

            const arc = LineOfSight.EnclosingArc(0,1);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('below origin on y axis', () => {
            const expectedStart = new Direction(0.5, -5.5);
            const expectedEnd = new Direction(-0.5, -5.5);

            const arc = LineOfSight.EnclosingArc(0,-6);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('right of origin on x axis', () => {
            const expectedStart = new Direction(0.5, -0.5);
            const expectedEnd = new Direction(0.5, 0.5);

            const arc = LineOfSight.EnclosingArc(1,0);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
        it('left of origin on x axis', () => {
            const expectedStart = new Direction(-2.5, -0.5);
            const expectedEnd = new Direction(-2.5, 0.5);

            const arc = LineOfSight.EnclosingArc(-3,0);

            expect(arc.looselyContains(expectedStart)).toEqual(true);
            expect(arc.looselyContains(expectedEnd)).toEqual(true);
            expect(arc.strictlyContains(expectedStart)).toEqual(false);
            expect(arc.strictlyContains(expectedEnd)).toEqual(false);
        })
    })
})