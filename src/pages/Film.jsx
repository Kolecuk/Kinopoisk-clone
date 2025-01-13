import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchFilm } from '../redux/film-slice'
import { Article } from '../components/Article'

export function Film() {
  const dispatch = useDispatch()
  const { kinopoiskId } = useParams()
  const { isLoaded, error } = useSelector((state) => state.film)

  useEffect(() => {
    dispatch(fetchFilm(kinopoiskId))
  }, [kinopoiskId, dispatch])

  if (isLoaded) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Ошибка! {error}</div>
  }

  return (
    <Article />
  )
}