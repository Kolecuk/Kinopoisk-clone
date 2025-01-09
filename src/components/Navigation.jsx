import { Link, useLocation } from 'react-router'
import '../styles/navigation.scss'

export function Navigation() {
  const location = useLocation()

  let allLinkClassName = 'nav-link navigation__link'
  let popularLinkClassName = 'nav-link navigation__link'

  if (location.pathname.includes('all')) allLinkClassName += ' active'
  if (location.pathname.includes('popular')) popularLinkClassName += ' active'

  return (
    <nav className="d-flex align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <Link className={allLinkClassName} to="/films/all/1">Все</Link >
        </li>
        <li className="nav-item">
          <Link className={popularLinkClassName} to="/films/popular/1">Популярное</Link >
        </li>
      </ul>
    </nav>
  )
}