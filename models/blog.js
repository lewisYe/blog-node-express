const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  tags: Array,
  isPublish:Boolean,
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Blog',blogSchema);