import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Film } from './pages/Film'
import { Films } from './pages/Films'
import { FilmsAll } from './pages/FilmsAll'
import { FilmsFound } from './pages/FilmsFound'

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
            path: '/films/search/:currentPage',
            element: <FilmsFound />
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
