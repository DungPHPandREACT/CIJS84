import React, { useEffect, useState } from 'react';

const CountTime = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const s = setInterval(() => {
			setCounter((c) => c + 1);
		}, 1000);

		return () => {
			//khi component unmount thì code trong này mới chạy
		};
	}, []);

	return (
		<div>
			<h1>Time: {counter}</h1>
		</div>
	);
};

export default CountTime;
