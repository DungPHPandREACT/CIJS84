import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Count from './Count';
import { Button, Container, Input, Table } from 'reactstrap';
import Student from './Student';
import debounce from 'lodash.debounce';

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

	const [id, setId] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [isUpdate, setIsUpdate] = useState(false);
	const [keyword, setKeyword] = useState('');
	const [listStudentFilter, setListStudentFilter] = useState([]);

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

	const deleteStudent = (id) => {
		const listNewStudent = listStudent.filter((student) => {
			return student.id !== id;
		});

		setListStudent(listNewStudent);
	};

	const updateStudent = (student) => {
		setId(student.id);
		setFirstName(student.firstName);
		setLastName(student.lastName);
		setUserName(student.userName);

		setIsUpdate(true);
	};

	const handleUpdateStudent = () => {
		const newStudent = {
			id: id,
			lastName: lastName,
			firstName: firstName,
			userName: userName,
		};

		const listNewStudent = listStudent.map((student) => {
			if (student.id === id) {
				return {
					id: id,
					lastName: lastName,
					firstName: firstName,
					userName: userName,
				};
			}

			return student;
		});
		setListStudent(listNewStudent);
		setIsUpdate(false);
		setId('');
		setFirstName('');
		setLastName('');
		setUserName('');
	};

	const handleSearch = debounce((event) => {
		setKeyword(event.target.value);
		// const keyword = event.target.value;

		console.log(event.target.value);

		// const result = listStudent.filter((student) => {
		// 	return student.userName.includes(keyword);
		// });

		// setListStudent(result);
	}, 2000);

	const handleClickSearch = () => {
		const result = listStudent.filter((student) => {
			return (
				student.userName.includes(keyword) ||
				student.firstName.includes(keyword) ||
				student.lastName.includes(keyword)
			);
		});

		setListStudentFilter(result);
	};

	return (
		<Container className='mt-5'>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>ID</label>
				<input value={id} onChange={handleChangeId} disabled={isUpdate} />
			</div>

			<div className='mt-2' style={{ display: 'flex' }}>
				<label>First name</label>
				<input value={firstName} onChange={handleChangeFirstName} />
			</div>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>Last name</label>
				<input value={lastName} onChange={handleChangeLastName} />
			</div>
			<div className='mt-2' style={{ display: 'flex' }}>
				<label>Username</label>
				<input value={userName} onChange={handleChangeUserName} />
			</div>
			<div className='mt-5'>
				{isUpdate === true ? (
					<Button color='secondary' onClick={handleUpdateStudent}>
						Update Student
					</Button>
				) : (
					<Button color='primary' onClick={handleAddStudent}>
						Add Student
					</Button>
				)}
			</div>
			<div className='mt-5 mb-5' style={{ display: 'flex' }}>
				<Input value={keyword} onChange={handleSearch} />
				<Button
					color='primary'
					style={{ marginLeft: '8px' }}
					onClick={handleClickSearch}
				>
					Search
				</Button>
			</div>

			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{listStudentFilter.length > 0
						? listStudentFilter.map((student, index) => {
								return (
									<Student
										id={student.id}
										firstName={student.firstName}
										lastName={student.lastName}
										userName={student.userName}
										onDelete={deleteStudent}
										onUpdate={updateStudent}
									/>
								);
						  })
						: listStudent.map((student, index) => {
								return (
									<Student
										key={student.id}
										id={student.id}
										firstName={student.firstName}
										lastName={student.lastName}
										userName={student.userName}
										onDelete={deleteStudent}
										onUpdate={updateStudent}
									/>
								);
						  })}
				</tbody>
			</Table>
		</Container>
	);
}

export default App;
