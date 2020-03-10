import React from 'react';
import { Link } from 'react-router-dom';
const Todo = ({ todo: { id, todo }, deleteTodo }) => {
	return (
		<div>
			<p>{`Todo: ${todo}`}</p>
			<Link to={`/edittodo/${id}`}>
				<button>Edit</button>
			</Link>
			<button onClick={() => deleteTodo(id)}>Delete</button>
		</div>
	);
};

export default Todo;
