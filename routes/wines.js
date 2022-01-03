const express = require('express');
const router = express.Router();
const Wine = require('../models/Wine');

//Index Route
router.get('/', (req, res) => {
  Wine.find()
  .sort({top100_rank: 1})
  .then(wine => res.json(wine))
  .catch(err => res.status(404))
  
});

module.exports = router;



