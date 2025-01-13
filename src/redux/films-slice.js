import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilms, requestFilmsPopular, requestFilmsSearch, requestFilmsFilter } from '../services/films'

const initialState = {
  list: [],
  favorites: [],
  filter: null,
  pageCount: null,
  keyword: null,
  isLoaded: false,
  error: null,
}

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async (params, { rejectWithValue }) => {
    const data = await requestFilms(params)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchFilmsPopular = createAsyncThunk(
  'films/fetchFilmsPopular',
  async (params, { rejectWithValue }) => {
    const data = await requestFilmsPopular(params)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchFilmsSearch = createAsyncThunk(
  'films/fetchFilmsSearch',
  async (params, { rejectWithValue }) => {
    const data = await requestFilmsSearch(params)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchFilmsFilter = createAsyncThunk(
  'films/fetchFilmsFilter',
  async (params, { rejectWithValue }) => {
    const data = await requestFilmsFilter(params)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      const film = action.payload
      if (state.favorites.find(item => (item.kinopoiskId || item.filmId) === (film.kinopoiskId || film.filmId))) {
        state.favorites = state.favorites.filter(item => (item.kinopoiskId || item.filmId) !== (film.kinopoiskId || film.filmId))
      } else {
        state.favorites.push(film)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.error = null
        state.isLoaded = true
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.items
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoaded = false
        // state.error = `${action.error.name}: ${action.error.message}` //если запрос отменен по истечении времени запроса, то надо этот state
        state.error = `${action.payload.message}: ${action.payload.response.data.message}`
      })

      .addCase(fetchFilmsPopular.pending, (state) => {
        state.error = null
        state.isLoaded = true
      })
      .addCase(fetchFilmsPopular.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.items
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilmsPopular.rejected, (state, action) => {
        state.isLoaded = false
        // state.error = `${action.error.name}: ${action.error.message}` //если запрос отменен по истечении времени запроса, то надо этот state
        state.error = `${action.payload.message}: ${action.payload.response.data.message}`
      })

      .addCase(fetchFilmsSearch.pending, (state) => {
        state.error = null
        state.isLoaded = true
        state.keyword = null //необходимо для исключения повторного запроса.
        // Повторный запрос выполняется в pages/Films, когда происходит новый поиск не с 1-ой страницы старого поиска.
        // С начала отправляется запрос из components/FormSearch с keyword: 'Б', при этом меняется url на /search/:currentPage
        // Следовательно, изменился currentPage и отправляется второй запрос из pages/Films с предыдущим (keyword: 'А').
        // В результате отрисовывается страница от 2-го запроса.
      })
      .addCase(fetchFilmsSearch.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.films
        state.keyword = action.payload.keyword
        state.pageCount = action.payload.pagesCount
      })
      .addCase(fetchFilmsSearch.rejected, (state, action) => {
        state.isLoaded = false
        // state.error = `${action.error.name}: ${action.error.message}` //если запрос отменен по истечении времени запроса, то надо этот state
        state.error = `${action.payload.message}: ${action.payload.response.data.message}`
      })

      .addCase(fetchFilmsFilter.pending, (state) => {
        state.error = null
        state.isLoaded = true
        state.filter = null //необходимо для исключения повторного запроса.
        // Повторный запрос выполняется в pages/Films, когда происходит новый поиск не с 1-ой страницы старого поиска.
        // С начала отправляется запрос из components/FormFilter с keyword: 'Б', при этом меняется url на /search/:currentPage
        // Следовательно, изменился currentPage и отправляется второй запрос из pages/Films с предыдущим (keyword: 'А').
        // В результате отрисовывается страница от 2-го запроса.
      })
      .addCase(fetchFilmsFilter.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.items
        state.filter = action.meta.arg
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilmsFilter.rejected, (state, action) => {
        state.isLoaded = false
        // state.error = `${action.error.name}: ${action.error.message}` //если запрос отменен по истечении времени запроса, то надо этот state
        state.error = `${action.payload.message}: ${action.payload.response.data.message}`
      })
  }
})

export const { addToFavorites, deleteFromFavorites, changeFavorites } = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer

//TODO: если неправильный запрос или превыщено время запроса, то не переходит в rejected (остается в pending) => не отображает ошибку. 
