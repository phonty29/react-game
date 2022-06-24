import React from 'react';

const HeaderName = ({name}) => {
	return (
		<div className="card-header py-3">
			<h4 className="my-0 fw-normal name">
				{name == 'азамат сагындыков' && 'азамат(с)'}
				{name == 'азамат аскаров' && 'азамат(а)'}
				{name == 'вова бондарев' && 'вова(б)'}
				{name == 'вова хван' && 'вова(х)'}
				{name != 'азамат сагындыков' && name != 'азамат аскаров' && name != 'вова бондарев' && name != 'вова хван' && name}
			</h4>
		</div>
	);
}

export default HeaderName;