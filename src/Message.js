import React from 'react'
import Avatar from './Avatar'
import MetaData from './MetaData'

const Message = (props) => {
    return (
        <div>
            <MetaData 
                userName = {props.message.userName}
                id = {props.message.id}
                style = {styles.detailsChildren}
            />
            <div 
                className="Message"
                style = {styles.message}>
                {props.message.userName}: {props.message.body}
            </div>
        </div>
    )
    
    
}

const styles ={
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
      },
      
      detailsChildren: {
        flex: 1,
        paddingLeft: '0.5rem',
      },
}
export default Message