import React from 'react';
import Arc from "../Arc";
import Direction from "../Direction";
import {first_quad_dirs, fourth_quad_dirs, second_quad_dirs, third_quad_dirs} from "./TestData";

describe('Arc', () => {
    describe('strictlyContains', () => {

        it('single-direction arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[1], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
        })

        it('positive arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[0], first_quad_dirs[2]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, true, false]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
        })
        it('negative arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[2], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, false, false]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
        })
        it('positive arc from second to first quadrant', () => {
            const arc = new Arc(second_quad_dirs[1], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, false, false]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, true]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
        })
        it('positive arc from fourth to second quadrant', () => {
            const arc = new Arc(fourth_quad_dirs[1], second_quad_dirs[0]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, false]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, false, true]);
        })
        it('negative arc from second to third quadrant', () => {
            const arc = new Arc(second_quad_dirs[0], third_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
            expect(second_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([false, true, true]);
            expect(third_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.strictlyContains(dir))).toEqual([true, true, true]);
        })
    })

    describe('looselyContains', () => {

        it('single-direction arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[1], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, true, false]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
        })
        it('positive arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[0], first_quad_dirs[2]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
        })
        it('negative arc in first quadrant', () => {
            const arc = new Arc(first_quad_dirs[2], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
        })
        it('positive arc from second to first quadrant', () => {
            const arc = new Arc(second_quad_dirs[1], first_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, false]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, true, true]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
        })
        it('positive arc from fourth to second quadrant', () => {
            const arc = new Arc(fourth_quad_dirs[1], second_quad_dirs[0]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, false, false]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, false, false]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([false, true, true]);
        })
        it('negative arc from second to third quadrant', () => {
            const arc = new Arc(second_quad_dirs[0], third_quad_dirs[1]);
            expect(first_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(second_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
            expect(third_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, false]);
            expect(fourth_quad_dirs.map(dir => arc.looselyContains(dir))).toEqual([true, true, true]);
        })
    })
})