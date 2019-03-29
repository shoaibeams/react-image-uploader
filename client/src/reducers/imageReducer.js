import { FETCH_IMAGES } from '../actions/types'

export default (state = [], { type, payload = [] }) => {
  switch (type) {
    case FETCH_IMAGES:
      return payload || []

    default:
      return state
  }
}
