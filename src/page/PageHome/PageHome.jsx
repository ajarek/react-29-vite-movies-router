import React from 'react'
import { useFetch} from '../../api/useFetch'
import classes from './styles.module.css'

export const PageHome = (props) => {
  const {
    className,
    ...otherProps
  } = props
 
 const url=`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_KEY_OMDB}&type=movie&s=star wars&page=1`
  const{data}=useFetch(url)
 
  return (
    <>
     <h1 className='h1'>PageHome</h1>
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

   {data&&data.Search.map(el=>
    <div className={classes.wrapper} key={el.imdbID}>
    <img  src={el.Poster} alt="picture" /> 
    <p>{el.Title}</p>
    </div>

    
   )}
    </div>
    </>
  )
}
export default PageHome
