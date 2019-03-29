import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Spinner from './Spinner'
import Images from './Images'
import UploaderButton from './UploaderButton'

class Uploader extends Component {
  state = {
    loading: true,
    uploading: false
  }

  onChange = e => {
    const files = Array.from(e.target.files)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })
    this.setState({ uploading: true })
    this.props.fetchImages(formData, () => {
      this.setState({ uploading: false })
    })
  }

  render() {
    const { loading, uploading } = this.state

    const images = this.props.images

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} />
        default:
          return <UploaderButton onChange={this.onChange} />
      }
    }

    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        {content()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.imagesReducer.images || []
  }
}

export default connect(
  mapStateToProps,
  actions
)(Uploader)
