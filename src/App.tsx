import React, {useState} from 'react';
import './App.css';
import {cloneDeep} from 'lodash';
import Board from './display/board';
import BoardState, {TerrainTypes} from './game-state/BoardState';
import BoardPieces from './game-state/BoardPieces';
import {PieceType} from './game-objects/GamePiece';
import Controls from './display/controls';

export enum ClickModes {
  NONE,
  SET_TERRAIN,
  SET_PIECE,
  FLIP_PIECE
}

export const MAXBOARDSIZE = 10;

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
  let initialBoardPieces = new BoardPieces();
  initialBoardPieces.placeNewPiece(0,0, PieceType.Soldier);
  initialBoardPieces.placeNewPiece(0,1, PieceType.Soldier);
  initialBoardPieces.placeNewPiece(3,5, PieceType.Sniper);
  initialBoardPieces.placeNewPiece(0,4, PieceType.Sniper);
  initialBoardPieces.placeNewPiece(3,1, PieceType.Soldier);
  initialBoardPieces.placeNewPiece(2,0, PieceType.Sniper, true);
  initialBoardPieces.placeNewPiece(3,0, PieceType.Soldier, true);

  const [ boardState, setBoardState ] = useState<BoardState>(initialBoardState);
  const [ boardPieces, setBoardPieces ] = useState<BoardPieces>(initialBoardPieces);

  const [ clickMode, setClickMode ] = useState<ClickModes>(ClickModes.NONE);
  const [ terrainMode, setTerrainMode ] = useState<TerrainTypes | undefined>(undefined);
  const [ pieceMode, setPieceMode ] = useState<PieceType | undefined>(undefined);
  const [ pieceFlippedMode, setPieceFlippedMode ] = useState<boolean>(false);

  const squareClick = (x: number, y: number) => {
    let newBoardPieces
    switch (clickMode) {
      case ClickModes.SET_PIECE:
        newBoardPieces = cloneDeep(boardPieces);
        if (pieceMode !== undefined) {
          newBoardPieces.removePiece(x, y);
          if (pieceMode !== PieceType.None) newBoardPieces.placeNewPiece(x, y, pieceMode, pieceFlippedMode);
        }
        setBoardPieces(newBoardPieces);
        break;
      case ClickModes.FLIP_PIECE:
        newBoardPieces = cloneDeep(boardPieces);
        newBoardPieces.flipPiece(x, y);
        setBoardPieces(newBoardPieces);
        break;
      case ClickModes.SET_TERRAIN:
        let newBoardState = cloneDeep(boardState);
        if (terrainMode !== undefined) newBoardState.setTerrain(x, y, terrainMode);
        setBoardState(newBoardState);
        break;
      case ClickModes.NONE:
    }
  }
  return (
    <div className='main-container'>
      <Controls boardState={boardState} setBoardState={setBoardState} terrainMode={terrainMode} setTerrainMode={setTerrainMode} clickMode={clickMode} setClickMode={setClickMode} pieceMode={pieceMode} setPieceMode={setPieceMode} pieceFlippedMode={pieceFlippedMode} setPieceFlippedMode={setPieceFlippedMode}/>
      <Board boardState={boardState} onSquareClick={squareClick} boardPieces={boardPieces} />
    </div>
  );
}

export default App;
