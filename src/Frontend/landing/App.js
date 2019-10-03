import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Easy from "../1-10/1/Easy.js.js"
import Hard from "../1-10/1/hard.js.js";
import TicTacToe from "../1-10/tictactoe.js"

function App() {
  return (
    <div className="App">
    <div id="content">
      <Route exact path = "/" component={HomeContent}/>
      <Route exact path = "/1-10" component={Projects}/>
    </div>
      
     
    </div>
  );
}

export default App;
