import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {PieceType} from "../game-objects/GamePiece";
import {ClickModes} from "../App";
import {faCrosshairs, faTimes, faWalking} from "@fortawesome/free-solid-svg-icons";
import './piece-controls.css';

type PieceControlsProps = {
    pieceMode : PieceType;
    setPieceMode : React.Dispatch<React.SetStateAction<PieceType>>;
    clickMode : ClickModes;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
    pieceFlippedMode : boolean;
    setPieceFlippedMode : React.Dispatch<React.SetStateAction<boolean>>;
}

function PieceControls({pieceMode, setPieceMode, clickMode, setClickMode, pieceFlippedMode, setPieceFlippedMode} : PieceControlsProps) {

    const addPieceButton = (pieceType : PieceType, text: string, icon: IconDefinition | undefined, isFlipped: boolean) =>
        <button
            onClick={() => {
                setClickMode(ClickModes.SET_PIECE);
                setPieceMode(pieceType);
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

  const losButton =
    <button
      onClick={() => {setClickMode(ClickModes.SHOW_LOS );}}
      className={`piece-button ${clickMode === ClickModes.SHOW_LOS
        ? 'piece-button-active'
        : 'piece-button-inactive'}`}
    >
      {/* TODO: find correct icon*/}
      <FontAwesomeIcon icon={faCrosshairs} className='piece-button-icon' />
      <div className='piece-button-text'>Show LoS</div>
    </button>;

    const cancelButton =
        <button
            onClick={() => {setClickMode(ClickModes.NONE );}}
            className={'piece-button piece-button-inactive'}
        >
            <FontAwesomeIcon icon={faTimes} className='piece-button-icon' />
            <div className='piece-button-text'>Cancel</div>
        </button>;

    return (
      <div className={'terrain-controls-container'}>
        <p className={'controls-label'}>Place<br />Piece</p>
        {addPieceButton(PieceType.None, 'Clear', undefined, false)}
        {addPieceButton(PieceType.Soldier, 'Soldier', faWalking, false)}
        {addPieceButton(PieceType.Sniper, 'Sniper', faCrosshairs, false)}
        {addPieceButton(PieceType.Sniper, 'Sniper (flipped)', faCrosshairs, true)}
        {cancelButton}
        {flipPieceButton}
        {losButton}
        {/* TODO: get this icon, text from the piecetype*/}
      </div>
    )
}

export default PieceControls;
