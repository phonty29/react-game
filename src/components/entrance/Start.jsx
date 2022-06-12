import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Start = ({multiplay, playerAmount}) => {
	const navigate = useNavigate();
	const startGame = () => {
		sessionStorage.setItem('playerAmount', playerAmount);
		sessionStorage.setItem('multiplay', multiplay);
		navigate(multiplay ? '/gameOnline' : '/gameOffline');
	};

	return (
		<div className="mt-5" style={{display:'grid', placeItems:'center'}}>
			<button style={{fontSize: '25px'}} type="button" className="btn btn-primary" onClick={() => {startGame()}}>SUBMIT</button>
		</div>
	);
}

export default Start;