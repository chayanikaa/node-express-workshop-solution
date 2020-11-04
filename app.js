const http = require('http');
const path = require('path');

const express = require('express');
const logger = require('morgan');
const { errors } = require('celebrate');

const beastRouter = require('./routes/beasts');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Expose all files in public dir under / path of app
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', beastRouter);

// Handle validation errors from celebrate
app.use(errors());

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
