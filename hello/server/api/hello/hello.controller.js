const Utils = require('./../../components/Utils');

exports.hello = (req, res) => {
  Utils.response(req, res, 200, 'Hello World!');
};

exports.hellohello = (req, res) => {
  Utils.response(req, res, 200, 'Hello Hello World!');
};
