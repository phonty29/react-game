import React, {useContext} from 'react';
import {GameplayContext} from '../../../context/GameplayContext';
import {defineNewReplies, checkPlayers} from '../../../utils/processing';

const GameplayButtons = () => {
	const {buttonSwitch, setButtonSwitch, gameplayState, setGameplayState, setHintText} = useContext(GameplayContext);
	const submitEvent = () => {
		if (gameplayState.nextSelectedPlayers.length == Math.ceil(gameplayState.selectedPlayers.length/2) && Math.ceil(gameplayState.selectedPlayers.length/2) != 2) {
			setGameplayState({
				selectedPlayers: defineNewReplies(gameplayState.nextSelectedPlayers),
				nextSelectedPlayers: []			
			});
			setButtonSwitch('');
		} else if (gameplayState.nextSelectedPlayers.length == Math.ceil(gameplayState.selectedPlayers.length/2) && Math.ceil(gameplayState.selectedPlayers.length/2) == 2) {
			if (checkPlayers(gameplayState.nextSelectedPlayers))
				setHintText("You win");
			else setHintText("You lose");
			setGameplayState({
				selectedPlayers: [],
				nextSelectedPlayers: []			
			});
			setButtonSwitch('restart');			
		}
	};	

	const restartEvent = () => {
		window.location.reload();
	};
	return (
		<div className="d-grid gap-2 col-1 mx-auto">
		  {(buttonSwitch == 'submit') && <SubmitButton className="btn btn-primary" onClick={submitEvent}/>}
		  {(buttonSwitch == 'restart') && <RestartButton className="btn btn-dark" onClick={restartEvent}/>}
		</div> 
	);
}

export default GameplayButtons;


const SubmitButton = (props) => {
	return (
		<div {...props}>
			Submit
		</div>
	);
}

const RestartButton = (props) => {
	return (
		<div {...props}>
			Start again
		</div>
	);
}

