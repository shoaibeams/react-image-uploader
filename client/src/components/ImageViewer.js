import React, { Component } from 'react'
import Images from './Images'
import Spinner from './Spinner'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ImageViewer extends Component {
  state = {
    uploading: false
  }
  componentDidMount = () => {
    this.props.fetchImages()
  }

  renderContent() {
    const images = this.props.images
    if (images.length > 0) {
      return (
        <div>
          <h2>Got Images</h2>
          <Images images={images} />
        </div>
      )
    } else if (images.length === 0) {
      return (
        <div className="center-align" style={{ marginTop: '200px' }}>
          <h3>View your uploaded images here</h3>
        </div>
      )
    }
    return <Spinner />
  }

  render() {
    return this.renderContent()
  }
}

const mapStateToProps = state => {
  return {
    images: state.imagesReducer
  }
}

export default connect(
  mapStateToProps,
  actions
)(ImageViewer)
