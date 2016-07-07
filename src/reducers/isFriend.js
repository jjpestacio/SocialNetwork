import initialState from '../initialState'

import { VIEW_PROFILE } from '../constants/ActionTypes'

const isFriendReducer = ( state=initialState.isFriend, action ) => {
	switch(action.type) {
		case VIEW_PROFILE: {
			const { currentId, id, friendsById } = action;
			
			return friendsById[currentId].indexOf(id) != -1
		}

		default:
			return state;
	}
}

export default isFriendReducer