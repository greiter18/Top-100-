const express = require('express');
const router = express.Router();
var request=require('request');
const Region = require('../config/models/Region');

//Index Route
router.get(`/`, (req, res) => {
  Region
  .find()
  .then(notes => res.json(notes))
  .catch(err => res.status(404))
});

//Show route
router.get(`/:regionId`, (req, res) => {
  Region
  .find({ id: req.params.noteId})
  .then(notes => res.json(notes))
  .catch(err => res.status(404))
});

//Create Route
router.post(`/`, (req, res) => {
  const newRegion = new Region({
    region: req.body.region
  })
  newRegion.save()
  .then(region => {
    return res.json(region)
  })
});

//Update Route 
router.put('/:regionId', (req, res) => {
  let curRegion = Region.find({ id: req.params.noteId})
  curRegion.region = req.body.region
  curRegion.save()
  .then(region => {
    return res.json(region)
  })
});


module.exports = router;
