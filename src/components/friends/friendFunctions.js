import React, { Component } from 'react'

export const grabFriends = ( currentId, friends, isFriend, removeFriend, viewProfile ) => {
	if (!isFriend)
		return ( <h4>You must add this person to see their friend list.</h4> )

	if (friends === undefined)
		return false
	
	return (
		friends.map((friend, index) =>  
			<Friend key={index} currentId={currentId} 
				id={friend.id} name={friend.name} 
				viewProfile={() => viewProfile(friend.id)} 
				removeFriend={() => removeFriend(friend.id)}/>
		)
	)
}