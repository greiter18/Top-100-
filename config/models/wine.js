const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  id: {
    type: String
  },
  winery_full: {
    type: String,
    ref: 'winery_fulls'
  },
  wine_full: {
    type: String
  },
  note:{
    type: String,
    ref: 'tastingnotes'
  },
  taster_initials:{
    type: String
  },
  color:{
    type: String
  },
  vintage:{
    type: String
  },
  country:{
    type: String
  },
  region:{
    type: String,
    ref: 'regions'
  },
  score:{
    type: Number, //Number
  },
  price:{
    type: Number //Number
  },
  alternate_bottle_size:{
    type: String
  },
   issue_date:{
    type: String
  },
   top100_year:{
    type: Number //Number
  },
    top100_rank: {
    type: Number //Number
  },
});

const Wine = mongoose.model('wine', WineSchema);
module.exports = Wine;