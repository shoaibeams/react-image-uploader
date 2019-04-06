import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Images from './Images'
import UploadButton from './UploaderButton'
import UploaderForm from './UploaderForm'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Bar from './Bar'

class Uploader extends Component {
  state = { uploading: false, amount: '', errorMessage: '' }

  handleDayChange = day => {
    this.setState({ errorMessage: '', selectedDay: day, number: '' })
  }

  handleAmount = event => {
    this.setState({
      errorMessage: '',
      amount: event.target.value
    })
  }

  renderErrors(errorMessage) {
    if (errorMessage) {
      return (
        <div style={{ marginTop: '40px', color: 'red', fontSize: '20px' }}>
          {errorMessage}
        </div>
      )
    }
  }

  onSubmit = async event => {
    event.preventDefault()

    const { amount, selectedDay, errorMessage } = this.state
    const images = this.props.images
    const { submitData, history } = this.props

    if (images.length === 0 || !selectedDay || amount === '') {
      await this.setState({ errorMessage: "You can't leave any field blank." })
    } else if (errorMessage === '') {
      submitData({ images, amount, selectedDay })
      history.push('/images')
    }
  }

  onChange = e => {
    this.setState({ errorMessage: '' })
    const files = Array.from(e.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })

    this.setState({ uploading: true, number: files.length })
    this.props.uploadImages(formData)
  }

  renderUploadButtonAndImage = () => {
    const { uploading } = this.state
    const { images } = this.props

    switch (!uploading && images.length > 0) {
      case !uploading:
        return (
          <div>
            <Bar images={images} number={this.state.number} />
          </div>
        )
      default:
        return <UploadButton onChange={this.onChange} />
    }
  }

  render() {
    return (
      <UploaderForm
        {...this.state}
        onSubmit={this.onSubmit}
        handleAmount={this.handleAmount}
        handleDayChange={this.handleDayChange}
        renderUploadButtonAndImage={this.renderUploadButtonAndImage}
        renderErrors={this.renderErrors}
      />
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
