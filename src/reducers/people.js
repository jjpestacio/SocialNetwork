import initialState from '../initialState'

import { ADD_FRIEND, REMOVE_FRIEND } from '../constants/ActionTypes'

const toggleFriend = (state, action) => {
	if(state.id !== action.id) {
		return state;
	}
	
	return {...state, friend: !state.friend};
}

const peopleReducer = (state=initialState.people, action) => {
	switch(action.type) {
		case ADD_FRIEND: 
		case REMOVE_FRIEND: {
			return state.map(person =>
				toggleFriend(person, action)
			)
		}

		default:
			return state;
	}

}

export default peopleReducer