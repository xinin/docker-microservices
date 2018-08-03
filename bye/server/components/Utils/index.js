const uniqid = require('uniqid');

const middleware = (req, res, next) => {
  if (req.headers && req.headers.uniqid) {
    req.uniqid = req.headers.uniqid;
  } else {
    req.uniqid = uniqid();
  }
  res.set({ uniqid: req.uniqid });

  next();
};

const response = (req, res, statusCode = 500, body) => {
  let data;

  if (body && typeof body === 'string') {
    data = { msg: body };
  }

  if (statusCode >= 500) {
    data = { msg: 'Oops!, something was wrong.' };
  }

  data = JSON.stringify(data);

  res.status(statusCode || 500).send(data);
};

module.exports = {
  middleware, response, uniqid,
};
