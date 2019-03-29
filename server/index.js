const express = require('express')
// const mysql = require('mysql')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const formData = require('express-form-data')
const cors = require('cors')

const morgan = require('morgan')
const app = express()
const router = require('./router')

//DB Setup
mongoose.connect('mongodb://shoaib:shoaib96@ds127736.mlab.com:27736/uploader', {
  useNewUrlParser: true,
  useCreateIndex: true
})

//App Setup
app.use(morgan('combined'))
app.use(cors())
app.use(formData.parse())
// app.use(bodyParser.json({ type: '*/*', limit: '20mb' }))
router(app)

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050')
})

// //SQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'shoaib96'
// })

// db.connect(err => {
//   if (err) {
//     console.log(err.sqlMessage)
//   } else {
//     console.log('MySQL Connected!')
//   }
// })

// app.get('/db', (req, res) => {
//   let sql = 'CREATE DATABASE images'
//   db.query(sql, (err, result) => {
//     if (err) throw err
//     console.log(result)
//     res.send('Database Created')
//   })
// })
