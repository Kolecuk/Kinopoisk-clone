import { useSelector } from 'react-redux'
import { FilmsList } from '../components/FilmsList'

export function FilmsFavorites() {
  const { favorites: films } = useSelector((state) => state.films)

  if (!films.length) {
    return <h3 className="my-5">Нет избранных фильмов</h3>
  }

  return (
    <FilmsList films={films} />
  )
}

//TODO: repair pagination on FavoritePage