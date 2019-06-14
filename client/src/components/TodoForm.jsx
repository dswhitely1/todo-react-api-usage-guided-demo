import React, { Component } from 'react';

class TodoForm extends Component {
	state = {
		todo : '',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>{this.state.id ? `Edit Todo   ` : `Add Todo   `}</label>
					<input name='todo' value={this.state.todo} onChange={this.handleChange} placeholder='New Todo...' />
					<button>{this.state.id ? `Update` : `Submit`}</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
