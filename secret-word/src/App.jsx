import React from 'react'
import './App.css'

import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];


import StartScreen from "./components/StartScreen";
import GameOver from './components/GameOver';


function App() {

  return (
    <div className="App">
      <StartScreen />
      <GameOver />
    </div>
  );
}

export default App
