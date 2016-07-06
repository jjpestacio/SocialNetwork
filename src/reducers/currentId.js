import initialState from '../initialState'
import { browserHistory } from 'react-router'
import { VIEW_PROFILE } from '../constants/ActionTypes'

const currentIdReducer = (state=initialState.currentId, action) => {
	switch(action.type) {
		case VIEW_PROFILE: {
			const { id } = action;
			return state = id;
		}

		default:
			return state;
	}
}

export default currentIdReducer