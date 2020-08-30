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
            {terrain.map((terrainCol, colIndex) => (
                <div className='grid-col'>
                {terrainCol.map((terrainType, rowIndex) =>
                    <Square terrainType={terrainType} xCoord={colIndex} yCoord={rowIndex} />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;