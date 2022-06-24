import React, {useContext} from 'react';
import {GameplayContext} from '../../../context/GameplayContext';

const EvidenceText = ({reply}) => {
	const {buttonSwitch} = useContext(GameplayContext);
	return <p className="testimony" style={{textAlign: 'center', fontWeight: 'bold'}}>
				{reply == '1' && buttonSwitch == 'submit' && "Yes"}
				{reply == '0' && buttonSwitch == 'submit' && "No"}
				{reply == '?' && buttonSwitch == 'submit' && "I don't know"}
		   </p>;
}

export default EvidenceText;