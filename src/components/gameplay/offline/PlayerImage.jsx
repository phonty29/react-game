import React, {useEffect} from 'react';
import imageMap from './images/imageMap.js';

const PlayerImage = (props) => {
	const properties = {...props, src: imageMap.get(props.src)};
	return (
		<div className="card-body">
			<img {...properties}/>				
		</div>
	);
}

export default PlayerImage;