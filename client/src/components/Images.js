import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props =>
  props.images.map((image, i) => (
    <div key={i} className="fadein" style={{ flex: '33.33%', padding: '5px' }}>
      <img src={image.secure_url} alt="" style={{ height: '40%', width: '200px' }} />
    </div>
  ))

// <div
//       onClick={() => props.removeImage(image.public_id)}
//       className='delete'
//     >
//       <FontAwesomeIcon icon={faTimesCircle} size='2x' />
//     </div>
