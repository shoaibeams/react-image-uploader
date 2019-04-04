import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ images }) =>
  images.map((image, i) => (
    <div
      key={i}
      style={{
        padding: '15px'
      }}
    >
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: false,
            width: 200,
            height: 200,
            src: image.secure_url
          },
          largeImage: {
            src: image.secure_url,
            width: 800,
            height: 800
          },
          enlargedImageContainerDimensions: {
            width: 300,
            height: 300
          }
        }}
      />
    </div>
  ))

// <div
//       onClick={() => props.removeImage(image.public_id)}
//       className='delete'
//     >
//       <FontAwesomeIcon icon={faTimesCircle} size='2x' />
//     </div>
