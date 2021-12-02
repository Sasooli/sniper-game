import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import './square.css';
import {faBuilding, faHome, faStream, faWalking, faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GamePiece, {PieceType} from "../game-objects/GamePiece";

export type SquareProps = {
    terrainType: TerrainTypes;
    piece?: GamePiece;
    onClick: Function;
}

function Square({terrainType, piece, onClick}: SquareProps) {
    const terrainIcon =
        terrainType === TerrainTypes.Building ? faHome
            : terrainType === TerrainTypes.Tower ? faBuilding
            : terrainType === TerrainTypes.Rubble ? faStream
            : null;
    const pieceProperties =
        piece?.getPieceType() === PieceType.Soldier ? { icon: faWalking, class: 'soldier-icon' }
            : piece?.getPieceType() === PieceType.Sniper ? { icon: faCrosshairs, class: 'sniper-icon' }
            : null;
    return (
        <div className='grid-item' onClick={() => onClick()}>
            {terrainIcon && <FontAwesomeIcon icon={terrainIcon} className='terrain-icon' />}
            {pieceProperties &&
            <div className='piece-container'>
                <FontAwesomeIcon
                    icon={pieceProperties.icon}
                    className={`${pieceProperties.class} ${piece?.getIsFlipped() ? 'flipped-piece-icon' : ''}`}
                />
            </div>
            }
        </div>
    )
}

export default Square;
