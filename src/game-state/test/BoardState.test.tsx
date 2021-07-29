import React from 'react';
import BoardState, {TerrainTypes} from "../BoardState";
import {MAXBOARDSIZE} from "../../App";

const setSampleTerrain = (board: BoardState) => {
    board.setTerrain(0, 0, TerrainTypes.Rubble);
    board.setTerrain(1, 3, TerrainTypes.Building);
    board.setTerrain(4, 2, TerrainTypes.Tower);
    board.setTerrain(3, 3, TerrainTypes.Rubble);
}

describe('BoardState', () => {
    test('sets and gets terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        expect(board.getTerrain(0, 0)).toEqual(TerrainTypes.Rubble);
        expect(board.getTerrain(1, 3)).toEqual(TerrainTypes.Building);
        expect(board.getTerrain(4, 2)).toEqual(TerrainTypes.Tower);
        expect(board.getTerrain(3, 3)).toEqual(TerrainTypes.Rubble);
    });

    test.todo('throws error for setting terrain out of bounds');

    test('adds a row above, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.addRowTop();

        const targetBoard = new BoardState(5, 5);
        targetBoard.setTerrain(0, 1, TerrainTypes.Rubble);
        targetBoard.setTerrain(1, 4, TerrainTypes.Building);
        targetBoard.setTerrain(4, 3, TerrainTypes.Tower);
        targetBoard.setTerrain(3, 4, TerrainTypes.Rubble);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('adds a row below, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.addRowBottom();

        const targetBoard = new BoardState(5, 5);
        setSampleTerrain(targetBoard);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('adds a column to the left, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.addColLeft();

        const targetBoard = new BoardState(6, 4);
        targetBoard.setTerrain(1, 0, TerrainTypes.Rubble);
        targetBoard.setTerrain(2, 3, TerrainTypes.Building);
        targetBoard.setTerrain(5, 2, TerrainTypes.Tower);
        targetBoard.setTerrain(4, 3, TerrainTypes.Rubble);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('adds a column to the right, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.addColRight();

        const targetBoard = new BoardState(6, 4);
        setSampleTerrain(targetBoard);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('does not add a row if max size is reached', () => {
        const board = new BoardState(4, MAXBOARDSIZE);

        expect(() => board.addRowTop()).toThrowError('maximum height');
        expect(() => board.addRowBottom()).toThrow('maximum height');
    });

    test('does not add a column if max size is reached', () => {
        const board = new BoardState(MAXBOARDSIZE, 4);

        expect(() => board.addColLeft()).toThrow('maximum width');
        expect(() => board.addColRight()).toThrow('maximum width');
    });

    test('removes top row, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);
        console.log(board.getAllTerrain())

        board.removeRowTop();

        const targetBoard = new BoardState(5, 3);
        targetBoard.setTerrain(1, 2, TerrainTypes.Building);
        targetBoard.setTerrain(4, 1, TerrainTypes.Tower);
        targetBoard.setTerrain(3, 2, TerrainTypes.Rubble);

        console.log(board.getAllTerrain())
        console.log(targetBoard.getAllTerrain())

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('removes bottom row, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.removeRowBottom();

        const targetBoard = new BoardState(5, 3);
        targetBoard.setTerrain(0, 0, TerrainTypes.Rubble);
        targetBoard.setTerrain(4, 2, TerrainTypes.Tower);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('removes left column, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.removeColLeft();

        const targetBoard = new BoardState(4, 4);
        targetBoard.setTerrain(0, 3, TerrainTypes.Building);
        targetBoard.setTerrain(3, 2, TerrainTypes.Tower);
        targetBoard.setTerrain(2, 3, TerrainTypes.Rubble);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });

    test('removes right column, preserving terrain', () => {
        const board = new BoardState(5,4);
        setSampleTerrain(board);

        board.removeColRight();

        const targetBoard = new BoardState(4, 4);
        targetBoard.setTerrain(0, 0, TerrainTypes.Rubble);
        targetBoard.setTerrain(1, 3, TerrainTypes.Building);
        targetBoard.setTerrain(3, 3, TerrainTypes.Rubble);

        expect(board.getAllTerrain()).toEqual(targetBoard.getAllTerrain());
        expect(board.boardHeight).toEqual(targetBoard.boardHeight);
        expect(board.boardWidth).toEqual(targetBoard.boardWidth);
    });
})

