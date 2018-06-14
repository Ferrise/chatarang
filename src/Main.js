import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Sidebar from './Sidebar'
import Chat from './Chat'

import base from './base'

class Main extends Component {
  state = {
    room: {
      name: 'generdfal',
      description: 'Annoudfasdncements and general chat'
    }
  }
  
  loadRoom = (room) => {  
    this.setState({ room: room })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user} loadRoom={this.loadRoom} signOut={this.props.signOut} />
        <Chat 
          user={this.props.user} 
          room={this.state.room}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main