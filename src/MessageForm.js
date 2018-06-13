import React, { Component } from 'react'

class MessageForm extends Component {
    state = {
        body: '',
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage(this.state.body)
    }
    
    handleChange = (ev) => {
        this.setState({ body: ev.target.value })
    }

    render(){
        return (
            <form 
            className="MessageForm" 
            style = {styles.messageForm}
            onSubmit = {this.handleSubmit} 
            >
                <input 
                    type="text" 
                    name="body" 
                    placeholder="Type a message..." 
                    style = {styles.inputChildren}
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="submit">Send</button>
            </form>
        )
    }
}

const styles = {
    messageForm: {
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: 0,
      },
      
      inputChildren: {
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
      },
}

export default MessageForm