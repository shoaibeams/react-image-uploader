import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Images from './Images'
import UploadButton from './UploaderButton'
import Spinner from './Spinner'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/it'
import 'react-day-picker/lib/style.css'

class UploadForm extends Component {
  state = { uploading: false, amount: '', errorMessage: '' }

  handleDayChange = day => {
    this.setState({ errorMessage: '', selectedDay: day })
  }

  handleAmount = event => {
    this.setState({
      errorMessage: '',
      amount: event.target.value
    })
  }

  renderErrors() {
    const { errorMessage } = this.state

    if (errorMessage) {
      return <div style={{ color: 'red', fontSize: '20px' }}>{errorMessage}</div>
    }
  }

  onSubmit = event => {
    event.preventDefault()
    console.log(this.props)

    const { amount, selectedDay } = this.state
    const images = this.props.images

    if (amount === '') {
      this.setState({ errorMessage: 'You have to enter an amount!' })
    } else if (!selectedDay) {
      this.setState({ errorMessage: 'You have to select a day!' })
    }
    this.props.submitData({ images, amount, selectedDay })
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })
    this.setState({ uploading: true })
    this.props.uploadImages(formData, () => {
      this.setState({ uploading: false })
    })
  }

  renderUploadButtonAndImage = () => {
    const { uploading } = this.state
    const { images } = this.props

    switch (!uploading && images.length > 0) {
      case true:
        return (
          <div>
            <Images images={images} />
          </div>
        )
      case !uploading:
        return (
          <div>
            <Spinner />
          </div>
        )
      default:
        return <UploadButton onChange={this.onChange} />
    }
  }

  render() {
    const { errorMessage, amount } = this.state

    return (
      <form
        onSubmit={this.onSubmit}
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '50%'
        }}
      >
        <h3 className="center-align">Upload a Photo</h3>
        <input
          type="number"
          placeholder="Enter amount here"
          value={amount}
          onChange={this.handleAmount}
        />
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date())}`}
          onDayChange={this.handleDayChange}
        />
        {this.renderUploadButtonAndImage()}

        <button
          className="waves-effect waves-light btn-large"
          style={{
            marginTop: '90px',
            display: `${errorMessage}` ? 'none' : null
          }}
        >
          Submit
        </button>
        {this.renderErrors()}
      </form>
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
)(UploadForm)
