import React from 'react';

const Count = ({ count }) => {
	return (
		<div
			style={{
				marginLeft: '24px',
				marginRight: '24px',
				fontSize: '32px',
			}}
		>
			{count}
		</div>
	);
};

export default Count;
