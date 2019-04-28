const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: String,
  content: String,
  tags: Array,
  status:{ type: Number, default: 0 },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Article',articleSchema);