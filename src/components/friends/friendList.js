import React, { Component } from 'react'

import Friend from './friend'

const FriendList = ({userId, viewProfile, removeFriend, friends}) => (
	<div>
		<h2>FriendList</h2>
		<ul>
			{friends.map(friend =>
				<Friend key={friend.id} name={friend.name} onClick={() => removeFriend(friend.id)} viewProfile={() => viewProfile(friend.id)}/>
			)}
		</ul>
	</div>
)

export default FriendList