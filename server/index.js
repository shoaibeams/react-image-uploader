const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const router = require('./router')

//SQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shoaib96',
  multipleStatements: true
})

//App Setup and Middlewares
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.use(formData.parse())
router(app, db)

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050')
})
