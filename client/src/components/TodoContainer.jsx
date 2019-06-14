import React from 'react';
import TodoList from './TodoList';

const TodoContainer = props => {
	return (
		<div>
			<TodoList {...props} />
		</div>
	);
};

export default TodoContainer;
