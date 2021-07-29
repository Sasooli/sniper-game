import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {PieceType} from "../game-objects/GamePiece";
import {ClickModes} from "../App";
import {faCrosshairs, faTimes, faWalking} from "@fortawesome/free-solid-svg-icons";
import './piece-controls.css';

type PieceControlsProps = {
    pieceMode : PieceType | undefined;
    setPieceMode : React.Dispatch<React.SetStateAction<PieceType | undefined>>;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
}

function PieceControls({pieceMode, setPieceMode, setClickMode} : PieceControlsProps) {

    const pieceButton = (pieceType : PieceType | undefined, text: string, icon: IconDefinition | undefined) =>
        <button
            onClick={() => {
                setPieceMode(pieceType);
                setClickMode(pieceType === undefined ? ClickModes.NONE : ClickModes.SET_PIECE);
            }}
            className={`piece-button ${(pieceMode === pieceType) && (pieceType !== undefined)
                ? 'piece-button-active'
                : 'piece-button-inactive'}`}
        >
            {icon !== undefined
                ? <FontAwesomeIcon icon={icon} className='piece-button-icon' />
                : <div className='piece-button-icon' />
            }
            <div className='piece-button-text'>{text}</div>
        </button>;

    return (
        <div className={'terrain-controls-container'}>
            <p className={'controls-label'}>Place<br />Piece</p>
            {pieceButton(PieceType.None, 'Clear', undefined)}
            {pieceButton(PieceType.Soldier, 'Soldier', faWalking)}
            {pieceButton(PieceType.Sniper, 'Sniper', faCrosshairs)}
            {pieceButton(undefined, 'Cancel', faTimes)}
            {/* TODO: get this icon, text from the piecetype*/}
        </div>
    )
}

export default PieceControls;