require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGO_URI);
  })
  .catch(error => {
    console.error('Connection error:', error.message);
  });

module.exports.Place = require("./places");
module.exports.Comment = require('./comment')