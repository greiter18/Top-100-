const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/key').mongoURI; // our database

mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Conneceted to MongoDB'))
.catch(err => console.log('error error',err));

const wines = require("./routes/wines")
const winery = require("./routes/winerys")
const tastingnote = require("./routes/tastingnotes")
const region = require("./routes/regions")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello the one and only Gabriel Reiter")})

app.use('/wines', wines)
app.use('/winery', winery)
app.use('/tastingnote', tastingnote)
app.use('/region', region)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is HOT"));

//connect to the database
//iterate over the data and//
//each iterating to a db create and save iterating
//seed file - standalone file 