import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import './square.css';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faStream} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export type SquareProps = {
    terrainType: TerrainTypes;
    xCoord: number;
    yCoord: number;
}

function Square({terrainType, xCoord, yCoord}: SquareProps) {
    const terrainIcon =
        terrainType == TerrainTypes.Building ? faHome
        : terrainType == TerrainTypes.Tower ? faBuilding
        : terrainType == TerrainTypes.Rubble ? faStream
        : null;
    return (
        <div className='grid-item'>
            {terrainIcon && <FontAwesomeIcon icon={terrainIcon} className='terrain-icon' />}
        </div>
    )
}

export default Square;