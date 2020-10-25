const animalsRouter = require('express').Router();

animalsRouter.get('/animals', (req, res, next) => {
  res.json(require('../data/animals.json'));
});

module.exports = animalsRouter;