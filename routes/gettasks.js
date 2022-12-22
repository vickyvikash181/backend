var express = require('express');
const app = require('../app');
var router = express.Router();

var User = require('../models/User');

/* GET users listing. */
// 


router.get('/', async function (req, res, next) {
  console.log("user");
  res.json(await User.find());
});


  // console.log("error from users");
  
    // users.find({})

    //   .exec(async function (err, users) {

    //     if (err) {
    //       console.log("error in users")

    //     } else {
    //       console.log("abcd");
       

    //     }

    //   })






// app.listen(PORT, function(err){
//   if (err) console.log(err);
//   console.log("Server listening on PORT", PORT);
// });






//   db.collections.find({ "title":newNote,
// "description":newNote}) ;



router.post('/', (req, res) => {

  console.log(req);
  var user = new User({

    // res.json({
    //   UserList: ["user 1","user 2"]
    // var jsonData = ({
    title: req.body.title,
    description: req.body.description,

   myday:false,
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
