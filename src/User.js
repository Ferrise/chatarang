import React, { Component } from 'react'

const User = (props) => {
    return (
        <div className="user">
            {props.userName}
        </div>
    )
}

export default User