import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import './UploaderButton.css'

const UploaderButton = props => {
  return (
    <div className="center-align " style={{ marginTop: '200px' }}>
      <div className="button ">
        <label htmlFor="multi">
          <FontAwesomeIcon icon={faImages} color="#4db6ac" size="10x" id="icon" />
        </label>
      </div>
      <input
        type="file"
        id="multi"
        onChange={props.onChange}
        multiple
        style={{ marginLeft: '120px' }}
      />
    </div>
  )
}

export default UploaderButton
