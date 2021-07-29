import React from 'react';
import {MAXBOARDSIZE} from "../App";
import './terrain-controls.css';
import BoardState from "../game-state/BoardState";
import {cloneDeep} from 'lodash';

type BoardSizeControlsProps = {
    boardState: BoardState;
    setBoardState: React.Dispatch<React.SetStateAction<BoardState>>;
}

function BoardSizeControls({boardState, setBoardState} : BoardSizeControlsProps) {

    const isAtMaxWidth = boardState.boardWidth === MAXBOARDSIZE;
    const isAtMaxHeight = boardState.boardHeight === MAXBOARDSIZE;
    const isAtMinWidth = boardState.boardWidth === 1;
    const isAtMinHeight = boardState.boardHeight === 1;

    return (
        <div className={'board-size-controls-container'}>
            <div>
                <button disabled={isAtMaxHeight} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.addRowTop();
                    setBoardState(newBoard);
                }}>Add row above</button>
                <button disabled={isAtMaxHeight} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.addRowBottom();
                    setBoardState(newBoard);
                }}>Add row below</button>
                <button disabled={isAtMaxWidth} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.addColLeft();
                    setBoardState(newBoard);
                }}>Add column left</button>
                <button disabled={isAtMaxWidth} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.addColRight();
                    setBoardState(newBoard);
                }}>Add column right</button>
            </div>
            <div>
                <button disabled={isAtMinHeight} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.removeRowTop();
                    setBoardState(newBoard);
                }}>Remove top row</button>
                <button disabled={isAtMinHeight} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.removeRowBottom();
                    setBoardState(newBoard);
                }}>Remove bottom row</button>
                <button disabled={isAtMinWidth} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.removeColLeft();
                    setBoardState(newBoard);
                }}>Remove left column</button>
                <button disabled={isAtMinWidth} onClick={() => {
                    const newBoard = cloneDeep(boardState);
                    newBoard.removeColRight();
                    setBoardState(newBoard);
                }}>Remove right column</button>
            </div>
        </div>
    )
}

export default BoardSizeControls;