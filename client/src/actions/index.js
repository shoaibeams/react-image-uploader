import axios from 'axios'
import { UPLOAD_IMAGES, FETCH_IMAGES, SUBMIT_FORM } from './types'

export const uploadImages = formData => async dispatch => {
  const response = await axios.post(`/upload`, formData)
  dispatch({
    type: UPLOAD_IMAGES,
    payload: {
      images: response.data,
      uploading: false
    }
  })
}

export const submitData = formData => async dispatch => {
  await axios.post(`/submit`, formData)
  dispatch({
    type: SUBMIT_FORM,
    payload: formData
  })
}

export const fetchImages = () => async dispatch => {
  const response = await axios.get(`/images`)
  dispatch({
    type: FETCH_IMAGES,
    payload: response.data
  })
}
