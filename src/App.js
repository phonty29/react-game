import React from 'react';
import GameRouter from './components/GameRouter';
import {GameContext} from './context/GameContext';

const App = () => {
  return (
    <GameContext.Provider value={{}}>
      <div className="container">
        <GameRouter/>
      </div>
    </GameContext.Provider>
  );
};

export default App;