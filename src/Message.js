import React from 'react'

import Avatar from './Avatar'
import Metadata from './MetaData'

const Message = ({ message }) => {
  return (
    <div className="Message" style={styles.message}>
      <Avatar user={message.user} />
      <div className="details" style={styles.details}>
        <Metadata message={message} />
        <div className="body">
          {message.isImg ? <img src = {`${message.body}`} height = '500' width = '500' alt = ""/> :
          message.body} 
        </div>
      </div>
    </div>
  )
}

const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  }
}

export default Message