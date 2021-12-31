const mongoose = require('mongoose');
const db = require('./config/key').mongoURI; // our database
const Wine = require('./config/models/Wine')
const wineList = require('./winelist.json')

mongoose
.connect(db, {useNewUrlParser: true})

wineList.forEach(wine => {
  let newWine = new Wine({
  id: wine.id,
  winery_full: wine.wine_full, 
  wine_full: wine.wine_full,
  note: wine.note,
  taster_initials: wine.taster_initials,
  color: wine.color,
  country: wine.country,
  region: wine.region,
  score: wine.score,
  price: wine.price,
  alternate_bottle_size: wine.alternate_bottle_size,
  issue_date: wine.issue_date,
  top100_year: wine.top100_year,
  top100_rank: wine.top100_rank
  })
  newWine.save()
})
