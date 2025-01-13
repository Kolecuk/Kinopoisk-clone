import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { changeFavorites } from '../redux/films-slice'
import { Image } from './Image'
import { FilmTitle } from './FilmTitle'
import { FilmText } from './FilmText'
import { IconButton } from './IconButton'

export function FilmCardSmall(props) {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.films)
  const [icon, setIcon] = useState('isNotFavorite')

  useEffect(() => {
    if (favorites.find(item => (item.kinopoiskId || item.filmId) === (props.kinopoiskId || props.filmId))) {
      setIcon('isFavorite')
    } else {
      setIcon('isNotFavorite')
    }
  }, [favorites])

  const toggleFavorite = () => {
    dispatch(changeFavorites({ ...props }))
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

  return (
    <div className="position-relative">
      <Link to={`/film/${props.kinopoiskId || props.filmId}`} className="d-flex p-2 align-items-center link-dark link-underline-opacity-0 border-bottom">
        <div className="w-25">
          <Image src={props.posterUrlPreview} alt="film poster" className="p-3 img-fluid" />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          {renderTitle(props.nameOriginal, props.nameEn, props.nameRu)}
          {renderGenre(props.genres)}
          {renderCountry(props.countries)}
          {renderRating(props.ratingKinopoisk)}
        </div>
      </Link>
      <IconButton
        type="button"
        icon={icon}
        className="btn btn-outline-none p-2 position-absolute end-0 top-50 translate-middle-y"
        handleClick={toggleFavorite}
      />
    </div>
  )
}