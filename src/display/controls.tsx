import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import TerrainControls from './terrain-controls';
import './controls.css';
import {ClickModes} from "../App";
import PieceControls from "./piece-controls";
import {PieceType} from "../game-objects/GamePiece";

type ControlsProps = {
    terrainMode : TerrainTypes | undefined;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes | undefined>>;
    pieceMode : PieceType | undefined;
    setPieceMode : React.Dispatch<React.SetStateAction<PieceType | undefined>>;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
}

function Controls({setTerrainMode, terrainMode, setClickMode, pieceMode, setPieceMode} : ControlsProps) {
    return (
        <div className={'controls-container'}>
            <div className={'controls-column'}>
                <TerrainControls terrainMode={terrainMode} setTerrainMode={setTerrainMode} setClickMode={setClickMode} />
            </div>
            <div className={'controls-column'}>
                <PieceControls pieceMode={pieceMode} setPieceMode={setPieceMode} setClickMode={setClickMode} />
            </div>
        </div>
    )
}

export default Controls;