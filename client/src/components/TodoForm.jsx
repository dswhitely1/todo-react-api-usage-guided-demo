import React, { Component } from 'react';

class TodoForm extends Component {
	state = {
		formValue : '',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name='formValue' value={this.state.formValue} onChange={this.handleChange} placeholder='New Todo...' />
				</form>
			</div>
		);
	}
}

export default TodoForm;
