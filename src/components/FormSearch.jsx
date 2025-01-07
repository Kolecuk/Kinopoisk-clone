import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { fetchFilmsSearch } from '../redux/films-slice'
import { FormField } from './FormField'
import { IconButton } from './IconButton'

export function FormSearch() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const searchInputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current.focus()
    }, 50)
  }, [searchInputRef])

  const handleChangeSearch = ({ target }) => setSearch(target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(fetchFilmsSearch({ keyword: search }))

    setSearch('')
    navigate('/films/search/1')
  }

  return (
    <form onSubmit={handleSubmit} className="position-relative w-50 mx-2">
      <FormField
        ref={searchInputRef}
        label="Поиск"
        name="search"
        type="text"
        placeholder="Введите название фильма ..."
        value={search}
        onChange={handleChangeSearch}
        id="search" />
      <IconButton
        type="button"
        icon="filter"
        className="position-absolute bottom-0 end-0 btn btn-outline-none p-1 me-5"
      />
      <IconButton
        type="submit"
        icon="search"
        className="position-absolute bottom-0 end-0 btn btn-outline-none p-1 me-1"
      />
    </form>
  )
}