import React, {useContext} from 'react';
import {GameplayContext} from '../../../context/GameplayContext';

const HintText = () => {
	const {hintText, setHintText} = useContext(GameplayContext);
	return (
		<div className="h3">
			{hintText}
		</div>
	);
}

export default HintText;