import React, {useState} from 'react';
import Entrance from './components/entrance/Entrance';
import {GameContext} from './context/GameContext';
import './bootstrap/css/bootstrap.css';

const App = () => {
  const [name, setName] = useState('');
  
  return (
    <GameContext.Provider value={{name, setName}}>
      <div className="container">
        <Entrance/>
      </div>
    </GameContext.Provider>
  );
};

export default App;