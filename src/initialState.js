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

let fakeWall3 = [
	{
		author: 'JJ',
		text: 'Hi girlfriend c: .. I love you very much hehe'
	}
]

const initialState = {
	currentId: 0,
	isFriend: true,
	
	ids: [0,1,2,3,4],

	namesById: [
		'USER',
		'JJ',
		'mom',
		'dad',
		'JANETHEBAE'
	],
	
	friendsById: [
		[0,1,3,4],
		[0,1,2],
		[1,2],
		[0,3],
		[0]
	],

	wallsById: [
		fakeWall1,
		fakeWall2,
		[],
		[],
		fakeWall3,
	]
}

export default initialState