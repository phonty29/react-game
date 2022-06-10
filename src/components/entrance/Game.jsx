import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NameContext} from '../../context/NameContext';
import Modal from './Modal';
import GameStarted from './GameStarted';

const Game = () => {
  const [name, setName] = useState('');

	return (
		<NameContext.Provider value={{name, setName}}> 
			<BrowserRouter>
				<Routes>
					<Route path='/gameStarted' element={<GameStarted/>}/>
					<Route path='/*' element={<Modal/>}/>
		    </Routes>
		 	</BrowserRouter>
		</NameContext.Provider> 
	);
}

export default Game;