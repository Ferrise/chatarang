import React from 'react'
import Message from './Message'

const MessageList = (props) => {
    const messages = [
        {id: 1, userName: 'fesposi', body: 'Chatting up a strom, yo!'},
        {id: 2, userName: 'dpalazzo', body: 'This guy is so annoying. I hate my job.'},
    ]

    return (
        <div className="MessageList">
            {
                props.messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

export default MessageList