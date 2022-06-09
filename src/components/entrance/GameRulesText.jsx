import React, {useRef, useEffect} from 'react';
import Typed from 'typed.js'
import {gameRulesText} from '../../database/data';

const GameRulesText = () => {
	const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [gameRulesText],
      typeSpeed: 0,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
  	<div>
	    <div style={{height: '300px'}}>
	        <span ref={el} />
	    </div>
	    <button type="button" className="btn btn-dark" onClick={() => typed.current.start()}>Start</button>
	    <button type="button" className="btn btn-dark mx-3" onClick={() => typed.current.stop()}>Stop</button>
    </div>
  );
}

export default GameRulesText;
