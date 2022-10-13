import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../api/useFetch'
import classes from './styles.module.css'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import { Loading } from '../../components/Loading/Loading'
import { FullPageLayout } from '../../components/FullPageLayout/FullPageLayout'

export const PageMoviesResult = (props) => {
  const { className, ...otherProps } = props
  const id = useParams()
  const [movies, setMovies] = useState({})
  const { data, pending, error } = useFetch(
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_KEY_OMDB}&i=${
      id.imdbID
    }`
  )
  useEffect(() => {
    setMovies(data)
  })
  let copyOfObject = { ...movies }
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      <div className={classes.info}>
        <p>Title:</p>
        <h3>{copyOfObject.Title}</h3>
        <p>Actors:</p>
        <h3>{copyOfObject.Actors}</h3>
        <p>Director:</p>
        <h3>{copyOfObject.Director}</h3>
        <p>Writer:</p>
        <h3>{copyOfObject.Writer}</h3>
        <p>Genre:</p>
        <h3>{copyOfObject.Genre}</h3>
        <p>Released:</p>
        <h3>{copyOfObject.Released}</h3>
        <p>Plot:</p>
        <h3>{copyOfObject.Plot}</h3>
        <p>Runtime:</p>
        <h3>{copyOfObject.Runtime}</h3>
      </div>
      <div className={classes.img}>
        <img
          src={copyOfObject.Poster}
          alt={copyOfObject.Title}
        />
      </div>
    </div>
  )
}
export default PageMoviesResult
