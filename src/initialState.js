let fakeWall1 = [
	{
		author: 'JJ',
		text: 'hi'
	},
	{
		author: 'mom',
		text: 'hi'
	}
]

let fakeWall2 = [
	{
		author: 'dad',
		text: 'sup'
	},
	{
		author: 'USER',
		text: 'hi'
	}
]

const initialState = {
	currentId: '0',
	isFriend: true,
	
	ids: [0,1,2,3],

	namesById: [
		'USER',
		'JJ',
		'mom',
		'dad'
	],
	
	friendsById: [
		[1,2,3],
		[0,2],
		[0,1],
		[0]
	],

	wallsById: [
		fakeWall1,
		fakeWall2,
		[],
		[]
	]
}

export default initialState