import initialState from '../initialState'
import { POST, VIEW_PROFILE } from '../constants/ActionTypes'

import { people } from '../initialState'

const wallReducer = (state=initialState.wall, action) => {
	switch(action.type) {
		case POST: {
			const post = {
				id: action.id,
				author: action.author,
				text: action.text
			};

			return [...state, post];
		}

		case VIEW_PROFILE: {
			return [...people[action.id].wall];
		}

		default:
			return state
	}
}

export default wallReducer