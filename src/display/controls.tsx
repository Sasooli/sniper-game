import React from 'react';
import {TerrainTypes} from '../game-state/BoardState';
import './controls.css';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faStream} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type ControlsProps = {
    terrainMode : TerrainTypes | undefined;
    setTerrainMode : React.Dispatch<React.SetStateAction<TerrainTypes | undefined>>;
}

function Controls({setTerrainMode, terrainMode} : ControlsProps) {
    const terrainButton = (terrainType : TerrainTypes | undefined, text: string, icon: IconDefinition | undefined) =>
        <button
            onClick={() => setTerrainMode(terrainType)}
            className={`terrain-button ${(terrainMode === terrainType) && (terrainType !== undefined)
                ? 'terrain-button-active'
                : 'terrain-button-inactive'}`}
        >
            {icon !== undefined
                ? <FontAwesomeIcon icon={icon} className='terrain-button-icon' />
                : <div className='terrain-button-icon' />
            }
            <text className='terrain-button-text'>{text}</text>
        </button>;
    return (
        <div className={'controls-container'}>
            <div className={'terrain-controls-container'}>
                <p className={'controls-label'}>Set<br />Terrain</p>
                {terrainButton(TerrainTypes.Open, 'Open', undefined)}
                {terrainButton(TerrainTypes.Rubble, 'Rubble', faStream)}
                {terrainButton(TerrainTypes.Building, 'Building', faHome)}
                {terrainButton(TerrainTypes.Tower, 'Tower', faBuilding)}
                {terrainButton(undefined, 'Cancel', faTimes)}
            </div>
        </div>
    )
}

export default Controls;