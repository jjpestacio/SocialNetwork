# SocialNetwork

I created a mock social network to practice ReactJS, Flux, and Redux. I decided to use Redux as the framework for this project. I have not styled the UI yet since styling is not the main focus of this project.

TO USE

`npm install`
`npm start`

Server is running on localhost:3000

NOTES

At its current state, the social network was centered around the user; the user's friends, wall, and other people are displayed on the home page. The user can post on his/her own wall and add/remove friends. I was adding functionality for viewing the user's friends' profiles, however I encountered a design problem. Since I centered the application around the user, I could not effectively scale the components to render other people's profiles. Before I move on with the project, I am going to fix the design to accompany any type of user by referencing an item from the store that stores the current profile ID to view. This will allow for differentiation between the user, friends, and other people when viewing profiles. 
