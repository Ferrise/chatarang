import React from 'react'

const RoomList = () => {
    return (
        <nav className="RoomList">
            <h2 style = {styles.h2Children}>Rooms</h2>
            <ul style = {styles.ulChildren}>
                <li style = {styles.liChildren}>
                    <a 
                        href="#"
                        styles= {styles.liAChildren}
                    > 
                        general
                    </a>
                </li>
                <li style = {styles.liChildren}>
                    <a 
                        href="#"
                        styles= {styles.liAChildren}
                    > 
                        random
                    </a>
                </li>
            </ul>
        </nav>
    )
}

const styles = {
    h2Children: {
        fontSize: '1rem',
    },
      
    ulChildren: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },
      
    liChildren: {
        marginBottom: '0.5rem',
    },
      
    liAChildren: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },
}

export default RoomList
