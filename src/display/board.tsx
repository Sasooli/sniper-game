import React from 'react';
import BoardState from '../game-state/BoardState';
import './board.css';
import Square from './square';

export type BoardProps = {
    boardState: BoardState;
}

function Board({boardState}: BoardProps) {
    const terrain = boardState.getAllTerrain();
    return (
        <div className={'grid-container'}>
            {terrain.map((terrainRow, rowIndex) => (
                <div className='grid-row'>
                {terrainRow.map((terrainType, colIndex) =>
                    <Square terrainType={terrainType} xCoord={colIndex} yCoord={rowIndex} />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;