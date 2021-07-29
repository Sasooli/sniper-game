import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import {faBuilding, faHome, faStream, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {ClickModes} from "../App";
import './terrain-controls.css';

type TerrainControlsProps = {
    terrainMode : TerrainTypes;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes>>;
    clickMode : ClickModes;
    setClickMode : React.Dispatch<React.SetStateAction<ClickModes>>;
}

function TerrainControls({setTerrainMode, terrainMode, clickMode, setClickMode} : TerrainControlsProps) {
    const terrainButton = (terrainType : TerrainTypes, text: string, icon: IconDefinition | undefined) =>
        <button
            onClick={() => {
                setClickMode(ClickModes.SET_TERRAIN);
                setTerrainMode(terrainType);
            }}
            className={`terrain-button ${(clickMode === ClickModes.SET_TERRAIN) && (terrainMode === terrainType)
                ? 'terrain-button-active'
                : 'terrain-button-inactive'}`}
        >
            {icon !== undefined
                ? <FontAwesomeIcon icon={icon} className='terrain-button-icon' />
                : <div className='terrain-button-icon' />
            }
            <div className='terrain-button-text'>{text}</div>
        </button>;

    const cancelButton =
        <button
            onClick={() => {setClickMode(ClickModes.NONE );}}
            className={'terrain-button terrain-button-inactive'}
        >
            <FontAwesomeIcon icon={faTimes} className='terrain-button-icon' />
            <div className='terrain-button-text'>Cancel</div>
        </button>;

    return (
        <div className={'terrain-controls-container'}>
            <p className={'controls-label'}>Set<br />Terrain</p>
            {terrainButton(TerrainTypes.Open, 'Open', undefined)}
            {terrainButton(TerrainTypes.Rubble, 'Rubble', faStream)}
            {terrainButton(TerrainTypes.Building, 'Building', faHome)}
            {terrainButton(TerrainTypes.Tower, 'Tower', faBuilding)}
            {cancelButton}
        </div>
    )
}

export default TerrainControls;