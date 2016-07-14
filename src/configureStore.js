import { applyMiddleware, createStore, combineReducers } from 'redux'
import reducer from './reducers/index'

// Middleware
import thunk from 'redux-thunk'

const initialState = {
	userId: -1,
	username: '',
	namesById: [],
	id: -1,
	name: '',
	friends: [],
	wall: []
}

export default createStore(
	reducer, 
	initialState, 
	applyMiddleware(thunk)
);