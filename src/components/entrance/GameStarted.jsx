import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isNotInStorage} from '../../utils/utilFunctions';
import GameRulesText from './GameRulesText';
import GameOptions from './GameOptions';

const GameStarted = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (isNotInStorage('name')) 
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