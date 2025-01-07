import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from './redux/store'
import { router } from './router'
import './styles/app.scss'

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}