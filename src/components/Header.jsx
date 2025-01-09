import { Link } from 'react-router'
import { IconButton } from './IconButton'
import { Navigation } from './Navigation'
import { FormSearch } from './FormSearch'

export function Header() {
  return (
    <header className="d-flex justify-content-between mx-5 my-3">
      <Link className="d-flex align-items-center" to="/">
        <IconButton
          type="button"
          icon="logo"
          className="btn btn-outline-none"
        />
      </Link>
      <Navigation />
      <FormSearch />
    </header>
  )
}