import React, { Component } from 'react';

import Person from './person'

const PeopleList = ({addFriend, people}) => (
	<div>
		<h2>PeopleList</h2>
		<ul>
			{people.map(person =>
				<Person key={person.id} name={person.name} onClick={() => addFriend(person.id)}/>
			)}
		</ul>
	</div>
) 

export default PeopleList