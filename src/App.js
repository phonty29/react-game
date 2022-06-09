import React from 'react';
import Entrance from './components/entrance/Entrance';
import {GameContext} from './context/GameContext';
import './bootstrap/css/bootstrap.css';

const App = () => {

  return (
    <GameContext.Provider value={{}}>
      <div className="container">
        <Entrance/>
      </div>
    </GameContext.Provider>
  );
};

export default App;