const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const animalsRouter = require('./routes/animals');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/data/assets', express.static(path.join(__dirname, 'data', 'assets')));

app.use('/api', animalsRouter);

module.exports = app;
