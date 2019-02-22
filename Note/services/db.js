const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "NoteTaking",
    password: "egxduvwz"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB!");
});

module.exports = con;
