import React, {useContext} from 'react';
import {RulesTextContext} from '../../context/RulesTextContext';

const RulesTextButtons = ({typed}) => {
	const {setTextOption} = useContext(RulesTextContext);

	const checkTyped = () => {
		return (typed.current) ? typed.current : {
			start: () => {},
			stop: () => {}
		};
	};

	return (
		<div>
	    	<button type="button" className="btn btn-dark" onClick={() => {checkTyped().start()}}>Start</button>
	    	<button type="button" className="btn btn-dark mx-3" onClick={() => {checkTyped().stop()}}>Stop</button>
	    	<button type="button" className="btn btn-dark mx-3" onClick={() => {setTextOption('static')}}>Skip</button>
		</div>
	);
}

export default RulesTextButtons;