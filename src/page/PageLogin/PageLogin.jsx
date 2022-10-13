import React from 'react'
import classes from './styles.module.css'
import { Form } from '../../components/Form/Form'

export const PageLogin = (props) => {
  const { className, ...otherProps } = props
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageLogin
      <Form />
    </div>
  )
}

export default PageLogin
