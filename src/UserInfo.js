import React from 'react'
import Avatar from './Avatar'
import User from './User'


const UserInfo = (props) => {
    return(
        <div 
            className = 'UserInfo' 
            style = {styles.userInfo}
        >
            <Avatar style = {styles.avatarChildren} />
            <User 
                style = {styles.userChildren} 
                user = {props.user} 
            />
            <a href="#" style = {styles.aChildren}>
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
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

