import React from 'react';
import './App.css';
import Board from './display/board';
import BoardState, {TerrainTypes} from './game-state/BoardState';

function App() {
  //TOD: remove this hard-coded terrain setup
  let boardState = new BoardState(4, 6);
  boardState.setTerrain(1,1, TerrainTypes.Rubble);
  boardState.setTerrain(3,1, TerrainTypes.Rubble);
  boardState.setTerrain(3,3, TerrainTypes.Building);
  boardState.setTerrain(0,4, TerrainTypes.Building);
  boardState.setTerrain(0,5, TerrainTypes.Tower);
  boardState.setTerrain(1,5, TerrainTypes.Building);
  return (
    <div className="App">
        <Board boardState={boardState} />
    </div>
  );
}

export default App;
