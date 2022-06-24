import React, {useState, useRef, useEffect} from 'react';
import {gameRulesText} from '../../utils/data';
import RulesTextButtons from './RulesTextButtons';
import {RulesTextContext} from '../../context/RulesTextContext';
import Typed from 'typed.js'

const GameRulesText = () => {
  const [textOption, setTextOption] = useState('dynamic');
	const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    if (textOption == 'dynamic') {
       const options = {
         strings: [gameRulesText],
         typeSpeed: 0,
         backSpeed: 0
       };
          
       typed.current = new Typed(el.current, options);
          
       return () => {
         typed.current.destroy();
       }      
    }
  }, [textOption]);

  return (
    <RulesTextContext.Provider value={{textOption, setTextOption}}>
      <div style={{height: '100px'}}>
        {
          (textOption == 'dynamic') 
            ?
          <span ref={el}/>
            :
          <p>{gameRulesText}</p>
        }
      </div>
      <RulesTextButtons typed={typed}/>
    </RulesTextContext.Provider>      
  );
}

export default GameRulesText;
