import React from 'react';
import Game from './components/entrance/Game';
import {GameContext} from './context/GameContext';
import './bootstrap/css/bootstrap.css';

const App = () => {
  
  return (
    <GameContext.Provider value={{}}>
      <div className="container">
        <Game/>
      </div>
    </GameContext.Provider>
  );
};

export default App;