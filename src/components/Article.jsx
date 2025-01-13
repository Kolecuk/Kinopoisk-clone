import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorites } from '../redux/films-slice'
import { Image } from './Image'
import { FilmTitle } from './FilmTitle'
import { FilmText } from './FilmText'
import { IconButton } from './IconButton'

export function Article() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.film)
  const { favorites } = useSelector((state) => state.films)
  const [icon, setIcon] = useState('isNotFavorite')

  useEffect(() => {
    if (favorites.find(item => (item.kinopoiskId || item.filmId) === (data.kinopoiskId || data.filmId))) {
      setIcon('isFavorite')
    } else {
      setIcon('isNotFavorite')
    }
  }, [favorites])

  const toggleFavorite = () => {
    dispatch(changeFavorites(data))
  }

  function renderTitle(nameOriginal, nameEn, nameRu) {
    const name = nameRu || nameOriginal || nameEn
    return (
      <FilmTitle title={name} />
    )
  }

  function renderGenre(genres) {
    if (!genres) return null
    const filmGenre = genres.map((item) => item.genre).join(', ')
    return (
      <FilmText text={filmGenre}>Жанр:</FilmText>
    )
  }

  function renderCountry(countries) {
    if (!countries) return null
    const filmCountry = countries.map((item) => item.country).join(', ')
    return (
      <FilmText text={filmCountry}>Страна:</FilmText>
    )
  }

  function renderRating(ratingKinopoisk) {
    if (!ratingKinopoisk) return null
    return (
      <FilmText text={ratingKinopoisk}>Рейтинг Kinopoisk:</FilmText>
    )
  }

  function renderDescription(description) {
    if (!description) return null
    return (
      <FilmText text={description}>Описание:</FilmText>
    )
  }

  return (
    <article key={data.kinopoiskId} className="d-flex flex-column">
      <div className="position-relative d-flex p-2 align-items-center">
        <div className="w-25">
          <Image src={data.posterUrl} alt="film poster" className="p-4 img-fluid" />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          {renderTitle(data.nameOriginal, data.nameEn, data.nameRu)}
          {renderGenre(data.genres)}
          {renderCountry(data.countries)}
          {renderRating(data.ratingKinopoisk)}
        </div>
        <IconButton
          type="button"
          icon={icon}
          className="btn btn-outline-none p-2 position-absolute end-0 top-50 translate-middle-y"
          handleClick={toggleFavorite}
        />
      </div>
      {renderDescription(data.description)}
    </article>
  )
}