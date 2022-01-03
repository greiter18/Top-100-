const express = require('express');
const router = express.Router();
const Winery = require('../models/Winery');

//Index Route
router.get(`/`, (req, res) => {
  Winery
  .find()
  .then(winery => res.json(winery))
  .catch(err => res.status(404))
});


//Show route
router.get(`/:wineryId`, (req, res) => {
  Winery 
  .find({ _id: req.params.wineryId})
  .then(winery => {res.json(winery)})
  .catch(err => res.status(404))
});

//Create route
router.post(`/`, (req, res) => {
  const newWinery = new Winery({
    winery: req.body.winery
  })
    newWinery.save()
  .then(winery => {
    return res.json(winery)
  })
});

//Update Route
router.put('/:wineryId', (req, res) => {
  let currentWinery = Winery.find({ id: req.params.wineryId})
  currentWinery.winery = req.body.winery
  currentWinery.save()
  .then(winery => {
    return res.json(winery)
  })
  .catch(err => res.status(400).json(err));
});

//Delete Route
router.delete(``, (req, res) => {
  Winery.findByIdAndRemove(req.params.wineryId)
  .then(winery => {
    return res.json(winery)
  })
  .catch(err => res.status(400).json(err));
})

module.exports = router;

