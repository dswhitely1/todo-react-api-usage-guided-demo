import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import TodoContainer from './components/TodoContainer';

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
	render() {
		return (
			<Switch>
				<Route exact path='/' render={props => <TodoContainer {...props} todos={this.state.todos} />} />
			</Switch>
		);
	}
}

export default withRouter(App);
