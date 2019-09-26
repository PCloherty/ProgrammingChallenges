import React from 'react';
import './App.css';
import Easy from "../1-10/challenge1/Easy.js"
import Hard from "../../Frontend/1-10/challenge1/hard.js";
import TicTacToe from "../1-10/tictactoe.js"

function App() {
  return (
    <div className="App">
      <TicTacToe></TicTacToe>
      <Hard></Hard>
      <Easy></Easy>
    </div>
  );
}

export default App;
