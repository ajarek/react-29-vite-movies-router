import React from 'react'

import classes from './styles.module.css'

export const PageMoviesSearch = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
PageMoviesSearch
    </div>
  )
}
export default PageMoviesSearch
