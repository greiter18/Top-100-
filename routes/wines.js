const express = require('express');
const router = express.Router();
const axios = require('axios');
var https = require('https');
var request=require('request');

router.get('/index', (req, res) => {
  request.get(`https://top-100-example.s3.amazonaws.com/t100_2021_full.json`, (error, response, body) =>{
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('res', res.header);
    res.set('Access-Control-Allow-Origin', '*')
    res.json(JSON.parse(body))
    // .catch((error) => console.log('error:', error))
  })
  // console.log(wine)
  // // .then(wines => {
  // //   debugger
  // //   res.send(wines)
  // // })
  // res.send(wine)
})

// router.get('/', async (req, res, next) => {
//   try{
//      let wine = request.get(`https://top-100-example.s3.amazonaws.com/t100_2021_full.json`)
//      console.log('-----------',wine)
//      res.send(wine.data)
//   } catch(error) {
//         next(error)
//     }
// })


router.get('/wineId', (req, res) => {})


module.exports = router;



