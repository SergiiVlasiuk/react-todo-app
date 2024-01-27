import React from 'react'
import './Button.css'

const Button = ({ children, classes = [], attributes = {} }) => {
  classes.push( 'btn' )
  return (
    <button className={classes.join( ' ' )} {...attributes}>
      {children}
    </button>
  )
}

export default Button
