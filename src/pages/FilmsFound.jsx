import { useSelector } from 'react-redux'
import { FilmsList } from '../components/FilmsList'

export function FilmsFound() {
  const { list: films } = useSelector((state) => state.films)

  return (
    <FilmsList films={films} />
  )
}