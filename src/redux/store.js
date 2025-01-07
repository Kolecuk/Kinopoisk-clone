import { configureStore } from '@reduxjs/toolkit'
import { filmsReducer } from './films-slice'
import { filmReducer } from './film-slice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
  },
})