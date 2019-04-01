import axios from 'axios'
import { UPLOAD_IMAGES, FETCH_IMAGES, SUBMIT_FORM, URL } from './types'

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

export const submitData = formData => async dispatch => {
  console.log(formData)
  // await axios.post(`${URL}/submit`, formData)
  dispatch({
    type: SUBMIT_FORM,
    payload: formData
  })
}

export const fetchImages = () => async dispatch => {
  const response = await axios.get(`${URL}/images`)
  dispatch({
    type: FETCH_IMAGES,
    payload: response.data
  })
}
