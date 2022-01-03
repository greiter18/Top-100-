const express = require('express');
const router = express.Router();
var request=require('request');
const TastingNote = require('../config/models/TastingNote');

//Index Route
router.get(`/`, (req, res) => {
  TastingNote
  .find()
  .then(notes => res.json(notes))
  .catch(err => res.status(404))
});


//Show route
router.get(`/:noteId`, (req, res) => {
  TastingNote
  .find({ _id: req.params.noteId})
  .then(notes => res.json(notes))
  .catch(err => res.status(404))
});

module.exports = router;

