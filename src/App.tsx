import React, {useState} from 'react';
import './App.css';
import {cloneDeep} from 'lodash';
import Board from './display/board';
import BoardState, {TerrainTypes} from './game-state/BoardState';
import BoardPieces from './game-state/BoardPieces';
import {PieceType} from './game-objects/GamePiece';
import Controls from './display/controls';

function App() {
  //TODO: remove this hard-coded terrain setup
  let initialBoardState = new BoardState(4, 6);
  initialBoardState.setTerrain(1,1, TerrainTypes.Rubble);
  initialBoardState.setTerrain(3,1, TerrainTypes.Rubble);
  initialBoardState.setTerrain(3,3, TerrainTypes.Building);
  initialBoardState.setTerrain(0,4, TerrainTypes.Building);
  initialBoardState.setTerrain(0,5, TerrainTypes.Tower);
  initialBoardState.setTerrain(1,5, TerrainTypes.Building);
  initialBoardState.setTerrain(2,1, TerrainTypes.Building);
  //TODO: remove this hard-coded piece setup
  let boardPieces = new BoardPieces();
  boardPieces.placeNewPiece(0,0, PieceType.Soldier);
  boardPieces.placeNewPiece(0,1, PieceType.Soldier);
  boardPieces.placeNewPiece(3,5, PieceType.Sniper);
  boardPieces.placeNewPiece(0,4, PieceType.Sniper);
  boardPieces.placeNewPiece(3,1, PieceType.Soldier);
  boardPieces.placeNewPiece(2,0, PieceType.Sniper, true);
  boardPieces.placeNewPiece(3,0, PieceType.Soldier, true);
  
  const [ boardState, setBoardState ] = useState<BoardState>(initialBoardState);

  const [ terrainMode, setTerrainMode ] = useState<TerrainTypes | undefined>(undefined);
  const placeTerrain = (x: number, y: number) => {
    if (terrainMode !== undefined) {
      let newBoardState = cloneDeep(boardState);
      newBoardState.setTerrain(x, y, terrainMode);
      setBoardState(newBoardState);
    }
  }
  return (
    <div className='main-container'>
      <Controls terrainMode={terrainMode} setTerrainMode={setTerrainMode}/>
      <Board boardState={boardState} placeTerrain={placeTerrain} boardPieces={boardPieces} />
    </div>
  );
}

export default App;
