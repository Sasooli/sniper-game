import React, {useState} from 'react';
import './App.css';
import {cloneDeep} from 'lodash';
import Board from './display/board';
import BoardState, {TerrainTypes} from './game-state/BoardState';
import GamePiece, {PieceType} from './game-objects/GamePiece';
import Controls from './display/controls';

export enum ClickModes {
  NONE,
  SET_TERRAIN,
  SET_PIECE,
  FLIP_PIECE
}

export const MAXBOARDSIZE = 10;

function App() {
  //TODO: remove this hard-coded terrain & piece setup
  let initialBoardState = new BoardState(4, 6);
  initialBoardState.setTerrain(1,1, TerrainTypes.Rubble);
  initialBoardState.setTerrain(3,1, TerrainTypes.Rubble);
  initialBoardState.setTerrain(3,3, TerrainTypes.Building);
  initialBoardState.setTerrain(0,4, TerrainTypes.Building);
  initialBoardState.setTerrain(0,5, TerrainTypes.Tower);
  initialBoardState.setTerrain(1,5, TerrainTypes.Building);
  initialBoardState.setTerrain(2,1, TerrainTypes.Building);
  initialBoardState.setPiece(0,0, new GamePiece(PieceType.Soldier));
  initialBoardState.setPiece(0,1, new GamePiece(PieceType.Soldier));
  initialBoardState.setPiece(3,5, new GamePiece(PieceType.Sniper));
  initialBoardState.setPiece(0,4, new GamePiece(PieceType.Sniper));
  initialBoardState.setPiece(3,1, new GamePiece(PieceType.Soldier));
  initialBoardState.setPiece(2,0, new GamePiece(PieceType.Sniper, true));
  initialBoardState.setPiece(3,0, new GamePiece(PieceType.Soldier, true));

  const [ boardState, setBoardState ] = useState<BoardState>(initialBoardState);

  const [ zoomLevel, setZoomLevel ] = useState<number>(1);
  const [ clickMode, setClickMode ] = useState<ClickModes>(ClickModes.NONE);
  const [ terrainMode, setTerrainMode ] = useState<TerrainTypes | undefined>(undefined);
  const [ pieceMode, setPieceMode ] = useState<PieceType | undefined>(undefined);
  const [ pieceFlippedMode, setPieceFlippedMode ] = useState<boolean>(false);

  const squareClick = (x: number, y: number) => {
    let newBoardState = cloneDeep(boardState);
    switch (clickMode) {
      case ClickModes.SET_PIECE:
        if (pieceMode !== undefined) {
          newBoardState.removePiece(x, y);
          if (pieceMode !== PieceType.None) newBoardState.setPiece(x, y, new GamePiece(pieceMode, pieceFlippedMode));
        }
        setBoardState(newBoardState);
        break;
      case ClickModes.FLIP_PIECE:
        newBoardState = cloneDeep(boardState);
        newBoardState.flipPiece(x, y);
        setBoardState(newBoardState);
        break;
      case ClickModes.SET_TERRAIN:
        if (terrainMode !== undefined) newBoardState.setTerrain(x, y, terrainMode);
        setBoardState(newBoardState);
        break;
      case ClickModes.NONE:
    }
  }
  return (
    <div className='main-container'>
      <Controls
          boardState={boardState}
          setBoardState={setBoardState}
          terrainMode={terrainMode} setTerrainMode={setTerrainMode}
          clickMode={clickMode} setClickMode={setClickMode}
          pieceMode={pieceMode} setPieceMode={setPieceMode}
          pieceFlippedMode={pieceFlippedMode} setPieceFlippedMode={setPieceFlippedMode}
          zoomLevel={zoomLevel} setZoomLevel={setZoomLevel}
      />
      <Board boardState={boardState} onSquareClick={squareClick} zoomLevel={zoomLevel} />
    </div>
  );
}

export default App;
