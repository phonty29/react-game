import React, {useContext, useEffect} from 'react';
import {GameContext} from '../../context/GameContext';
import GameRulesText from './GameRulesText';

const GameStarted = () => {
	const name = sessionStorage.getItem('name');

	useEffect(() => {
		console.log(name);
	}, []);

	if (name === null) {
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