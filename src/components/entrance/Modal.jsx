import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import {NameContext} from '../../context/NameContext';
import {checkInput} from '../../utils/data';

const Modal = () => {
  	const [name, setName] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setName('');
		sessionStorage.clear();
	}, []);

	const submitName = (inputName) => {
		if (checkInput(inputName)) {
			sessionStorage.setItem('name', name);
			navigate('/gameStarted');
		} 
	};		

	return (
		<NameContext.Provider value={{name, setName}}>
			<ModalDisplay/>
			<button className="btn btn-dark mt-2" onClick={() => {submitName(name)}}>Submit</button>
		</NameContext.Provider>
	);
}

export default Modal;