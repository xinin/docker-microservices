const App = require('./../../components/App');

const Utils = App.Utils();

exports.hello = (req, res) => {
  Utils.response(req, res, 200, 'Hello World!');
};

exports.hellohello = (req, res) => {
  Utils.response(req, res, 200, 'Hello Hello World!');
};
