import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams, useLocation } from 'react-router'
import { fetchFilms, fetchFilmsPopular, fetchFilmsSearch, fetchFilmsFilter } from '../redux/films-slice'
import { Pagination } from '../components/Pagination'

export function Films() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { currentPage } = useParams()
  const { list: films, pageCount, keyword, isLoaded, error, filter } = useSelector((state) => state.films)

  useEffect(() => {
    if (location.pathname.includes('all')) {
      dispatch(fetchFilms({ page: currentPage }))
    }
    if (location.pathname.includes('popular')) {
      dispatch(fetchFilmsPopular({ page: currentPage }))
    }
    if (location.pathname.includes('search') && keyword) {
      dispatch(fetchFilmsSearch({ keyword, page: currentPage }))
    }
    if (location.pathname.includes('filter') && filter) {
      dispatch(fetchFilmsFilter({ ...filter, page: currentPage }))
    }
  }, [location, currentPage, dispatch])

  if (!films.length) {
    return <h3>Нет фильмов</h3>
  }

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
    <>
      <Outlet />
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </>
  )
}