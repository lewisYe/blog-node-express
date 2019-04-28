var express = require('express');
var router = express.Router();
const Tag = require('../models/tag')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// get tag list

router.get('/list', (req, res) => {
  Tag.count({}, (err, count) => {
    Tag.find({})
      .sort({ createTime: -1 })
      .then(tags => {
        res.json({
          code: 200,
          message: 'success',
          data: {
            list: tags,
            total: count
          }
        })
      })
      .catch(err => {
        res.json(err)
      })
  })

})

router.post('/create', function (req, res, next) {
  Tag.create(req.body, (err, tag) => {
    if (err) {
      res.json(err)
    } else {
      res.json({
        code: 200,
        message: 'success',
        data: {}
      })
    }
  })
});

router.post('/delete', function (req, res, next) {
  Tag.findByIdAndRemove(req.body.id, {}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json({
        code: 200,
        message: 'success',
        data: {}
      })
    }
  })
})

module.exports = router;
