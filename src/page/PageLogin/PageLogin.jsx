import React from 'react'
import { useUser } from '../../contexts/UserContext'
import classes from './styles.module.css'

export const PageLogin = (props) => {
  const {
    className,
    login,
    ...otherProps
  } = props
  const { logIn } = useUser()
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
      onClick={login}
    >
         PageLogin
      <button
        onClick={logIn}
      >
        CLICK TO LOG IN
      </button>
      
    </div>
  )
}
export default PageLogin
