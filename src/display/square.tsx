import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import './square.css';

export type SquareProps = {
    terrainType: TerrainTypes;
    xCoord: number;
    yCoord: number;
}

function Square({terrainType, xCoord, yCoord}: SquareProps) {
    return (
        <div className='grid-item'>
            {terrainType}
            <br/>
            {`(${xCoord},${yCoord})`}
        </div>
    )
}

export default Square;