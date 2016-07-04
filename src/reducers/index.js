import { combineReducers } from 'redux';

// Reducers
import profileReducer from './profile'
import peopleReducer from './people';
import wallReducer from './wall';

const reducer = combineReducers({
	profile: profileReducer,
	people: peopleReducer,
	wall: wallReducer
});

export default reducer;