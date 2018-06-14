import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const RoomLink = (props) => {
    return(
        <li className={css(styles.item)}>
          <a href="./index.html" className={css(styles.link)} onClick = { (ev) => this.props.loadRoom('general')}>general</a>
        </li>
    )
}

const styles = StyleSheet.create({
    nav: {
      padding: '0 1rem',
    },
  
    h2: {
      fontSize: '1rem',
    },
  
    list: {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
    },
  
    item: {
      marginBottom: '0.5rem',
    },
  
    link: {
      display: 'block',
      color: 'whitesmoke',
      textDecoration: 'none',
  
      '::before': {
        content: '"# "',
      },
  
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    },
  })

  export default RoomLink 
  