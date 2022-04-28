const express = require('express');
const router = express.Router();
const expressValidator = require("express-validator")
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

  email: String,
  username: String,
  age: Number,
  city: String

})

const UsersModel = mongoose.model('User', usersSchema);

router.get('/', function (req, res) {
  UsersModel.find().exec().then(resultat => { res.json(resultat) });
});

router.post('/users',

  expressValidator.body("email").isEmail(),
  expressValidator.body("username").isLength({ min: 4 }), 
  expressValidator.body("age").isNumeric().optional().isLength({ min: 2 }), 
  expressValidator.body('city').isIn(['paris', 'tokyo', 'los-angeles']), 
 
  (req, res) => {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });
    }
    else {

      const body = req.body
      console.log(body);
     
      const newUser = new UsersModel(body)

      newUser.save().then(user => {
        res.json(user)
      });
    }
  }
)

router.get('/users/:username', function (req, res) {
  const username = req.params.username
    UsersModel.find({ username }).exec().then(resultat => { res.json(resultat) })
});

module.exports = router