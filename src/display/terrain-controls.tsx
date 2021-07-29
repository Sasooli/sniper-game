import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import {faBuilding, faHome, faStream, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {ClickModes} from "../App";
import './terrain-controls.css';

type TerrainControlsProps = {
    terrainMode : TerrainTypes | undefined;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes | undefined>>;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
}

function TerrainControls({setTerrainMode, terrainMode, setClickMode} : TerrainControlsProps) {
    const terrainButton = (terrainType : TerrainTypes | undefined, text: string, icon: IconDefinition | undefined) =>
        <button
            onClick={() => {
                setTerrainMode(terrainType);
                setClickMode(terrainType === undefined ? ClickModes.NONE : ClickModes.SET_TERRAIN);
            }}
            className={`terrain-button ${(terrainMode === terrainType) && (terrainType !== undefined)
                ? 'terrain-button-active'
                : 'terrain-button-inactive'}`}
        >
            {icon !== undefined
                ? <FontAwesomeIcon icon={icon} className='terrain-button-icon' />
                : <div className='terrain-button-icon' />
            }
            <div className='terrain-button-text'>{text}</div>
        </button>;
    return (
        <div className={'terrain-controls-container'}>
            <p className={'controls-label'}>Set<br />Terrain</p>
            {terrainButton(TerrainTypes.Open, 'Open', undefined)}
            {terrainButton(TerrainTypes.Rubble, 'Rubble', faStream)}
            {terrainButton(TerrainTypes.Building, 'Building', faHome)}
            {terrainButton(TerrainTypes.Tower, 'Tower', faBuilding)}
            {terrainButton(undefined, 'Cancel', faTimes)}
        </div>
    )
}

export default TerrainControls;