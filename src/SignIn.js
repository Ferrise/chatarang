import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        userName: ''
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addUserName(this.state.userName)
    }

    handleChange = (ev) => {
        this.setState({userName: ev.target.value})
    }

    render() {
        return (
            <form 
                className = 'SignIn'
                onSubmit = {this.handleSubmit}
            >
                <input
                    type = "text"
                    name = "userName"
                    placeholder = "Enter username"
                    value = {this.state.userName}
                    onChange = {this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default SignIn