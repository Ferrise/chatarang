import React from 'react'

const MessageForm = () => {
    return (
        <form className="MessageForm" name="body" placeholder ="Type a message...">
            <input type="text" name="message"/>
            <button type="submit">Send</button>
        </form>
    )
}

export default MessageForm