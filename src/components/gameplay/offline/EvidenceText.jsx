import React from 'react';

const EvidenceText = ({reply}) => {
	return <p className="testimony" style={{textAlign: 'center', fontWeight: 'bold'}}>
				{reply == '1' && "Yes"}
				{reply == '0' && "No"}
				{reply == '?' && "I don't know"}
		   </p>;
}

export default EvidenceText;