import React from 'react'
import User from './User'

const MetaData = (props) => {
    return (
        <div className = "MessageDetails">
            <div 
                className="Metadata"
                styles = {styles.metaData}
            >
                <User
                    userName = {props.userName}
                    styles = {styles.userChildren}
                />
                <div 
                    className="time"
                    styles = {styles.timeChildren}
                >
                    {props.id}
                </div>
            </div>
        </div>
    )
}

const styles = {
    metaData: {
        display: 'flex',
        alignItems: 'baseline',
      },
      
      userChildren: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
      },
      
      timeChildren: {
        color: '#999',
        fontSize: '0.8rem',
      },
}
export default MetaData