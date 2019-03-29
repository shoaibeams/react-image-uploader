import React, { Component } from 'react'
import Images from './Images'
// import Spinner from './Spinner'

class ImageViewer extends Component {
  state = {
    uploading: false,
    images: []
  }

  render() {
    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        <h3>View your uploaded images here</h3>]
      </div>
    )
  }
}
export default ImageViewer
