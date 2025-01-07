import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchFilm } from '../redux/film-slice.js'
import { Article } from '../components/Article.jsx'

export function Film() {
  const dispatch = useDispatch()
  const { kinopoiskId } = useParams()
  const { isLoaded, error } = useSelector((state) => state.film)

  useEffect(() => {
    dispatch(fetchFilm(kinopoiskId))
  }, [kinopoiskId, dispatch])

  if (isLoaded) {
    return <h3>Загрузка...</h3>
  }

  if (error) {
    return <div>Ошибка! {error}</div>
  }

  return (
    <Article />
  )
}