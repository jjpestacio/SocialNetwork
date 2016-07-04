import React, { Component } from 'react'
import Post from './post'

const Wall = ({posts}) => (
	<div>
		<h2>Wall</h2>
		<ul>
			{posts.map(post => 
				<Post key={post.id} author={post.author} text={post.text} />
			)}
		</ul>
	</div>
)

export default Wall