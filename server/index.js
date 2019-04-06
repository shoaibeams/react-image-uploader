const express = require('express')
const mysql = require('mysql')
const mongoose = require('mongoose')
const config = require('./config/config')
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
// const router = require('./routes/routerMySQL')
const router = require('./routes/routerMongo')

//SQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'shoaib96',
//   multipleStatements: true
// })

//MongoDB Setup
// mongoose.Promise = global.Promise
mongoose
  .connect(config.MONGODB_URL, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

//App Setup and Middlewares
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(formData.parse())
router(app)

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050')
})
