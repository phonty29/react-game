import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isNotInStorage, getFromStorage} from '../../../utils/utilFunctions';

const GamePlayOnline = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isNotInStorage('name'))
			navigate('/');
		else if (isNotInStorage('playerAmount') && isNotInStorage('multiplay'))
			navigate('/gameStarted');
		else if (getFromStorage('multiplay') == 'false')
			navigate('/gameOffline');
	}, []);

	return (
		<div>
			It's a GamePlayOnline. Your name is {sessionStorage.getItem('name')}.
			There are {sessionStorage.getItem('playerAmount')} players.
			You will play on a {sessionStorage.getItem('multiplay')} regime. 
		</div>
	);
}

export default GamePlayOnline;