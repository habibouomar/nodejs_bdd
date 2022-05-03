const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const tablesSchema = new mongoose.Schema({

  seat: Number,
  isVIP: Boolean,

})

const tablesModel = mongoose.model('Table', tablesSchema);

// tablesModel.insertMany([
  
//     {
//       seat: 12,
//       isVip: true,
//     },
//     {
//         seat: 52,
//         isVip: false,
//     }
  
// ])

module.exports = router
