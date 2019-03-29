const cloudinary = require('cloudinary')
const keys = require('./config/keys')

module.exports = app => {
  //Cloudinary Configuration
  cloudinary.config({
    cloud_name: keys.CLOUD_NAME,
    api_key: keys.CLOUDINARY_API_KEY,
    api_secret: keys.CLOUDINARY_SECRET_KEY
  })

  app.post('/upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise.all(promises).then(results => res.json(results))
  })
}
