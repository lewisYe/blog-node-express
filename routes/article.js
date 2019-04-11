var express = require('express');
var router = express.Router();
const Article = require('../models/article')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res) => {
  Article.find({})
       .sort({ createTime : -1})
       .then(movies => {
         let json = {
          code:200,
          message:'',
          data:{
            list:movies
          }
         }
         res.json(json)
       })
       .catch(err => {
         res.json(err)
       })
})

router.post('/create', function(req, res, next) {
  Article.create(req.body,(err,article) => {
    if(err){
      res.json(err)
    }else{
      res.json(article)
    }
  })
});

module.exports = router;
