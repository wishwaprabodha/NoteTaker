require('dotenv').config();
const mysql = require('mysql');


const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB!");
});

module.exports = con;
