import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import {ModalContext} from '../../context/ModalContext';
import {checkInput} from '../../database/data';

const Modal = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();

	const submitEventHandler = (inputName) => {
		let inputSucceed = checkInput(inputName);
		if (inputSucceed) navigate('/goodInput');
		else setName('Bad input');
	};		

	return (
		<ModalContext.Provider value={{name, setName}}>
			<ModalDisplay/>
			<button className="btn btn-dark mt-2" onClick={() => {submitEventHandler(name)}}>Submit</button>
		</ModalContext.Provider>
	);
}

export default Modal;