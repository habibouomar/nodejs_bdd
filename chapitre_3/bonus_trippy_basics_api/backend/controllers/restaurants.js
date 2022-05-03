const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const expressValidator = require("express-validator")

const restaurantsSchema = new mongoose.Schema({

  name: String,
  adress: String,
  city: String,
  country: String,
  stars: { type: Number, min: 1, max: 5 },
  haspa: Boolean,
  haspool: Boolean,
  priceCategory: { type: Number, min: 1, max: 3 },
  tables: [ { type: mongoose.Types.ObjectId, ref: 'Table' } ]

});

const restaurantsModel = mongoose.model('Restaurant', restaurantsSchema);

router.get('/restaurants', function (req, res) {
  restaurantsModel.find().exec().then(resultat => { res.json(resultat) });
});

router.get('/restaurants/:id', function (req, res, next) {
  const id = req.params.id
  console.log(id);
  hotelsModel.findById({ _id: id }).populate("Table").exec().then(resultat => { res.json(resultat) })
})

router.post('/restaurants',

  expressValidator.body("stars").isNumeric().optional().isLength({ min: 1 }),
  expressValidator.body('priceCategory').isNumeric().optional().isLength({ min: 1 }),

  (req, res) => {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });
    }
    else {

      const body = req.body
      console.log(body);

      const newRestaurant = new restaurantsModel(body)

      newRestaurant.save().then(res => {
        res.json(res)
      });
    }
  })

// router.put('/restaurants/:id', (req, res, next) => {
//   const id = req.params.id

//   restaurantsModel.updateOne({ _id: id }, { $set: { name: req.query.name } },

//     function (err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(result);
//       }
//     });
// });

router.put('/restaurants/:id', (req, res, next) => {
  const id = req.params.id

  restaurantsModel.updateOne({ _id: id }, { $set: { tables: [mongoose.Types.ObjectId("62713cf9715df88fdf4acca1"), mongoose.Types.ObjectId("62713cf9715df88fdf4acca2")] } },

    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
});

router.delete('/restaurants/:id', (req, res, next) => {
  const id = req.params.id
  console.log(id);

  restaurantsModel.deleteOne({ _id: id }).then(resultat => {
    res.json({
      _id: id,
      statut: "effacé correctement"
    })
  });
});

// restaurantsModel.insertMany([
//   {
//     name: "train bleau",
//     adress: "gare de lyon",
//     city: "paris",
//     country: "france",
//     stars: 3,
//     cuisine: "française",
//     priceCategory: 3,
//   },
//   {
//     name: "bella roma",
//     adress: "strada bellucci",
//     city: "rome",
//     country: "italie",
//     stars: 1,
//     cuisine: "italienne",
//     priceCategory: 2,
//   },
//   {
//     name: "pedra alta",
//     adress: "rua roni",
//     city: "porto",
//     country: "portugal",
//     stars: 1,
//     cuisine: "portugaise",
//     priceCategory: 1,
//   }
// ]);

module.exports = router