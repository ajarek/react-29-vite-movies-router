import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Navigation = (props) => {
  const { className, ...otherProps } = props

  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <NavLink
        className={classes.link}
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className={classes.link}
        to='/movie/search'
      >
        Search
      </NavLink>
      <NavLink
        className={classes.link}
        to='/logout'
      >
        Log out
      </NavLink>
     
    </nav>
  )
}
export default Navigation
