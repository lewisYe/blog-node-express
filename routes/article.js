var express = require('express');
var router = express.Router();
const Article = require('../models/article')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res) => {
  let { pageNo, pageSize } = req;
  Article.count({}, (err, count) => {
    Article.find({})
      .sort({ createTime: -1 })
      .limit(pageSize)
      .skip((pageNo - 1) * pageSize)
      .then(movies => {
        res.json( {
          code: 200,
          message: 'success',
          data: {
            list: movies,
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
  Article.create(req.body, (err, article) => {
    if (err) {
      res.json(err)
    } else {
      res.json( {
        code: 200,
        message: 'success',
        data: article
      })
    }
  })
});

router.post('/delete', function (req, res, next) {
  Article.findByIdAndRemove(req.body.id, {}, (err, result) => {
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
