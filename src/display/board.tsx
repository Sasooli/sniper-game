import React from 'react';
import BoardState from '../game-state/BoardState';
import './board.css';
import Square from './square';
import BoardPieces from '../game-state/BoardPieces';

export type BoardProps = {
    boardState: BoardState;
    boardPieces: BoardPieces;
    placeTerrain: Function;
}

function Board({boardState, boardPieces, placeTerrain}: BoardProps) {
    const terrain = boardState.getAllTerrain();
    return (
        <div className={'grid-container'}>
            {terrain.map((terrainCol, colIndex) => (
                <div className='grid-col' key={`col-${colIndex}`}>
                {terrainCol.map((terrainType, rowIndex) =>
                    <Square
                        terrainType={terrainType}
                        piece={boardPieces.findPieceAt(colIndex, rowIndex)}
                        key={`square-${colIndex}-${rowIndex}`}
                        placeTerrainHere={() => placeTerrain(colIndex, rowIndex)}
                    />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Board;
