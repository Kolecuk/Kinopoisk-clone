import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Film } from './pages/Film'
import { Films } from './pages/Films'
import { FilmsAll } from './pages/FilmsAll'
import { FilmsPopular } from './pages/FilmsPopular'
import { FilmsFound } from './pages/FilmsFound'
import { FilmsFiltered } from './pages/FilmsFiltered'
import { FilmsFavorites } from './pages/FilmsFavorites'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/films',
        element: <Films />,
        children: [
          {
            path: '/films/all/:currentPage',
            element: <FilmsAll />
          },
          {
            path: '/films/popular/:currentPage',
            element: <FilmsPopular />
          },
          {
            path: '/films/search/:currentPage',
            element: <FilmsFound />
          },
          {
            path: '/films/filter/:currentPage',
            element: <FilmsFiltered />
          },
          {
            path: '/films/favorite/:currentPage',
            element: <FilmsFavorites />
          },
        ]
      },
      {
        path: '/film/:kinopoiskId',
        element: <Film />
      },
    ]
  }
])
