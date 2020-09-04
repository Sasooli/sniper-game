import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import './square.css';
import {faBuilding, faHome, faStream, faWalking, faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GamePiece, {PieceType} from "../game-objects/GamePiece";

export type SquareProps = {
    terrainType: TerrainTypes;
    xCoord: number;
    yCoord: number;
    piece?: GamePiece;
}

function Square({terrainType, xCoord, yCoord, piece}: SquareProps) {
    const terrainIcon =
        terrainType === TerrainTypes.Building ? faHome
        : terrainType === TerrainTypes.Tower ? faBuilding
        : terrainType === TerrainTypes.Rubble ? faStream
        : null;
    const pieceProperties =
        piece?.getPieceType() == PieceType.Soldier ? { icon: faWalking, class: 'soldier-icon' }
            : piece?.getPieceType() == PieceType.Sniper ? { icon: faCrosshairs, class: 'sniper-icon' }
            : null;
    return (
        <div className='grid-item'>
            {terrainIcon && <FontAwesomeIcon icon={terrainIcon} className='terrain-icon' />}
            {pieceProperties &&
                <div className={'piece-container'}>
                    <FontAwesomeIcon icon={pieceProperties.icon} className={pieceProperties.class} />
                </div>
            }
        </div>
    )
}

export default Square;
