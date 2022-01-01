const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  id: {
    type: String
  },
  winery_full: {
    type: String
  },
  wine_full: {
    type: String
  },
  note:{
    type: String
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
    type: String
  },
  score:{
    type: String
  },
  price:{
    type: String
  },
  alternate_bottle_size:{
    type: String
  },
   issue_date:{
    type: String
  },
   top100_year:{
    type: String
  },
    top100_rank: {
    type: String
  },
});

const Wine = mongoose.model('wine', WineSchema);
module.exports = Wine;