import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams, useLocation } from 'react-router'
import { fetchFilms, fetchFilmsSearch } from '../redux/films-slice.js'
import { Pagination } from '../components/Pagination.jsx'

export function Films() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { currentPage } = useParams()
  const { pageCount, keyword, isLoaded, error } = useSelector((state) => state.films)

  useEffect(() => {
    if (location.pathname.includes('all')) {
      dispatch(fetchFilms({ page: currentPage }))
    }
    if (location.pathname.includes('search') && keyword) {
      dispatch(fetchFilmsSearch({ keyword, page: currentPage }))
    }
  }, [currentPage, dispatch])

  if (isLoaded) {
    return <h3>Загрузка...</h3>
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