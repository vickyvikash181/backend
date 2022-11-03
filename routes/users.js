var express = require('express');
var router = express.Router();
var user = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',(req,res)=> {
  var user = new user({
 title: req.body.title,
 description: req.body.description
  });
//  user.Save()
 
//  .if(data => {
//     res.json(data);

//  })
//   .else(err => {
//     res.json({message: err});
//   });
});

module.exports = router;
