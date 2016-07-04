const person = (id, name, friend, people, wall) => {
	return {id, name, friend, people, wall};
}

const userWall = [
	{
		id: 0,
		author: 'jj',
		text: 'hi'
	}
]

let fakeWall = [
	{
		id: 0,
		author: 'sup',
		text: 'hi'
	}
]

export let people = [
	person(0, 'jj', true, [], fakeWall),
	person(1, 'jayana', true, [], []),
	person(2, 'mom', false, [], []),
	person(3, 'john', false, [], [])
]

const initialState = {
	profile: -1,
	people,
	wall: userWall
}

export default initialState