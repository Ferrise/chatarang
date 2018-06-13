import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'


class App extends Component {
  state = {
    user: {
      uid: '142341',
      userName: '',
    }
  }

  addUserName = (name) => {
    this.setState({user: {userName: name}})
    localStorage.setItem('user', JSON.stringify(this.state.user))
  }

  render() {
    var page = ""
    
    if(this.state.user.userName) {
      return <div className="App"> (<Main user={this.state.user.userName} 
               addUserName = {this.addUserName} 
              />) </div>
    }
    else {
      return <div className="App"> <SignIn addUserName = {this.addUserName} /> </div>
    }
  }
}

export default App
