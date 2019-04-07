const cloudinary = require('cloudinary')
const config = require('../config/config')
const Image = require('../models/Image')

module.exports = (app, db) => {
  //Cloudinary Configuration
  cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_SECRET_KEY
  })

  app.post('/upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image =>
      cloudinary.v2.uploader.upload(image.path, { folder: 'Test' })
    )
    Promise.all(promises).then(results => {
      res.json(results)
    })
  })

  app.post('/submit', (req, res) => {
    const { images, selectedDay, amount } = req.body

    images.map(({ original_filename, secure_url }) => {
      const newImage = new Image({
        amount,
        selectedDay,
        original_filename,
        secure_url
      })
      newImage.save().then(image => res.json(image))
    })
    res.json()
  })

  app.get('/images', async (req, res) => {
    const images = await Image.find({}, { secure_url: 1, original_filename: 1 })
    res.send(images)
  })
}
