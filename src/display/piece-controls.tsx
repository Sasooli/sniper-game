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
    clickMode : ClickModes;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
    pieceFlippedMode : boolean;
    setPieceFlippedMode : React.Dispatch<React.SetStateAction<boolean>>;
}

function PieceControls({pieceMode, setPieceMode, clickMode, setClickMode, pieceFlippedMode, setPieceFlippedMode} : PieceControlsProps) {

    const addPieceButton = (pieceType : PieceType | undefined, text: string, icon: IconDefinition | undefined, isFlipped: boolean) =>
        <button
            onClick={() => {
                setPieceMode(pieceType);
                setClickMode(pieceType === undefined ? ClickModes.NONE : ClickModes.SET_PIECE);
                setPieceFlippedMode(isFlipped);
            }}
            className={`piece-button ${clickMode === ClickModes.SET_PIECE && pieceMode === pieceType && pieceFlippedMode === isFlipped
                ? 'piece-button-active'
                : 'piece-button-inactive'}`}
        >
            {icon !== undefined
                ? <FontAwesomeIcon icon={icon} className='piece-button-icon' />
                : <div className='piece-button-icon' />
            }
            <div className='piece-button-text'>{text}</div>
        </button>;

    const flipPieceButton =
        <button
            onClick={() => {
                setClickMode(ClickModes.FLIP_PIECE);
            }}
            className={`piece-button ${clickMode === ClickModes.FLIP_PIECE
                ? 'piece-button-active'
                : 'piece-button-inactive'}`}
        >
            {/* TODO: find correct icon*/}
            <FontAwesomeIcon icon={faCrosshairs} className='piece-button-icon' />
            <div className='piece-button-text'>Flip Piece</div>
        </button>;

    return (
        <div className={'terrain-controls-container'}>
            <p className={'controls-label'}>Place<br />Piece</p>
            {addPieceButton(PieceType.None, 'Clear', undefined, false)}
            {addPieceButton(PieceType.Soldier, 'Soldier', faWalking, false)}
            {addPieceButton(PieceType.Sniper, 'Sniper', faCrosshairs, false)}
            {addPieceButton(PieceType.Sniper, 'Sniper (flipped)', faCrosshairs, true)}
            {addPieceButton(undefined, 'Cancel', faTimes, false)}
            {flipPieceButton}
            {/* TODO: get this icon, text from the piecetype*/}
        </div>
    )
}

export default PieceControls;