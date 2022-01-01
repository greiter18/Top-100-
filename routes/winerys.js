const express = require('express');
const router = express.Router();
var request=require('request');
const Winery = require('../config/models/winery');

router.get(`/`, (req, res) => {
  Winery
  .find()
  .then(winery => res.json(winery))
  .catch(err => res.status(404))
});


//Show route
router.get(`/:wineryId`, (req, res) => {
  Winery
  .find({ id: req.params.wineryId})
  .then(winery => res.json(winery))
  .catch(err => res.status(404))
});

router.post(`/`, (req, res) => {
  const newRegion = new Winery({
    region: req.body.region
  })
  newRegion.save()
  .then(region => {
    return res.json(region)
  })
});

router.put('/:wineryId', (req, res) => {
  let curWinery = Winery.find({ id: req.params.wineryId})
  curWinery.winery = req.params.winery
  curWinery.save()
  .then(winery => {
    return res.json(winery)
  })
});

router.delete(``, (req, res) => {
  Winery.findByIdAndRemove(req.params.wineryId)
  .then(winery => {
    return res.json(winery)
  })
  .catch(err => res.status(400).json(err));
})

module.exports = router;

