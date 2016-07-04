import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { hashHistory, IndexRoute, Router, Route, Link } from 'react-router'

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

// Routes
import App from './containers/App';

import initialState from './initialState';

let store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App} />
		</Router>
	</Provider>
, document.getElementById('root'));