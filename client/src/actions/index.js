import axios from 'axios'
import { FETCH_IMAGES, URL } from './types'

export const fetchImages = (formData, cb) => async dispatch => {
  const response = await axios.post(`${URL}/upload`, formData)
  dispatch({
    type: FETCH_IMAGES,
    payload: {
      images: response.data
    }
  })
  cb()
}

//   .catch(err => {
//     console.log(err)
//     this.setState({ uploading: false })
//   })
