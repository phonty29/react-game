import React from 'react';

const HeaderName = ({name}) => {
	return (
		<div className="card-header py-3">
			<h4 className="my-0 fw-normal name">{name}</h4>
		</div>
	);
}

export default HeaderName;