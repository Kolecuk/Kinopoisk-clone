import { Link, useLocation } from 'react-router'
import '../styles/navigation.scss'

export function Navigation() {
  const location = useLocation()

  let allLinkClassName = 'nav-link navigation__link'
  let popularLinkClassName = 'nav-link navigation__link'
  let favoriteLinkClassName = 'nav-link navigation__link'

  if (location.pathname.includes('all')) allLinkClassName += ' active'
  if (location.pathname.includes('popular')) popularLinkClassName += ' active'
  if (location.pathname.includes('favorite')) favoriteLinkClassName += ' active'

  return (
    <nav className="d-flex align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <Link className={allLinkClassName} to="/films/all/1">Все</Link >
        </li>
        <li className="nav-item">
          <Link className={popularLinkClassName} to="/films/popular/1">Популярное</Link >
        </li>
        <li className="nav-item">
          <Link className={favoriteLinkClassName} to="/films/favorite/1">Избранное</Link >
        </li>
      </ul>
    </nav>
  )
}