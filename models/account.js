const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  name: String,
  tel: Number,
  isDisabled:{ type: Boolean, default: false },
  createTime: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Account',accountSchema);