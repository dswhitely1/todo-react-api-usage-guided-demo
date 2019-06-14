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
				this.setState({ todos: [ ...this.state.todos, newTodo ] });
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Switch>
				<Route exact path='/' render={props => <TodoContainer {...props} todos={this.state.todos} />} />
				<Route path='/addtodo' render={props => <TodoForm {...props} addTodo={this.handleAddTodo} />} />
				<Route path='/edittodo/:todoId' render={props => <TodoForm {...props} />} />
			</Switch>
		);
	}
}

export default withRouter(App);
