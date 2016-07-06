# SocialNetwork

I created a mock social network to practice ReactJS, Flux, and Redux. I decided to use Redux as the framework for this project.

TO USE

```
npm install
npm start
```

Server is running on localhost:3000

LOG

07/04/2016
I have not styled the UI yet since styling is not the main focus of this project.

At its current state, the social network was centered around the user; the user's friends, wall, and other people are displayed on the home page. The user can post on his/her own wall and add/remove friends. I was adding functionality for viewing the user's friends' profiles, however I encountered a design problem. Since I centered the application around the user, I could not effectively scale the components to render other people's profiles. Before I move on with the project, I am going to fix the design to accompany any type of user by referencing an item from the store that stores the current profile ID to view. This will allow for differentiation between the user, friends, and other people when viewing profiles. 

07/06/2016
I restructured the design so that it was not centered around the user. I instead indexed all the accounts and their data in the store and created a 'currentId' store element to hold the current profile to view. This made navigation easier by allowing any profile id to be pushed onto the browserHistory. This allowed the profile's data to be generated dynamically through the components. This creates the illusion that each profile has its own page. The data is currently generated locally rather than being stored in a database. I will implement a database at a later time.

Next I will be adding unique functionality for the user. I will be changing how components render on a certain account's page depending on whether or not the user is his/her friend. I am not sure what else I will be implementing in this section.
