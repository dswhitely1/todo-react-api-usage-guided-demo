import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

class App extends Component {
	state = {
		todos : [],
	};
	componentDidMount() {
		axios
			.get('http://localhost:5000/todos')
			.then(res => this.setState({ todos: res.data }))
			.catch(err => console.log(err));
	}

	handleAddTodo = newTodo => {
		axios
			.post('http://localhost:5000/todos', newTodo)
			.then(res => {
				this.setState(state => {
					return {
						todos : [ ...state.todos, newTodo ],
					};
				});
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	};

	handleUpdateTodo = updatedTodo => {
		axios
			.put('http://localhost:5000/todos', updatedTodo)
			.then(res => {
				const updatedState = this.state.todos.map(todo => (updatedTodo.id === todo.id ? updatedTodo : todo));
				this.setState({ todos: updatedState });
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	};

	handleDeleteTodo = todoId => {
		axios
			.delete(`http://localhost:5000/todos/${todoId}`)
			.then(res => {
				const updatedState = this.state.todos.filter(todo => todo.id !== todoId);
				this.setState({ todos: updatedState });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={props => <TodoContainer {...props} todos={this.state.todos} deleteTodo={this.handleDeleteTodo} />}
				/>
				<Route path='/addtodo' render={props => <TodoForm {...props} addTodo={this.handleAddTodo} />} />
				<Route
					path='/edittodo/:todoId'
					render={props => <TodoForm {...props} updateTodo={this.handleUpdateTodo} todos={this.state.todos} />}
				/>
			</Switch>
		);
	}
}

export default withRouter(App);
