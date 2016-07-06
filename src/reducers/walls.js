import initialState from '../initialState'

// Action types
import { SUBMIT_POST, REMOVE_POST } from '../constants/ActionTypes'

const wallsByIdReducer = (state=initialState.wallsById, action) => {
	switch(action.type) {
		case SUBMIT_POST: {
			const { currentId, post } = action;
			
			return state.map((wallArrays, index) => {
				if (index != currentId)
					return wallArrays;

				else
					return [...wallArrays, post]; 
			})
		}

		case REMOVE_POST: {
			const { currentId, id } = action; 

			return state.map((wall, index) => {
				if (index != currentId)
					return wall;

				else {
					let temp = [...wall];
					temp.splice(id, 1);
					return temp;
				}
			})
		}

		default:
			return state;
	}
}

export default wallsByIdReducer