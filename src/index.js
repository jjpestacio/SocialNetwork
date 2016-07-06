import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

// Routes
import App from './containers/App';

// Initial State
import initialState from './initialState';

let store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/:id" component={App} />
		</Router>
	</Provider>
, document.getElementById('root'));