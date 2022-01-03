const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WinerySchema = new Schema({
  winery_full:{
    type: String
  }

})

const Winery = mongoose.model('winery', WinerySchema);
module.exports = Winery;