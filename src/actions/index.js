import axios from 'axios'
import { browserHistory } from 'react-router'

import { 
	ADD_FRIEND, CREATE_ACCOUNT, FETCH_DATA, 
	FETCH_NAMES, REMOVE_FRIEND, REMOVE_POST, 
	SET_USER, SUBMIT_POST, VIEW_PROFILE } 
from '../constants/ActionTypes'

export const addFriend = ( profileId, idToAdd ) => ( dispatch ) => {
	axios.post('/api/users/' + profileId, {
			type: ADD_FRIEND,
			id: idToAdd
		})
		.then(response => {
			dispatch(fetchData(profileId))
		})
}

export const createAccount = ( userId, username ) => ( dispatch ) => {
	axios.post('/api/users/' + userId, {
		type: CREATE_ACCOUNT,
		id: userId,
		name: username
	})

	// Go to newly created account's homepage
	dispatch(setUser(userId, username));
	dispatch(fetchNames());
	dispatch(fetchData(userId));
	browserHistory.push('/' + userId);
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
		username: name
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