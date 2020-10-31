const { celebrate, Joi, Segments } = require('celebrate');

const knownSpecies = ['cat', 'dog', 'direwolf', 'dragon'];

const validateBeastBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    species: Joi.any().valid(...knownSpecies).required(),
  }),
});

const validateBeastBodyPartial = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    species: Joi.any().valid(...knownSpecies),
  }).required(),
});

const validateQueryString = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    species: Joi.any().valid(...knownSpecies),
  }),
});

module.exports = {
  validateBeastBody,
  validateQueryString,
  validateBeastBodyPartial,
}
