const express = require('express');
const router = express.Router();
const axios = require('axios');
var https = require('https');
var request=require('request');

router.get('/', (req, res) => {
  request.get(`https://top-100-example.s3.amazonaws.com/t100_2021_full.json`, (error, response, body) =>{
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body',body);
    // res.set('Access-Control-Allow-Origin', '*')
    res.json(JSON.parse(body)); // change the header type to json
    //res.send(body);
    // res.json(body);
    //catch((error) => console.log('error:', error))
  })
})


router.get('/:wineId', (req, res) => {})


module.exports = router;



