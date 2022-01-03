const express = require('express');
const router = express.Router();
var request=require('request');
const Wine = require('../config/models/wine');

router.get('/', (req, res) => {
  Wine.find()
  .sort({top100_rank: 1})
  .then(wine => res.json(wine))
  .catch(err => res.status(404))
  
});

// router.get('/:wineId', (req, res) => {
//   Wine
//   .find({ id: req.params.wineId})
//   .then((wine) => {res.json(wine)})
//   .catch((error) => res.status(400).json(400))
// });

// router.get('/:wineName',(req, res) =>{
//   Wine
//   .find({winery_full: req.params.winename})
//   .then((wine) => {res.json(wine)})
// })

module.exports = router;



