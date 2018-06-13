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
  }

  render() {
    var page = ""
    
    if(this.state.user.userName) {
      return  (<Main user={this.state.user.userName} 
               addUserName = {this.addUserName} 
              />)
    }
    else {
      return <SignIn addUserName = {this.addUserName} />
    }

    return (
      <div className="App">
        page
      </div>
    )
  }
}

export default App
