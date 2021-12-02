import React from 'react';
import BoardState, {TerrainTypes} from '../game-state/BoardState';
import TerrainControls from './terrain-controls';
import './controls.css';
import {ClickModes} from "../App";
import PieceControls from "./piece-controls";
import {PieceType} from "../game-objects/GamePiece";
import BoardSizeControls from "./board-size-controls";
import ZoomControls from "./zoom-controls";

type ControlsProps = {
    boardState: BoardState;
    setBoardState: React.Dispatch<React.SetStateAction<BoardState>>;
    terrainMode : TerrainTypes;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes>>;
    pieceMode : PieceType;
    setPieceMode : React.Dispatch<React.SetStateAction<PieceType>>;
    clickMode : ClickModes;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
    pieceFlippedMode : boolean;
    setPieceFlippedMode : React.Dispatch<React.SetStateAction<boolean>>;
    zoomLevel : number;
    setZoomLevel : React.Dispatch<React.SetStateAction<number>>;
}

function Controls({boardState, setBoardState, setTerrainMode, terrainMode, clickMode, setClickMode, pieceMode, setPieceMode, pieceFlippedMode, setPieceFlippedMode, zoomLevel, setZoomLevel} : ControlsProps) {
    return (
        <div>
            <ZoomControls zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
            <BoardSizeControls boardState={boardState} setBoardState={setBoardState} />
            <div className={'controls-container'}>
                <div className={'controls-column'}>
                    <TerrainControls terrainMode={terrainMode} setTerrainMode={setTerrainMode} clickMode={clickMode} setClickMode={setClickMode} />
                </div>
                <div className={'controls-column'}>
                    <PieceControls pieceMode={pieceMode} setPieceMode={setPieceMode} clickMode={clickMode} setClickMode={setClickMode} pieceFlippedMode={pieceFlippedMode} setPieceFlippedMode={setPieceFlippedMode} />
                </div>
            </div>
        </div>
    )
}

export default Controls;