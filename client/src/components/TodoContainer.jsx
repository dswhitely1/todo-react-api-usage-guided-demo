import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';

const TodoContainer = props => {
	return (
		<div>
			<TodoList {...props} />
			<Link to='/addtodo'>
				<button>Add Todo</button>
			</Link>
		</div>
	);
};

export default TodoContainer;
