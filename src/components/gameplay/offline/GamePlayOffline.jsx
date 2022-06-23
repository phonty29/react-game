import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isNotInStorage, getFromStorage} from '../../../utils/storage';
import {CHARACTERS} from '../../../utils/data';
import {createPlayerObjects, getRandomPlayers} from '../../../utils/processing';
import HintText from './HintText';
import PlayerGrid from './PlayerGrid';
import GameplayButtons from './GameplayButtons';
import {GameplayContext} from '../../../context/GameplayContext';

const GamePlayOffline = () => {
	const navigate = useNavigate();
	const [gameplayState, setGameplayState] = useState({
		selectedPlayers: createPlayerObjects(getRandomPlayers([...CHARACTERS], parseInt(sessionStorage.getItem('playerAmount')))),
		nextSelectedPlayers: []
	});
	const [buttonSwitch, setButtonSwitch] = useState('');
	const [hintText, setHintText] = useState("There are players");
	useEffect(() => { 
		if (isNotInStorage('name'))
			navigate('/');
		else if (isNotInStorage('playerAmount') && isNotInStorage('multiplay'))
			navigate('/gameStarted');
		else if(getFromStorage('multiplay') == 'true')
			navigate('/gameOnline');
	}, []);
	
	return (
		<GameplayContext.Provider value={{buttonSwitch, setButtonSwitch, gameplayState, setGameplayState, hintText, setHintText}}>
				<HintText/>
				<PlayerGrid playersForDisplay={getRandomPlayers([...gameplayState.selectedPlayers])}/>
				<GameplayButtons/>	
		</GameplayContext.Provider>
	);
}

export default GamePlayOffline;