import initialState from '../initialState'

import { ADD_FRIEND, REMOVE_FRIEND } from '../constants/ActionTypes'

const friendsByIdReducer = (state=initialState.friendsById, action) => {
	switch(action.type) {
		case ADD_FRIEND: {
			const { currentId, id } = action;

			return state.map((friendsArray, index) => {
				if(index != currentId)
					return friendsArray;

				else
					return [...friendsArray, id]
			})
		}

		case REMOVE_FRIEND: {
			const { currentId, id } = action;
			
			return state.map((friendsArray, index) => {
				if (index != currentId)
					return friendsArray;
				else 
					return friendsArray.filter(friendId =>
						friendId != id
					)
			})
		}

		default:
			return state;
	}
}

export default friendsByIdReducer