module.exports = app => {

  const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost/filter', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })


}