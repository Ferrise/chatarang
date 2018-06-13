import React from 'react'
import Avatar from './Avatar'
import MetaData from './MetaData'

const Message = (props) => {
    return (
        <div>
            <Avatar />
            <MetaData 
                userName = {props.message.userName}
                id = {props.message.id}
            />
            <div className="Message">
                {props.message.userName}: {props.message.body}
            </div>
        </div>
    )
    
    
}

export default Message