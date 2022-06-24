import React, {useState, useEffect, useContext} from 'react';
import Player from './Player';
import {timeout, displayOrderOfEntrance} from '../../../utils/processing';
import {GameplayContext} from '../../../context/GameplayContext';

const PlayerGrid = ({playersForDisplay}) => {
	const {buttonSwitch, setButtonSwitch, gameplayState, setHintText} = useContext(GameplayContext);
	const [playerState, setPlayerState] = useState({players: playersForDisplay, className: 'col', cardClassName: 'card mb-4 rounded-3 shadow-sm'});
	useEffect(() => {
		if (buttonSwitch == '') {
			setPlayerState({players: playersForDisplay, className: 'col', cardClassName: 'card mb-4 rounded-3 shadow-sm'});
			setHintText("There are players");
			timeout(gameplayState.selectedPlayers.length*1000).then(() => {
				setPlayerState({
					...playerState,
					players: displayOrderOfEntrance(gameplayState.selectedPlayers),
					className: 'col animated'
				});
				setHintText("Hint: Remember the order of players");
				return timeout(gameplayState.selectedPlayers.length*3000);
			}).then(() => {
				setPlayerState({
					players: playersForDisplay,
					className: 'col',
					cardClassName: 'card mb-4 rounded-3 shadow-sm selectable'
				});
				setHintText("Time to select");
				setButtonSwitch('submit');
			})
		} else if (buttonSwitch == 'restart') 
			setPlayerState({players: [], className: '', cardClassName: ''});
	}, [buttonSwitch]);

	return (
	    	<div className="d-flex flex-wrap mt-3" id="box">  
	    		{
		    		playerState.players.map((player, index, arr) =>
		    			<Player key={index} player={player} playerState={playerState} style={{animationDelay:`${index*3}s`}}/>
		    		)
	    		}
	    	</div>			
	);
}

export default PlayerGrid;
