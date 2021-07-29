import React from 'react';
import BoardState from '../game-state/BoardState';
import './board.css';
import Square from './square';

export type BoardProps = {
    boardState: BoardState;
    onSquareClick: Function;
    zoomLevel: number;
}

function Board({boardState, onSquareClick, zoomLevel}: BoardProps) {
    const terrain = boardState.getAllTerrain();
    const pieces = boardState.getAllPieces();
    return (
        <div className={'grid-container'}>
            {terrain.map((terrainCol, colIndex) => (
                <div className='grid-col' key={`col-${colIndex}`}>
                {terrainCol.map((terrainType, rowIndex) =>
                    <Square
                        terrainType={terrainType}
                        piece={pieces[colIndex][rowIndex]}
                        key={`square-${colIndex}-${rowIndex}`}
                        onClick={() => onSquareClick(colIndex, rowIndex)}
                        zoomLevel={zoomLevel}
                    />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;
