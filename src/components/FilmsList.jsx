import { FilmCardSmall } from './FilmCardSmall.jsx'

export function FilmsList(props) {
  const renderCard = (films) => {
    return (
      films.map(film => <FilmCardSmall key={film.kinopoiskId || film.filmId} {...film} />)
    )
  }

  return (
    <>
      {renderCard(props.films)}
    </>
  )
}
