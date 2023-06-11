import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import CountTime from './CountTime';

function App() {
	const [count, setCount] = useState(0);

	const [count2, setCount2] = useState(0);

	const [isShow, setIsShow] = useState(false);

	// useEffect(callback, dependencies)
	//TH1: Không có dependencies => sẽ chạy lại khi component thay đổi
	//TH2: dependencies là 1 [] => sẽ chỉ chạy 1 lần đầu tiên
	//TH3: dependencies là 1 mảng chứa các phần tử [A,B...] => sẽ chạy lại khi mà A hoặc B thay đổi

	// useEffect(() => {
	// 	console.log('Đây là useEffect không có dependencies'); //2
	// });

	// useEffect(() => {
	// 	console.log(document.getElementById('abc'));
	// 	console.log('Đây là useEffect không có setTimeout'); //2
	// }, []);

	// useEffect(() => {
	// 	console.log('Đây là useEffect có dependencies là [count]'); //2
	// }, [count]);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const position = document.documentElement.scrollTop;
			console.log('scrolling position: ', position);

			if (position < 50) {
				document.getElementById('btn-back-to-top').style.display = 'none';
			} else {
				document.getElementById('btn-back-to-top').style.display = 'block';
			}
		});

    return () => {
      // clean evenet
    }
	}, []);

	console.log('Đây là render');

	const handleBackToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<div className='App'>
			{/* <h1>Count 1: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Tăng Count 1</button>

			<h1>Count 2: {count2}</h1>
			<button onClick={() => setCount2(count2 + 1)}>Tăng Count 2</button> */}

			{/* <div id='abc'>Test DOM</div>

			<button
				onClick={() => {
					setIsShow(!isShow);
				}}
			>
				Toggle show time
			</button>
			{isShow && <CountTime />} */}

			<p style={{ width: '200px' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<div
				style={{
					position: 'fixed',
					bottom: '200px',
					right: '50px',
					height: '75px',
					width: '75px',
					border: '1px solid black',
					display: 'none',
				}}
				id='btn-back-to-top'
				onClick={handleBackToTop}
			>
				Back to top
			</div>
		</div>
	);
}

export default App;
