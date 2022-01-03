const mongoose = require('mongoose');
const db = require('./config/key').mongoURI; // our database
const Wine = require('./config/models/Wine');
const Region = require('./config/models/Region');
const TastingNote = require('./config/models/TastingNote');
const Winery = require('./config/models/Winery');
const wineList = require('./winelist.json')

mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

wineList.forEach(wine => {
  let newNote = new TastingNote({
    note: wine.note
  })
  newNote.save()

  let newRegion = new Region({
    region: wine.region
  })
   newRegion.save()

  let newWinery = new Winery({
    winery_full: wine.winery_full
  })
    newWinery.save()
  .then(() => {
    let newWine = new Wine({
      id: wine.id,
      winery_full: newWinery.id, //wine.winery_full
      wine_full: wine.wine_full,
      note: newNote.id, //wine.note
      taster_initials: wine.taster_initials,
      color: wine.color,
      country: wine.country,
      region: newRegion.id,  //wine.region,
      score: wine.score,
      price: wine.price,
      vintage: wine.vintage,
      alternate_bottle_size: wine.alternate_bottle_size,
      issue_date: wine.issue_date,
      top100_year: wine.top100_year,
      top100_rank: wine.top100_rank
    })
    newWine.save()
    .catch(err => console.log(err))
  })
})


