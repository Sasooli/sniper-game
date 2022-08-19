import React from 'react';
import BoardState from '../game-state/BoardState';
import './board.css';
import Square from './square';

export type BoardProps = {
    boardState: BoardState;
    onSquareClick: Function;
    zoomLevel: number;
    lineOfSight?: boolean[][];
    showLineOfSight: boolean;
}
// TODO: make a LineOfSight type

function Board({boardState, onSquareClick, zoomLevel, lineOfSight, showLineOfSight}: BoardProps) {
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
                        isHighlighted={showLineOfSight && !!lineOfSight && lineOfSight[colIndex][rowIndex]}
                    />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;
