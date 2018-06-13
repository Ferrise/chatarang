import React from 'react'

const ChatHeader = () => {
    return (
        <div 
            className = "ChatHeader"
            style = {styles.chatHeader}
        >
            <div className="roomInfo">
                <h2 style = {styles.roomInfoH2Children}>#general</h2>
                <p style = {styles.roomInfoPChildren}>Announcements and general chat</p>
            </div>
        </div>
    )
}

const styles = {
    chatHeader: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
      },
      
      roomInfoH2Children: {
        fontSize: '1.1rem',
        margin: 0,
      },
      
      roomInfoPChildren: {
        color: '#999',
        margin: 0,
        fontSize: '0.8rem',
      }
}
export default ChatHeader