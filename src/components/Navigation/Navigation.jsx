import React from 'react'
import {NavLink  } from "react-router-dom"
import classes from './styles.module.css'

export const Navigation = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
    <NavLink className={'link'} to="/" >Home</NavLink>
    <NavLink className={'link'} to="/movie/search" >Search</NavLink>
    <NavLink className={'link'} to="/logout" >Log out</NavLink>
    <NavLink className={'link'} to="/login" >Log in</NavLink>
    </nav>
  )
}
export default Navigation
