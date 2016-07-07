import { ADD_FRIEND, REMOVE_FRIEND, REMOVE_POST, SUBMIT_POST, VIEW_PROFILE } from '../constants/ActionTypes'

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

export function removePost(currentId, id) {
	return {
		type: REMOVE_POST,
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

export function viewProfile(id, currentId=0, friendsById=[]) {
	return {
		type: VIEW_PROFILE,
		currentId,
		id,
		friendsById
	}
}
