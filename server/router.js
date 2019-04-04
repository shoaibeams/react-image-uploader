const cloudinary = require('cloudinary')
const keys = require('./config/keys')
const fetchImages = require('./queries/fetchImages')
const saveFormData = require('./queries/saveFormData')

module.exports = (app, db) => {
  //Cloudinary Configuration
  cloudinary.config({
    cloud_name: keys.CLOUD_NAME,
    api_key: keys.CLOUDINARY_API_KEY,
    api_secret: keys.CLOUDINARY_SECRET_KEY
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
    console.log(typeof selectedDay)

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
        return console.error(error.message)
      }

      results[1].map(({ original_filename, secure_url }) => {
        images.push({ original_filename, secure_url })
      })
      res.json(images)
    })
  })
}
