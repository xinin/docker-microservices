const Utils = require('./../../components/Utils');

exports.bye = (req, res) => {
  Utils.response(req, res, 200, 'Bye World!');
};

exports.byebye = (req, res) => {
  Utils.response(req, res, 200, 'Bye Bye World!');
};
