import express from 'express';
const app = express();

import {wines} from "./routes/wines.js";

app.use(express.json());

app.get('/', (req, res) => {
  //`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json`
  res.send('GODDDAMNNNN')
})

app.use('/', wines)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is HOT"));