var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  
  console.log("get request from users");
     users.find({})
  .exec(async function(err,users){
    if(err){
      console.log("error in users")

    }else{
      res.json( await users);
    }
    
  });
  
});
  //   db.collections.find({ "title":newNote,
  // "description":newNote}) ;
 
  

router.post('/',(req,res)=> {
  
  console.log(req);
  var user = new User({

    // res.json({
    //   UserList: ["user 1","user 2"]
    // var jsonData = ({
 title: req.body.title,
 description: req.body.description 
    
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
    res.json({message: err});
  });



});

module.exports = router;
