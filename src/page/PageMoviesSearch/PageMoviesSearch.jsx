import React, { useState } from 'react'
import classes from './styles.module.css'
import { useFetch } from '../../api/useFetch'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import { Loading } from '../../components/Loading/Loading'
import { FullPageLayout } from '../../components/FullPageLayout/FullPageLayout'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { useDebounce } from 'react-use'

export const PageMoviesSearch = (props) => {
  const { className, ...otherProps } = props
  let { searchPhrase } = useParams()
  const navigate = useNavigate()
  const [tmpSearchPhrase, setTmpSearchPhrase] = useState(searchPhrase || '')
  const [, cancel] = useDebounce(
    () => {
      if (searchPhrase !== tmpSearchPhrase) navigate(tmpSearchPhrase)
    },
    1000,
    [tmpSearchPhrase]
  )

  React.useEffect(() => {
    return () => cancel()
  }, [cancel])
  const url = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_KEY_OMDB
  }&type=movie&s=${tmpSearchPhrase}`

  const { data, pending, error } = useFetch(url)

  return (
    <div className={classes.general}>
      <h3> PageMoviesSearch</h3>
      <input
        value={tmpSearchPhrase}
        onChange={(e) => setTmpSearchPhrase(e.target.value.replaceAll('/', ''))}
        placeholder={'title...'}
        style={{ fontSize: '1.5rem', padding: '0 0.5rem' }}
      />

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
        {data &&
          data.Search?.map((el) => (
            <NavLink
              className={classes.link}
              to={`/movies/${el.imdbID}`}
              key={el.imdbID}
            >
              <div className={classes.wrapper}>
                <img
                  src={
                    el.Poster !== 'N/A'
                      ? el.Poster
                      : 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-no-video-icon-download-image_1147177.jpg'
                  }
                  alt='picture'
                />
                <p>{el.Title}</p>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  )
}
export default PageMoviesSearch
