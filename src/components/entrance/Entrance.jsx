import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from './Modal';
import GoodInput from './GoodInput';

const Entrance = () => {
	return (
		<div>
		        <BrowserRouter>
		          <Routes>
			        <Route path='/goodInput' element={<GoodInput/>}/>
					<Route path='/*' element={<Modal/>}/>
		          </Routes>
		        </BrowserRouter>
        </div>		
	);
}

export default Entrance;