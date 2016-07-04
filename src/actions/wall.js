import * as types from '../constants/ActionTypes';

let postId = 1;

export function getPosts(id) {
	return {
		id,
		type: types.GET_POSTS
	}
}

export function post(post) {
	return {
		id: postId++,
		type: types.POST,
		author: post.author,
		text: post.text
	}
}