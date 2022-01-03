const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TastingNoteSchema = new Schema({
  note:{
    type: String
  }

})

const TastingNote = mongoose.model('tastingnote', TastingNoteSchema);
module.exports = TastingNote;