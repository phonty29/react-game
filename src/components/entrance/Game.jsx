import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NameContext} from '../../context/NameContext';
import Modal from './Modal';
import GameStarted from './GameStarted';
import GamePlayOffline from '../gameplay/offline/GamePlayOffline';
import GamePlayOnline from '../gameplay/online/GamePlayOnline';

const Game = () => {
  const [name, setName] = useState('');

	return (
		<NameContext.Provider value={{name, setName}}> 
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<Modal/>}/>
					<Route path='/gameStarted' element={<GameStarted/>}/>
					<Route path='/gameStarted/gameOffline' element={<GamePlayOffline/>}/>
					<Route path='/gameStarted/gameOnline' element={<GamePlayOnline/>}/>
		    </Routes>
		 	</BrowserRouter>
		</NameContext.Provider> 
	);
}

export default Game;