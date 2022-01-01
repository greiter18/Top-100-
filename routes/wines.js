const express = require('express');
const router = express.Router();
var request=require('request');
const Wine = require('../config/models/wine');

// router.get('/', (req, res) => {
//   request.get(`https://top-100-example.s3.amazonaws.com/t100_2021_full.json`, (error, response, body) =>{
//     // console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     // console.log('body',body);
//     // res.set('Access-Control-Allow-Origin', '*')
//     res.json(JSON.parse(body)); // change the header type to json
//     //res.send(body);
//     // res.json(body);
//     //catch((error) => console.log('error:', error))
//   })
// });

router.get('/', (req, res) => {
  Wine.find()
  .then(wine => res.json(wine))
  .catch(err => res.status(404))
});

router.get('/:wineId', (req, res) => {
  Wine
  .find({ id: req.params.wineId})
  .then((wine) => {res.json(wine)})
  .catch((error) => res.status(400).json(400))
});

router.get('/:wineName',(req, res) =>{

})

module.exports = router;



