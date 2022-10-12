import React from 'react'
import { useFetch} from '../../api/useFetch'
import classes from './styles.module.css'
import { FullPageLayout } from '../../components/FullPageLayout/FullPageLayout'
import { Loading } from '../../components/Loading/Loading'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

export const PageHome = (props) => {
  const {
    className,
    ...otherProps
  } = props
 
 const url=`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_KEY_OMDB}&type=movie&s=batman&page=1`
  const{ data, pending, error}=useFetch(url)
 
  return (
    <>
     {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        {pending ? (
          <FullPageLayout>
            <Loading />
          </FullPageLayout>
        ) : null}
    
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
