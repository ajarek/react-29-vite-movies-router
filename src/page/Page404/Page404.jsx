import React from 'react'

import classes from './styles.module.css'

export const Page404 = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
       <h1>Oops!</h1>
       <h2>404-PAGE NOT FOUND</h2>
       <p>The page you are looking for might have been removed</p>
       <p>had its name changed or is temporarily unavailable</p>
    </div>
  )
}
export default Page404
