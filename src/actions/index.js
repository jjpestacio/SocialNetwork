import { ADD_FRIEND, VIEW_PROFILE, REMOVE_FRIEND, SUBMIT_POST, REMOVE_POST } from '../constants/ActionTypes'

export function viewProfile(id) {
	return {
		type: VIEW_PROFILE,
		id,
	}
}

export function addFriend(currentId, id) {
	return {
		type: ADD_FRIEND,
		currentId,
		id
	}
}

export function removeFriend(currentId, id) {
	return {
		type: REMOVE_FRIEND,
		currentId,
		id
	}
}

export function submitPost(currentId, post) {
	return {
		type: SUBMIT_POST,
		currentId,
		post
	}
}

export function removePost(currentId, id) {
	return {
		type: REMOVE_POST,
		currentId,
		id
	}
}