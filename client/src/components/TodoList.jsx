import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
	return <div>{todos.map((todo, i) => <Todo todo={todo} key={i} deleteTodo={deleteTodo} />)}</div>;
};

export default TodoList;
