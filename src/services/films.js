import { get } from '../utils/client'
import { filmsEndpoint, filmsPopularEndpoint, filmsSearchEndpoint, filmsFilterEndpoint } from '../config/api'

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

export const requestFilmsPopular = async (params) => {
  try {
    const response = await get(filmsPopularEndpoint, { params })
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

export const requestFilmsFilter = async (params) => {
  try {
    const response = await get(filmsFilterEndpoint, { params })
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}