import React from 'react';
import ArcList from "../ArcList";
import {first_quad_dirs, fourth_quad_dirs, second_quad_dirs, third_quad_dirs} from "./TestData";
import Arc from "../Arc";

describe('ArcList', () => {
    it('empty arc list contains no directions', () => {
        const arcList = new ArcList();

        expect(arcList.getLength()).toEqual(0);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
    })

    it('arc list with single arc contains correct directions', () => {
        const arcList = new ArcList();
        arcList.mergeArc(new Arc(fourth_quad_dirs[1], second_quad_dirs[0]));

        expect(arcList.getLength()).toEqual(1);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, true]);
    })

    it('arc list with two non-intersecting arcs contains correct directions', () => {
        const arcList = new ArcList();
        arcList.mergeArc(new Arc(fourth_quad_dirs[1], second_quad_dirs[0]));
        arcList.mergeArc(new Arc(first_quad_dirs[0], first_quad_dirs[2]));

        expect(arcList.getLength()).toEqual(2);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, true, false]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, true]);
    })

    it('arc list formed from two overlapping arcs contains correct directions', () => {
        const arcList = new ArcList();
        arcList.mergeArc(new Arc(first_quad_dirs[0], first_quad_dirs[2]));
        arcList.mergeArc(new Arc(first_quad_dirs[1], fourth_quad_dirs[1]));

        expect(arcList.getLength()).toEqual(1);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, true, true]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, false, false]);
    })

    it('universal list contains all directions', () => {
        const arcList = new ArcList();
        arcList.mergeArc(new Arc(fourth_quad_dirs[2], second_quad_dirs[1]));
        arcList.mergeArc(new Arc(second_quad_dirs[1], fourth_quad_dirs[2]));

        expect(arcList.getLength()).toEqual(-1);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
    })

    it('list containing A-B and B-C contains direction B', () => {
        const arcList = new ArcList();
        arcList.mergeArc(new Arc(fourth_quad_dirs[2], third_quad_dirs[1]));
        arcList.mergeArc(new Arc(third_quad_dirs[1], second_quad_dirs[1]));

        expect(arcList.getLength()).toEqual(1);
        expect(first_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
        expect(second_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, false, false]);
        expect(third_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([true, true, true]);
        expect(fourth_quad_dirs.map(dir => arcList.strictlyContains(dir))).toEqual([false, false, false]);
    })
})