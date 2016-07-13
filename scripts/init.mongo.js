#!/usr/bin/mongo

var fakeWall1 = [
	{
		id: 0,
		author: 'jayana',
		text: 'hi'
	},
	{
		id: 1,
		author: 'mom',
		text: 'hi'
	}
]

var fakeWall2 = [
	{
		id: 0,
		author: 'dad',
		text: 'sup'
	},
	{
		id: 1,
		author: 'JJ',
		text: 'hi'
	}
]

var fakeWall3 = [
	{
		id: 0,
		author: 'JJ',
		text: 'sup'
	}
]

db = new Mongo().getDB("users");

// Reset collections
db.namesById.remove({})
db.profiles.remove({})

// Insert initial state
db.namesById.insert([
	{ id: 0, name: 'JJ' },
	{ id: 1, name: 'Jayana' },
	{ id: 2, name: 'Mom' },
	{ id: 3, name: 'Dad' },
	{ id: 4, name: 'Janethebae' }
])

db.profiles.insert([
	{ id: 0, name: 'JJ', friends: [0,1,3,4], wall: fakeWall1 },
	{ id: 1, name: 'Jayana', friends: [0,1,2], wall: fakeWall2 },
	{ id: 2, name: 'Mom', friends: [1,2], wall: [] },
	{ id: 3, name: 'Dad', friends: [0,3], wall: [] },
	{ id: 4, name: 'Jane', friends: [0], wall: fakeWall3 },
])