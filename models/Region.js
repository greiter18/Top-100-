const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
  region:{
    type: String
  }

})

const Region = mongoose.model('region', RegionSchema);
module.exports = Region;