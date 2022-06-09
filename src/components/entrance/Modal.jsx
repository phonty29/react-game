import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import {GameContext} from '../../context/GameContext';
import {checkInput} from '../../database/data';

const Modal = () => {
	const {name, setName} = useContext(GameContext);
	const navigate = useNavigate();

	const submitEventHandler = (inputName) => {
		let inputSucceed = checkInput(inputName);
		if (inputSucceed) navigate('/gameStarted');
		else setName('');
	};		

	return (
		<div>
			<ModalDisplay/>
			<button className="btn btn-dark mt-2" onClick={() => {submitEventHandler(name)}}>Submit</button>
		</div>
	);
}

export default Modal;