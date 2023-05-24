import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Count from './Count';
import { Button, Container, Input, Table } from 'reactstrap';
import Student from './Student';

function App() {
	const [listStudent, setListStudent] = useState([
		{
			id: 1,
			firstName: 'John',
			lastName: 'Wick',
			userName: '@johnwick',
		},
		{
			id: 2,
			firstName: 'Đỗ',
			lastName: 'Văn A',
			userName: '@adovan',
		},
		{
			id: 3,
			firstName: 'Nguyễn',
			lastName: 'Văn B',
			userName: '@bnguyenvan',
		},
		{
			id: 4,
			firstName: 'Trần',
			lastName: 'Thị C',
			userName: '@ctranthi',
		},
		{
			id: 5,
			firstName: 'Lung',
			lastName: 'Thị Linh',
			userName: '@lunglinh',
		},
	]);

	const [id, setId] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [userName, setUserName] = useState(null);

	const handleAddStudent = () => {
		const newStudent = {
			id: id,
			firstName: firstName,
			lastName: lastName,
			userName: userName,
		};

		setListStudent([...listStudent, newStudent]);
	};

	const handleChangeId = (event) => {
		setId(event.target.value);
	};
	const handleChangeFirstName = (event) => {
		setFirstName(event.target.value);
	};
	const handleChangeLastName = (event) => {
		setLastName(event.target.value);
	};
	const handleChangeUserName = (event) => {
		setUserName(event.target.value);
	};

	return (
		<Container className='mt-5'>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>ID</label>
				<input onChange={handleChangeId} />
			</div>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>First name</label>
				<input onChange={handleChangeFirstName} />
			</div>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>Last name</label>
				<input onChange={handleChangeLastName} />
			</div>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>Username</label>
				<input onChange={handleChangeUserName} />
			</div>
			<div className='mt-5'>
				<Button color='primary' onClick={handleAddStudent}>
					Add Student
				</Button>
			</div>

			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					{listStudent.map((student, index) => {
						return (
							<Student
								id={student.id}
								firstName={student.firstName}
								lastName={student.lastName}
								userName={student.userName}
							/>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}

export default App;
