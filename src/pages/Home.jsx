import { Link } from 'react-router'

export function Home() {
  return (
    <>
      <h1 className="text-center">
        Это клон Кинопоиска
      </h1>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-secondary m-3" to="/films/all/1">Перейти к фильмам</Link >
      </div>
    </>
  )
}

// TODO: добавить спинеры из bootstrap