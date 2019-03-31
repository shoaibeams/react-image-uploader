import { UPLOAD_IMAGES, FETCH_IMAGES } from '../actions/types'

export default (state = [], { type, payload = [] }) => {
  switch (type) {
    case UPLOAD_IMAGES:
      return payload || []
    case FETCH_IMAGES:
      return payload
    default:
      return state
  }
}
