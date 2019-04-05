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
    this.setState({ uploading: false })
    this.props.fetchImages()
  }

  componentDidUpdate = prevProps => {
    if (prevProps.images === this.props.images) {
      this.props.fetchImages()
    }
  }

  renderImages(images) {
    return (
      <div
        className="center-align"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3>Images</h3>
        <p>Hover cursor over the image to see the enlarged image.</p>
        <Images images={images} now={0} />
      </div>
    )
  }

  renderContent() {
    const images = this.props.images

    switch (images.length > 0 && this.state.uploading) {
      case true:
        return <Spinner />
      case images.length > 0:
        return <div />
      default:
        return this.renderImages(images)
    }
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
