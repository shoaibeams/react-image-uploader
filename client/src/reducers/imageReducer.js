import { UPLOAD_IMAGES, FETCH_IMAGES, SUBMIT_FORM } from '../actions/types'

export default (state = [], { type, payload = [] }) => {
  switch (type) {
    case UPLOAD_IMAGES:
      return payload || []
    case FETCH_IMAGES:
      return payload
    case SUBMIT_FORM:
      return payload
    default:
      return state
  }
}
