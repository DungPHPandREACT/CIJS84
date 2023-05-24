import React from 'react';
import { Button } from 'reactstrap';

const Student = (props) => {
	const handleDeleteStudent = () => {
		console.log('props.id: ', props.id);
		props.onDelete(props.id);
	};

	return (
		<tr>
			<th scope='row'>{props.id}</th>
			<td>{props.firstName}</td>
			<td>{props.lastName}</td>
			<td>{props.userName}</td>
			<td>
				<span style={{ marginRight: '10px' }}>
					<Button color='secondary'>Update</Button>
				</span>
				<Button color='danger' onClick={handleDeleteStudent}>
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default Student;
