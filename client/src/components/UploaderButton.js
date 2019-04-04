import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import './UploaderButton.css'

const UploaderButton = props => {
  return (
    <div className="center-align" style={{ marginTop: '50px' }}>
      <div>
        <label id="multi">
          <FontAwesomeIcon icon={faImages} color="#4db6ac" size="7x" id="icon" />
          <input type="file" onChange={props.onChange} multiple />
        </label>
      </div>
    </div>
  )
}

export default UploaderButton
