import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from 'react-redux'
import Images from './Images'

class Bar extends Component {
  render() {
    const { number, images } = this.props
    let now

    if (number === images.length) {
      now = 100
    }

    const fillerArray = Array.from(new Array(number).fill(number))
    return fillerArray.map((item, i) => {
      return (
        <div key={i}>
          <ProgressBar variant="success" now={now} label="100%" />
          <Images images={images} renderOne index={i} />
        </div>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    images: state.imagesReducer.images || []
  }
}

export default connect(
  mapStateToProps,
  {}
)(Bar)
