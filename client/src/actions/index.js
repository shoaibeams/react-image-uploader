import axios from 'axios'
import { UPLOAD_IMAGES, FETCH_IMAGES, URL } from './types'

export const uploadImages = (formData, cb) => async dispatch => {
  const response = await axios.post(`${URL}/upload`, formData)

  dispatch({
    type: UPLOAD_IMAGES,
    payload: {
      images: response.data
    }
  })
  cb()
}

export const fetchImages = () => async dispatch => {
  const response = await axios.get(`${URL}/images`)
  dispatch({
    type: FETCH_IMAGES,
    payload: response.data
  })
}
