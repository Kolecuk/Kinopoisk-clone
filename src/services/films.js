import { get } from '../utils/client'
import { filmsEndpoint, filmsSearchEndpoint } from '../config/api'

export const requestFilms = async (params) => {
  try {
    const response = await get(filmsEndpoint, { params })
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestFilmsSearch = async (params) => {
  try {
    const response = await get(filmsSearchEndpoint, { params })
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}