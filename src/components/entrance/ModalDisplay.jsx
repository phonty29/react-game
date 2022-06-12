import React, {useContext} from 'react';
import {NameContext} from '../../context/NameContext';

const ModalDisplay = () => {
	const {name, setName} = useContext(NameContext);

	return (
		<div>
			<h1 style={{height: '75px'}}>{name.trim().toUpperCase()}</h1>
			<label htmlFor="name" className="form-label mt-3">Enter your name</label>
			<input type="text" className="form-control" id="name" onChange={(event) => {setName(event.target.value)}}/>
		</div>
	);
}

export default ModalDisplay;