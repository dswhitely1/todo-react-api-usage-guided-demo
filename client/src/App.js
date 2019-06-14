import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

export default withRouter(App);
