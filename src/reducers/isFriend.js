import initialState from '../initialState'

import { VIEW_PROFILE } from '../constants/ActionTypes'

const isFriendReducer = (state=initialState.isFriend, action) => {
	switch(action.type) {
		case VIEW_PROFILE: {
			return state;
		}

		default:
			return state;
	}
}

export default isFriendReducer