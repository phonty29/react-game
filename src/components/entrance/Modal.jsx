import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import {NameContext} from '../../context/NameContext';
import {checkInput} from '../../database/data';

const Modal = () => {
	const {name, setName} = useContext(NameContext);
	const navigate = useNavigate();

	useEffect(() => {
		setName('');
		sessionStorage.removeItem('name');
	}, []);

	const submitEventHandler = (inputName) => {
		let inputSucceed = checkInput(inputName);
		if (inputSucceed) {
			sessionStorage.setItem('name', name);
			navigate('/gameStarted');
		} 
	};		

	return (
		<div>
			<ModalDisplay/>
			<button className="btn btn-dark mt-2" onClick={() => {submitEventHandler(name)}}>Submit</button>
		</div>
	);
}

export default Modal;