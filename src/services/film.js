import { get } from '../utils/client'
import { filmEndpoint } from '../config/api'

export const requestFilm = async (kinopoiskId) => {
  try {
    const response = await get(`${filmEndpoint}${kinopoiskId}`)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}