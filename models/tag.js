const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Tag',tagSchema);