const express = require('express')
const mysql = require('mysql')
const path = require('path')
const mongoose = require('mongoose')
const config = require('./config/config')
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

//App Setup and Middlewares
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(formData.parse())

let router
if (process.env.NODE_ENV !== 'production') {
  router = require('./routes/routerMongo')
  //MongoDB Setup
  mongoose6
    .connect(config.MONGODB_URL, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))
  router(app)
} else {
  router = require('./routes/routerMySQL')
  // SQL connection
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shoaib96',
    multipleStatements: true
  })
  router(app, db)
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050')
})
