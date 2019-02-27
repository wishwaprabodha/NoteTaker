require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const noteRouter = require('./routes/noteRoute');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/note', noteRouter);


app.listen(port, () => {
  console.log("Server up on PORT:" + port);
});

module.exports = app;

