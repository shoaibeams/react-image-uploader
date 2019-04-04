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
    this.props.fetchImages(() => {
      this.setState({ uploading: false })
    })
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
        <Images images={images} />
      </div>
    )
  }

  renderContent() {
    const images = this.props.images

    switch (images.length > 0 && this.state.uploading) {
      case true:
        return <Spinner />
      case images.length > 0:
        return (
          <div className="center-align" style={{ marginTop: '200px' }}>
            <h3>View your uploaded images here</h3>
          </div>
        )
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
