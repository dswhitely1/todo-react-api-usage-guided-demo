import React, { Component } from 'react';

class TodoForm extends Component {
	state = {
		todo : '',
	};
	componentDidMount() {
		try {
			if (this.props.todos) {
				console.log(this.props.todos);
				const incomingTodo = this.props.todos.filter(todo => todo.id.toString() === this.props.match.params.todoId)[0];
				this.setState({ todo: incomingTodo.todo, id: incomingTodo.id });
			} else {
				this.setState({ todo: '' });
			}
		} catch (error) {
			this.props.history.push('/');
		}
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.state.id ? this.props.updateTodo(this.state) : this.props.addTodo(this.state);
	};

	render() {
		const { id, todo } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>{id ? `Edit Todo   ` : `Add Todo   `}</label>
				<input name='todo' value={todo} onChange={this.handleChange} placeholder='New Todo...' />
				<button>{id ? `Update` : `Submit`}</button>
			</form>
		);
	}
}

export default TodoForm;
