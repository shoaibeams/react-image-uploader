const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const ImageSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  selectedDay: {
    type: Date,
    default: Date.now
  },
  original_filename: {
    type: String,
    required: true
  },
  secure_url: {
    type: String,
    required: true
  }
})

module.exports = Image = mongoose.model('post', ImageSchema)
