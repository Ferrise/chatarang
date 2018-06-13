import React from 'react'
import Avatar from './Avatar'
import User from './User'
import SignIn from './SignIn'

class UserInfo extends React.Component {  

    state = {
        defaultt: true
    }

    signOut = (ev) => {
        this.setState({defaultt: false})
    }
    render(){
        if(this.state.defaultt) {
            return (
                <div 
                className = 'UserInfo' 
                style = {styles.userInfo}
            >
                <Avatar style = {styles.avatarChildren} />
                <User 
                    style = {styles.userChildren} 
                    user = {this.props.user} 
                />
                <a href="#" style = {styles.aChildren} onClick = {this.signOut}>
                    <i className="fas fa-sign-out-alt" onClick = {this.signOut}></i>
                </a>
            </div>
            )
        }
        else {
            return <SignIn addUserName = {this.props.addUserName} />
        }
    }
}

const styles = {
    userInfo: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      },

      avatarChildren: {
        marginRight: '0.5rem',
      },
      
      userChildren: {
        flex: 1,
      },
      
      aChildren: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition:'color 0.25s ease-out',
      },
}

export default UserInfo

