import React, {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import GameRulesText from './GameRulesText';

const GameStarted = () => {
	const {name} = useContext(GameContext);
	if (name === '') {
		return (
			<h1 className='display-1'>Go Fuck Yourself</h1>
		);
	}
	else {
		return (
			<GameRulesText/>

		);		
	}
}

export default GameStarted;