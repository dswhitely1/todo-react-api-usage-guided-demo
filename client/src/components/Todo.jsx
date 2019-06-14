import React from 'react';

const Todo = ({ todo }) => {
	return (
		<div>
			<p>{`Todo: ${todo.todo}`}</p>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default Todo;
