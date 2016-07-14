import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { 
	browserHistory, IndexRoute, Redirect,
	Router, Route, Link 
} from 'react-router'

// Routes
import Login from './containers/loginContainer'
import App from './containers/App'

// Actions
import { fetchData, fetchNames, setUser } from './actions/index'

const store = configureStore;

// Load initial data
const initialLoad = () => {
	store.dispatch(fetchNames());
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Login} onEnter={initialLoad}/>
			<Route path="/:id" component={App} />
		</Router>
	</Provider>
, document.getElementById('root'));