const animalsRouter = require('express').Router();

animalsRouter.get('/animals', (req, res, next) => {
  res.json(require('../data/animals.json'));
});

animalsRouter.post('/animals', (req, res, next) => {
  console.log(req.body);
  res.status(200).json({status: 'OK'});
});

module.exports = animalsRouter;