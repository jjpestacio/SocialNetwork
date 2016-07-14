import { combineReducers } from 'redux';

// Constants
import { FETCH_DATA, FETCH_NAMES, SET_USER } from '../constants/ActionTypes' 

const friendsReducer = ( state=[], action ) => {
	switch(action.type) {
		case FETCH_DATA:
			return action.friends

		default:
			return state;
	}
}

const idReducer = ( state=null, action ) => {
	switch(action.type) {
		case FETCH_DATA:
			return action.id
			
		default:
			return state;
	}
}

const nameReducer = ( state=null, action ) => {
	switch(action.type) {
		case FETCH_DATA:
			return action.name

		default:
			return state;
	}
}

const namesByIdReducer = (state=[], action) => {
	switch(action.type) {
		case FETCH_NAMES:
			return action.namesById
			
		default:
			return state
	}
}

const userIdReducer = ( state=null, action ) => {
	switch(action.type) {
		case SET_USER:
			return action.userId

		default:
			return state
	}
}

const usernameReducer = ( state=null, action ) => {
	switch(action.type) {
		case SET_USER: 
			return action.username

		default:
			return state
	}
}

const wallReducer = ( state=[], action ) => {
	switch(action.type) {
		case FETCH_DATA:
			return action.wall

		default:
			return state;
	}
}

const reducer = combineReducers({
	userId: userIdReducer,
	username: usernameReducer,
	id: idReducer,
	name: nameReducer,
	namesById: namesByIdReducer,
	friends: friendsReducer,
	wall: wallReducer
});

export default reducer;