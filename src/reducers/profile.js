import initialState from '../initialState'

import { VIEW_PROFILE } from '../constants/ActionTypes'

const viewProfile = (state=initialState.profile, action) => {
	switch(action.type) {
		case VIEW_PROFILE: {
			return {
				profile: action.id,
			}
		}

		default:
			return state;
	}
}

export default viewProfile