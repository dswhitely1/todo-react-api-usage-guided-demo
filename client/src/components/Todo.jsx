import React from 'react';
import { Link } from 'react-router-dom';
const Todo = ({ todo }) => {
	return (
		<div>
			<p>{`Todo: ${todo.todo}`}</p>
			<Link to={`/edittodo/${todo.id}`}>
				<button>Edit</button>
			</Link>
			<button>Delete</button>
		</div>
	);
};

export default Todo;
