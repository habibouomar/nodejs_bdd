const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const expressValidator = require("express-validator")

const hotelsSchema = new mongoose.Schema({

  name: String,
  adress: String,
  city: String,
  country: String,
  stars: { type: Number, min: 1, max: 5 },
  haspa: Boolean,
  haspool: Boolean,
  priceCategory: { type: Number, min: 1, max: 3 },
  rooms: [{ type: mongoose.Types.ObjectId, ref: 'Room' }]

})

const hotelsModel = mongoose.model('Hotel', hotelsSchema);

router.get('/hotels', function (req, res) {
  hotelsModel.find().exec().then(resultat => { res.json(resultat) });
});

router.get('/hotels/:id', function (req, res, next) {
  const id = req.params.id
  console.log(id);
  hotelsModel.findById({ _id: id }).populate("Room").exec().then(resultat => { res.json(resultat) })
})

router.post('/hotels',

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

      const newHotel = new hotelsModel(body)

      newHotel.save().then(res => {
        res.json(res)
      });
    }
  })

// router.put('/hotels/:id', (req, res, next) => {
//   const id = req.params.id

//   hotelsModel.updateOne({ _id: id }, { $set: { name: req.query.name } },

//     function (err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(result);
//       }
//     });
// });

router.put('/hotels/:id', (req, res, next) => {
  const id = req.params.id

  hotelsModel.updateOne({ _id: id }, { $set: { rooms: [mongoose.Types.ObjectId("62713cbdc9cb1a4640296f00"), mongoose.Types.ObjectId("62713cbdc9cb1a4640296f01")] } },

    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
});

router.delete('/hotels/:id', (req, res, next) => {
  const id = req.params.id
  console.log(id);

  hotelsModel.deleteOne({ _id: id }).then(resultat => {
    res.json({
      _id: id,
      statut: "effacé correctement"
    })
  });
});

// hotelsModel.insertMany([
//   {
//     name: "hilton",
//     adress: "rue de la paix",
//     city: "paris",
//     country: "france",
//     stars: 5,
//     haspa: true,
//     haspool: true,
//     priceCategory: 3,
//   },
//   {
//     name: "pullman",
//     adress: "calle ocho",
//     city: "madrid",
//     country: "espagne",
//     stars: 4,
//     haspa: false,
//     haspool: true,
//     priceCategory: 2,
//   },
//   {
//     name: "bestwestern",
//     adress: "glasgow street",
//     city: "lodon",
//     country: "scotland",
//     stars: 3,
//     haspa: false,
//     haspool: false,
//     priceCategory: 1,
//   }
// ]);

module.exports = router