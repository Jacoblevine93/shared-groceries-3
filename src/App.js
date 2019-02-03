import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import User from './components/User.js';

  var config = {
    apiKey: "AIzaSyAsAloEkOWRRI644pZs1af4DgagqGKx5zg",
    authDomain: "shared-groceries.firebaseapp.com",
    databaseURL: "https://shared-groceries.firebaseio.com",
    projectId: "shared-groceries",
    storageBucket: "shared-groceries.appspot.com",
    messagingSenderId: "271929805627"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: 'Room 1',
      username: 'Guest'

    };
  }

  setActiveRoom=(room)=> {
    console.log(room.key)
    this.setState({activeRoom: room});
  }

  setUser=(user)=> {
    if (user === null) {user = 'Guest'}
    this.setState({username: user});
    console.log(this.state.username)
  }

  render() {
    return (
      <div className="App container-fluid">
        <div id="room-list-row" class="row">
          <div class="col-lg-3 padding-0">
            <User
            setUser={this.setUser}
            currentUser={this.state.username}
            firebase={firebase}
            />
          </div>
          <div class="col-lg-9 padding-0">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
