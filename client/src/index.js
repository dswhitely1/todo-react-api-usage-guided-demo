import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const application = (
	<Router>
		<App />
	</Router>
);
const rootElement = document.getElementById('root');

render(application, rootElement);
