import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import './UploaderButton.css'

const UploaderButton = props => {
  return (
    <div className="center-align" style={{ marginTop: '50px' }}>
      <div>
        <label htmlFor="multi">
          <FontAwesomeIcon icon={faImages} color="#4db6ac" size="7x" id="icon" />
        </label>
      </div>
      <input
        type="file"
        id="multi"
        onChange={props.onChange}
        multiple
        style={{ marginLeft: '100px' }}
      />
    </div>
  )
}

export default UploaderButton
