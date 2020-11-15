import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import TerrainControls from './terrain-controls';
import './controls.css';
import {ClickModes} from "../App";

type ControlsProps = {
    terrainMode : TerrainTypes | undefined;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes | undefined>>;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
}

function Controls({setTerrainMode, terrainMode, setClickMode} : ControlsProps) {
    return (
        <div className={'controls-container'}>
            <TerrainControls terrainMode={terrainMode} setTerrainMode={setTerrainMode} setClickMode={setClickMode} />
        </div>
    )
}

export default Controls;