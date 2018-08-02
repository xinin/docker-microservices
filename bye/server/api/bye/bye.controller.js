const App = require('./../../components/App');

const Utils = App.Utils();

exports.bye = (req, res) => {
  Utils.response(req, res, 200, 'Bye World!');
};

exports.byebye = (req, res) => {
  Utils.response(req, res, 200, 'Bye Bye World!');
};

