import { useSelector } from 'react-redux'
import { Image } from './Image.jsx'
import { FilmTitle } from './FilmTitle.jsx'
import { FilmText } from './FilmText.jsx'

export function Article() {
  const { data } = useSelector((state) => state.film)

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
      <div className="d-flex p-2 align-items-center">
        <div className="w-25">
          <Image src={data.posterUrl} alt="film poster" className="p-4 img-fluid" />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          {renderTitle(data.nameOriginal, data.nameEn, data.nameRu)}
          {renderGenre(data.genres)}
          {renderCountry(data.countries)}
          {renderRating(data.ratingKinopoisk)}
        </div>
      </div>
      {renderDescription(data.description)}
    </article>
  )
}