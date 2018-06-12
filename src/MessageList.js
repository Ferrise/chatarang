import React from 'react'

const MessageList = () => {
    const messages = [
        {id: 1, userName: 'fesposi', body: 'Chatting up a strom, yo!'},
        {id: 2, userName: 'dpalazzo', body: 'This guy is so annoying. I hate my job.'},
    ]

    return (
        <div className="MessageList">
            {
                messages.map(message => (
                <div key={message.id}>
                    { message.userName}: {message.body}
                </div>
                ))
            }
        </div>
    )
}

export default MessageList