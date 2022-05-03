const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({

  people: Number,
  price: Number,
  hasbathroom: Boolean,

})

const roomsModel = mongoose.model('Room', roomsSchema);

// roomsModel.insertMany([

//   {
//     people: 412,
//     price: 300,
//     hasbathroom: true,
//   },
//   {
//     people: 5102,
//     price: 100,
//     hasbathroom: false,
//   }

// ])

module.exports = router

