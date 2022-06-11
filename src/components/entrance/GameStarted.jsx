import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import GameRulesText from './GameRulesText';
import GameOptions from './GameOptions';

const GameStarted = () => {
	const name = sessionStorage.getItem('name');
	const navigate = useNavigate();
	useEffect(() => {
		if (name === null) 
			navigate('/');
	}, []);

	return (
		<div>
			<GameRulesText/>
			<GameOptions/>
		</div>
	);
}

export default GameStarted;