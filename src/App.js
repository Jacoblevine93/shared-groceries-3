import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import User from './components/User.js';
import GroceryList from './components/GroceryList.js';
import ButtonList from './components/ButtonList.js';


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
      activeItem: 'carrots',
      username: 'Guest'
    };
  }

  setActiveItem=(item)=> {
    this.setState({activeItem: item});
  }

  setUser=(user)=> {
    if (user === null) {user = 'Guest'}
    this.setState({username: user});
  }

  render() {
    return (
      <div className="App container-fluid">
        <div id="item-list-row" class="row">
          <div class="col-lg-3 padding-0">
            <User
            setUser={this.setUser}
            currentUser={this.state.username}
            firebase={firebase}
            />
          </div>
          <div class="col-lg-9 padding-0">
            <GroceryList
            currentItem={this.state.activeItem}
            setActiveItem={this.setActiveItem}
            firebase={firebase}
            />
            <ButtonList
            currentItem={this.state.activeItem}
            firebase={firebase}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
