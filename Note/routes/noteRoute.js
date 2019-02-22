const express = require('express');
const noteRouter = express.Router();
const noteService= require('../services/routeService');


noteRouter.get('/', (req, res) => {
  noteService.get(req,res);
});

noteRouter.get('/:noteId', function (req, res) {
  let noteId= req.params.noteId;
  noteService.search(req, res,noteId);
});



noteRouter.post('/', function (req, res) {
  const noteData={
    noteId:req.body.noteId,
    noteTitle: req.body.noteTitle,
    note: req.body.note,
    noteCreatedDate: req.body.noteCreatedDate
  };
  noteService.add(req,res,noteData);
});


noteRouter.put('/:noteId', function (req, res) {
  const noteId=req.params.noteId;
  const noteObj={
    noteTitle: req.body.noteTitle,
    note: req.body.note,
    noteCreatedDate: req.body.noteCreatedDate
  };
  noteService.edit(req,res,noteObj,noteId);
});


noteRouter.delete('/:noteId', function (req, res) {
  const noteId=req.params.noteId;
  noteService.delete(req,res,noteId);
});

module.exports = noteRouter;

