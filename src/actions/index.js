import axios from 'axios'

import { FETCH_DATA, FETCH_NAMES, SET_USER, ADD_FRIEND, REMOVE_FRIEND, REMOVE_POST, SUBMIT_POST, VIEW_PROFILE } from '../constants/ActionTypes'

export const addFriend = ( profileId, idToAdd ) => ( dispatch ) => {
	axios.post('/api/users/' + profileId, {
			type: ADD_FRIEND,
			id: idToAdd
		})
		.then(response => {
			dispatch(fetchData(profileId))
		})
}

export const fetchData = ( profileId ) => ( dispatch ) => {
	axios.get('/api/users/' + profileId)
		.then(response => {
			const { id, name, friends, wall } = response.data;
			dispatch({ type: FETCH_DATA,
				id, name, friends, wall
			})
		})
}

export const fetchNames = () => ( dispatch ) => {
	axios.get('/api/namesById')
		.then(response => {
			dispatch({
				type: FETCH_NAMES,
				namesById: response.data
			})
		})
}

export const removeFriend = ( profileId, idToRemove ) => ( dispatch ) => {
	axios.post('/api/users/' + profileId, {
			type: REMOVE_FRIEND,
			id: idToRemove
		})
		.then(response => {
			dispatch(fetchData(profileId))
		})
}

export const removePost = ( profileId, idToRemove ) => ( dispatch ) => {
	axios.post('/api/users/' + profileId, {
			type: REMOVE_POST,
			id: idToRemove
		})
		.then(response => {
			dispatch(fetchData(profileId))
		})
}

export const setUser = ( id, name ) => {
	return {
		type: SET_USER,
		userId: id,
		userName: name
	}
}

export const submitPost = ( profileId, post ) => ( dispatch ) => {
	axios.post('/api/users/' + profileId, {
			type: SUBMIT_POST,
			id: post.id,
			author: post.author,
			text: post.text
		})
		.then(response => {
			dispatch(fetchData(profileId))
		})
}