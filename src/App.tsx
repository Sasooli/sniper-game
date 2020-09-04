import React from 'react';
import './App.css';
import Board from './display/board';
import BoardState, {TerrainTypes} from './game-state/BoardState';
import BoardPieces from './game-state/BoardPieces';
import {PieceType} from './game-objects/GamePiece';

function App() {
  //TODO: remove this hard-coded terrain setup
  let boardState = new BoardState(4, 6);
  boardState.setTerrain(1,1, TerrainTypes.Rubble);
  boardState.setTerrain(3,1, TerrainTypes.Rubble);
  boardState.setTerrain(3,3, TerrainTypes.Building);
  boardState.setTerrain(0,4, TerrainTypes.Building);
  boardState.setTerrain(0,5, TerrainTypes.Tower);
  boardState.setTerrain(1,5, TerrainTypes.Building);
  //TODO: remove this hard-coded piece setup
  let boardPieces = new BoardPieces();
  boardPieces.placeNewPiece(0,0, PieceType.Soldier);
  boardPieces.placeNewPiece(0,1, PieceType.Soldier);
  boardPieces.placeNewPiece(3,5, PieceType.Sniper);
  boardPieces.placeNewPiece(0,4, PieceType.Sniper);
  boardPieces.placeNewPiece(3,1, PieceType.Soldier);
  return (
    <div className="App">
        <Board boardState={boardState} boardPieces={boardPieces} />
    </div>
  );
}

export default App;
