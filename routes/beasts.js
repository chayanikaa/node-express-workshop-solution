const path = require('path');

const beasts = require('../model/beasts');
const { validateQueryString, validateBeastBody, validateBeastBodyPartial } = require('../utils/validators');
var multer  = require('multer');

const beastsRouter = require('express').Router();

// Setting up storage for image file with POST request
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'data', 'assets'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

// upload.single will parse a single file and attach the data to the request
var upload = multer({ storage });

beastsRouter.route('/beasts')
  .get(validateQueryString, async (req, res, next) => {
    try {
      const { species } = req.query;
      const allBeasts = await beasts.getAll();
      let results = allBeasts;
      if (species) {
        results = allBeasts.filter(beast => beast.species === species);
      }
      res.json(results);
    } catch (e) {
      next(e);
    }
  })
  .post(upload.single('image'), validateBeastBody, async (req, res, next) => {
    try {
      await beasts.save({ ...req.body, image: `data/assets/${req.file.filename}`});
      res.redirect('/');
    } catch (e) {
      next(e);
    }
  });

beastsRouter.route('/beasts/:beastId')
  .get(async (req, res, next) => {
    try {
      res.json(await beasts.get(+req.params.beastId));
    } catch (e) {
      next(e);
    }
  })
  .patch(validateBeastBodyPartial, async (req, res, next) => {
    try {
      const newBeast = await beasts.update(+req.params.beastId, req.body);
      res.json(newBeast);
    } catch (e) {
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const removed = await beasts.remove(+req.params.beastId);
      res.json(removed);
    } catch (e) {
      next(e);
    }
  });

module.exports = beastsRouter;