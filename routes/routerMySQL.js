const cloudinary = require('cloudinary')
const config = require('../config/config')
const fetchImages = require('../queries/fetchImages')
const saveFormData = require('../queries/saveFormData')

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
    const { images, selectedDay } = req.body
    let { amount } = req.body
    amount = parseInt(amount, 10)

    images.map(({ original_filename, secure_url }) => {
      db.query(saveFormData, [
        original_filename,
        secure_url,
        amount,
        selectedDay.slice(0, 10)
      ])
    })
    res.json()
  })

  app.get('/images', (req, res) => {
    let images = []
    db.query(fetchImages, (error, results) => {
      if (error) {
        throw error
      }
      results[3].map(({ original_filename, secure_url }) => {
        images.push({ original_filename, secure_url })
      })
      res.json(images)
    })
  })
}

// arrayToObject(results, 'id')[null].image.map((image, i) => images.push(image))
