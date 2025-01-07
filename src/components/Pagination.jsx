import { NavLink, useLocation } from 'react-router'
import { BuildPaginationScheme } from '../utils/paginationScheme'

export function Pagination(props) {
  const location = useLocation()

  function getPath(location, item) {
    if (location.pathname.includes('all')) return `/films/all/${item}`
    if (location.pathname.includes('search')) return `/films/search/${item}`
  }

  function renderPaginationItems() {
    const scheme = BuildPaginationScheme(props.currentPage, props.pageCount)

    return scheme.map((item, index) => {
      return (
        <li className="page-item" key={index}>
          {item === '...' ?
            <span className="page-link">...</span> :
            <NavLink className="page-link" to={getPath(location, item)}>{item}</NavLink>
          }
        </li>
      )
    })
  }

  function renderPagination() {
    return (
      <nav>
        <ul className="pagination">
          {renderPaginationItems()}
        </ul>
      </nav>
    )
  }

  return (
    <>
      {renderPagination()}
    </>
  )
}