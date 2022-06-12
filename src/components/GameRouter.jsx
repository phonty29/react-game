import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from './entrance/Modal';
import GameStarted from './entrance/GameStarted';
import GamePlayOffline from './gameplay/offline/GamePlayOffline';
import GamePlayOnline from './gameplay/online/GamePlayOnline';

const GameRouter = () => {
	return ( 
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<Modal/>}/>
				<Route path='/gameStarted' element={<GameStarted/>}/>
				<Route path='/gameOffline' element={<GamePlayOffline/>}/>
				<Route path='/gameOnline' element={<GamePlayOnline/>}/>
		   </Routes>
		 </BrowserRouter>
	);
}

export default GameRouter;