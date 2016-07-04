import React, { Component } from 'react'

// import { FriendList, PeopleList, Wall } from '../components/index';
import FriendListContainer from './friendListContainer'
import PeopleListContainer from './peopleListContainer'
import WallContainer from './wallContainer'
import PostToWall from '../components/postToWall'

export default class App extends Component {
  render() {
    return (
      <div className="page"> 

        <div className="navbar"></div>

        <div className="content">
          <div className="friends-list">
            <FriendListContainer />
          </div>

          <div className="people-list">
            <PeopleListContainer />
          </div>

          <div className="wall">
            <WallContainer />
            <PostToWall />
          </div>
        </div>
      </div>
    );
  }
}
