import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilm } from '../services/film'

const initialState = {
  data: {},
  isLoaded: false,
  error: null,
}

export const fetchFilm = createAsyncThunk(
  'film/fetchFilm',
  async (kinopoiskId, { rejectWithValue }) => {
    const data = await requestFilm(kinopoiskId)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.error = null
        state.isLoaded = true
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.isLoaded = false
        state.data = action.payload
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.isLoaded = false
        // state.error = `${action.error.name}: ${action.error.message}` //если запрос отменен по истечении времени запроса, то надо этот state
        state.error = `${action.payload.message}: ${action.payload.response.data.message}`
      })
  }
})

export const filmReducer = filmSlice.reducer
