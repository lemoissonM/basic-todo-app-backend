export default (cb) => async (req, res, next) => {
  try {
    return await cb(req, res, next);
  } catch (err) {
    let error = new Error('Server error');
    error.status = err.status || 500;
    if (err && err.details) {
      [error] = err.details;
      error.status = 400;
    }
    if (err.name && err.name.includes('JsonWebTokenError')) {
      return res
        .status(401)
        .json({ message: 'Unauthorized' });
    }
    return res.status(error.status).json(err);
  }
};
