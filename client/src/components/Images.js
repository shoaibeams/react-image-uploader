import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

export default ({ images, renderOne, index }) => {
  const renderImageWithMagnifier = image => {
    return (
      <div>
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
    )
  }
  if (images[index] && renderOne) {
    return (
      <div key={index} style={{ marginTop: '20px' }}>
        {renderImageWithMagnifier(images[index])}
      </div>
    )
  }
  return images.map((image, i) => (
    <div key={i} style={{ marginTop: '20px' }}>
      {renderImageWithMagnifier(image)}
    </div>
  ))
}
