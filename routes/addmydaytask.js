var express = require('express');
const app = require('../app');
var router = express.Router();

var User = require('../models/User');

/* GET users listing. */
// 

router.get('/', async function (req, res, next) {
  console.log("insidegetmydaytasks");
  res.json(await User.find({myday:true}));
});

router.post('/', (req, res) => {

  console.log("inside adding myday task");
  var user = new User({
   
    title: req.body.title,
    description: req.body.description,

   myday:true,
   important:false
   
  });
  
  console.log("........");
  console.log(user);
  user.save()

    .then(data => {
      console.log(data);
      // res.json(data);
      res.sendStatus(200);

    })

    .catch(err => {
      console.log(err);
      res.json({ message: err });
    });

});

module.exports = router;