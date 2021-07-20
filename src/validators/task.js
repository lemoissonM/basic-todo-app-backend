import Joi from 'joi';

const abortEarly = false;
export const create = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  start: Joi.string(),
  end: Joi.string(),
}).options({
  abortEarly,
});
export const update = Joi.object().keys({
  title: Joi.string(),
  description: Joi.string(),
  start: Joi.string(),
  end: Joi.string(),
}).options({
  abortEarly,
});
