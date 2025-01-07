import { Link } from 'react-router'
import { IconButton } from './IconButton'
import { FormSearch } from './FormSearch'

export function Header() {
  return (
    <header className="d-flex justify-content-between mx-5 my-3">
      <Link to="/">
        <IconButton
          type="button"
          icon="logo"
          className="btn btn-outline-none"
        />
      </Link>
      <FormSearch />
    </header>
  )
}