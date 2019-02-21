const express = require('express');
const noteRouter = express.Router();

const noteConn = require('./db');

noteRouter.get('/', (req, res) => {
  const query = "select * from Note";
  noteConn.query(query, function (err, result) {
    res.send(result);
  });
});

noteRouter.get('/:noteId', function (req, res) {
  const noteId = req.params.noteId;
  const query = 'select * from Note where noteId=?';
  con.query(query, noteId, function (err, result) {
    res.send(result);
  });
});



noteRouter.post('/', function (req, res) {
  let noteId = req.body.noteId;
  let noteTitle = req.body.noteTitle;
  let note = req.body.note;
  let noteCreatedDate = req.body.noteCreatedDate;
  let query = "insert into Note(noteId,noteTitle,note,noteCreatedDate) values ('" + noteId + "',  '" + noteTitle + "',  '" + note + "','" + noteCreatedDate + "')";
  con.query(query, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});


noteRouter.put('/:noteId', function (req, res) {
  const noteId=req.params.noteId;
  const noteObj={
    noteTitle: req.body.noteTitle,
    note: req.body.note,
    noteCreatedDate: req.body.noteCreatedDate
  };
  let query = "UPDATE Note SET noteTitle ='" + noteObj.noteTitle + "', note='" + noteObj.note + "',noteCreatedDate= '" + noteObj.noteCreatedDate + "' WHERE noteId ='" + noteId + "'";
  con.query(query,function (err, result) {
    console.log(query);
    if (err) throw err;
    res.send(result);
  });
});

noteRouter.delete('/:noteId', function (req, res) {
  const noteId=req.params.noteId;
  let query = "DELETE FROM Note WHERE noteId ='" + noteId + "'";
  con.query(query,function (err, result) {
    console.log(query);
    if (err) throw err;
    res.send(result);
  });
});

module.exports = noteRouter;

