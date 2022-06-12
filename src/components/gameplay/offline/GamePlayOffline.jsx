import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isNotInStorage, getFromStorage} from '../../../utils/storage';

const GamePlayOffline = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isNotInStorage('name'))
			navigate('/');
		else if (isNotInStorage('playerAmount') && isNotInStorage('multiplay'))
			navigate('/gameStarted');
		else if(getFromStorage('multiplay') == 'true')
			navigate('/gameOnline');
	}, []);

	return (
		<div>
			It's a GamePlayOffline. Your name is {sessionStorage.getItem('name')}.
			There are {sessionStorage.getItem('playerAmount')} players.
			You will play on a {sessionStorage.getItem('multiplay')} regime. 
		</div>
	);
}

export default GamePlayOffline;