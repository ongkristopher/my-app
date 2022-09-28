import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  user = {
    firstName: 'Kristopher',
    lastName: 'Ong'
  };
          
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Hi! My name is {this.formatName(this.user)}!
        </p>
      </header>
    </div>
    )
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
}
