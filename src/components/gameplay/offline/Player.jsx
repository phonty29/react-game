import React, {useState, useEffect, useContext} from 'react';
import PlayerImage from './PlayerImage';
import EvidenceText from './EvidenceText';
import HeaderName from './HeaderName';
import {GameplayContext} from '../../../context/GameplayContext';
import {deselectPlayer} from '../../../utils/processing';

const Player = ({player, playerState, style}) => {
	const {buttonSwitch, gameplayState, setGameplayState} = useContext(GameplayContext);
	const [selectToggle, setSelectToggle] = useState(false);
	useEffect(() => {
		if (buttonSwitch == '') {
			setSelectToggle(false);
		}
	}, [buttonSwitch]);

	const selectToggleAction = () => {
		if (playerState.cardClassName.includes('selectable')) {
			setSelectToggle(prev => !prev);
			if (gameplayState.nextSelectedPlayers.includes(player))
				setGameplayState({
					...gameplayState, 
					nextSelectedPlayers: deselectPlayer(gameplayState.nextSelectedPlayers, player)
				});
			else
				setGameplayState({
					...gameplayState,
					nextSelectedPlayers: [...gameplayState.nextSelectedPlayers, player]
				});
		}
	};
	
	return (
		<div className={playerState.className} style={style}>
			<div className={playerState.cardClassName + (selectToggle ? ' selected' : '')} onClick={selectToggleAction}>
				<HeaderName name={player.name}/>
				<PlayerImage src={player.name} alt={player.name} className="img-thumbnail image"/>
				<EvidenceText reply={player.reply}/>
			</div>
		 </div>	
	);
}

export default Player;