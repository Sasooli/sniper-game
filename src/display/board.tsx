import React from 'react';
import BoardState from '../game-state/BoardState';
import './board.css';
import Square from './square';
import BoardPieces from '../game-state/BoardPieces';

export type BoardProps = {
    boardState: BoardState;
    boardPieces: BoardPieces;
}

function Board({boardState, boardPieces}: BoardProps) {
    const terrain = boardState.getAllTerrain();
    return (
        <div className={'grid-container'}>
            {terrain.map((terrainCol, colIndex) => (
                <div key={colIndex} className='grid-col'>
                {terrainCol.map((terrainType, rowIndex) =>
                    <Square
                        key={rowIndex}
                        terrainType={terrainType}
                        xCoord={colIndex}
                        yCoord={rowIndex}
                        piece={boardPieces.findPieceAt(colIndex, rowIndex)} />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;
