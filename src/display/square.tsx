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
    zoomLevel: number;
    isHighlighted: boolean;
}

function Square({terrainType, piece, onClick, zoomLevel, isHighlighted}: SquareProps) {

    const scaledSizeString = (baseSize: number) => `${baseSize * zoomLevel}px`;

    const terrainIcon =
        terrainType === TerrainTypes.Building ? faHome
            : terrainType === TerrainTypes.Tower ? faBuilding
            : terrainType === TerrainTypes.Rubble ? faStream
            : null;

    // TODO: move this out and use it to get icon elsewhere
    const pieceProperties =
        piece?.getPieceType() === PieceType.Soldier ? { icon: faWalking, class: 'soldier-icon' }
            : piece?.getPieceType() === PieceType.Sniper ? { icon: faCrosshairs, class: 'sniper-icon' }
            : null;

    return (
        <div className='grid-item'
             onClick={() => onClick()}
             style={{
                 borderRadius: scaledSizeString(3),
                 width: scaledSizeString(60),
                 height: scaledSizeString(60),
                 margin: scaledSizeString(2),
                 backgroundColor: isHighlighted ? 'lightgreen': ''
             }}
        >
            {terrainIcon && <FontAwesomeIcon icon={terrainIcon} className='terrain-icon' style={{fontSize: scaledSizeString(45)}} />}
            {pieceProperties &&
                <div
                    className='piece-container'
                    style={{
                        boxShadow: `${scaledSizeString(2)} ${scaledSizeString(5)} rgb(150, 150, 150)`,
                        width: scaledSizeString(25),
                        height: scaledSizeString(25),
                        borderRadius: scaledSizeString(10),
                    }}
                >
                    <FontAwesomeIcon
                        icon={pieceProperties.icon}
                        className={pieceProperties.class}
                        style={{fontSize: scaledSizeString(20), opacity: piece?.getIsFlipped() ? 0.2 : 1 }}
                    />
                </div>
            }
        </div>
    )
}

export default Square;
