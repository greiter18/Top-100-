const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  id: {
    type: integer
  },
  winery_full: {
    type: string
  },
  wine_full: {
    type: string
  },
  note:{
    type: string
  },
  taster_initials:{
    type: string
  },
  color:{
    type: string
  },

  country:{
    type: string
  },
  region:{
    type: string
  },
  score:{
    type: integer
  },
  price:{
    type: integer
  },
  alternate_bottle_size:{
    type: string
  },
   issue_date:{
    type: string
  },
   top100_year:{
    type: integer
  },
    top100_rank: {
    type: integer
  },
});

const Wine = mongoose.model('wine', WineSchema);
module.exports = Wine;