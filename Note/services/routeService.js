const noteConn = require('../services/db');

function getNote(req, res) {
    const query = "select * from Note";
    noteConn.query(query, function (err, result) {
        res.send(result);
    });
}

function searchNote(req, res, noteId) {
    const query = `select * from Note where noteId=${noteId}`;
    noteConn.query(query, noteId, function (err, result) {
        res.send(result);
    });
}

function addNote(req, res, noteData) {
    let query = `insert into Note(noteId, noteTitle, note, noteCreatedDate)
        values(${noteData.noteId}, ${noteData.noteTitle}, ${noteData.note}, ${noteData.noteCreatedDate})`;
    noteConn.query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

function editNote(req, res, noteObj, noteId) {
    let query = `UPDATE Note SET noteTitle=${noteObj.noteTitle},
        note=${noteObj.note },noteCreatedDate=${noteObj.noteCreatedDate} WHERE
        noteId=${noteId}`;
    noteConn.query(query, function (err, result) {
        console.log(query);
        if (err) throw err;
        res.send(result);
    });
}

function deleteNote(req, res, noteId) {
    let query = `DELETE FROM Note WHERE noteId =${noteId}`;
    noteConn.query(query, noteId, function (err, result) {
        console.log(query);
        if (err) throw err;
        res.send(result);
    });
}

module.exports = {
    get: getNote,
    add: addNote,
    edit: editNote,
    search: searchNote,
    delete: deleteNote
};
