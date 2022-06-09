import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from './Modal';
import GameStarted from './GameStarted';

const Entrance = () => {
	return (
		<div>
		        <BrowserRouter>
		          <Routes>
			        <Route path='/gameStarted' element={<GameStarted/>}/>
					<Route path='/*' element={<Modal/>}/>
		          </Routes>
		        </BrowserRouter>
        </div>		
	);
}

export default Entrance;