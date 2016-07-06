import { combineReducers } from 'redux';

// Reducers
import currentIdReducer from './currentId'
import idsReducer from './ids'
import isFriendReducer from './isFriend'
import namesByIdReducer from './names'
import friendsByIdReducer from './friends'
import wallsByIdReducer from './walls'

const reducer = combineReducers({
	currentId: currentIdReducer,
	isFriend: isFriendReducer,
	ids: idsReducer,
	namesById: namesByIdReducer,
	friendsById: friendsByIdReducer,
	wallsById: wallsByIdReducer
});

export default reducer;