import React from 'react'
import { Navigate } from 'react-router-dom'
import classes from './styles.module.css'
import { useUser } from '../../contexts/UserContext'
export const PageLogout = (props) => {
  const {
    className,
    logout,
    ...otherProps
  } = props
  const { logOut } = useUser()

  React.useEffect(() => {
    logOut()
  }, [])

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
  <Navigate
        to={'/'}
      />
    </div>
  )
}
export default PageLogout
