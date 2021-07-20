import async from './errorHandler';

export default (schema) => async((req, res, next) => {
  const { body, query, params } = req;
  const { error } = schema.validate({ ...body, ...query, ...params });
  if (error) {
    const {
      details: [detail = null],
    } = error;
    console.log(error);
    let { message } = detail;
    const { path } = detail;
    if (path.includes('fullName')) message = 'fullName should contain the first and lastname and they should be alphanumeric';
    return res.status(400).send({
      status: 400,
      message: 'Input validation failed!',
      error: message,
    });
  }
  return next();
});
