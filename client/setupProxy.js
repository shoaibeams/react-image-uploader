const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy(['/upload', '/submit', '/images'], { target: 'http://localhost:3050' })
  )
}
