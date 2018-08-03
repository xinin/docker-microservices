const hello = require('./../../api/hello');

class Router {
  static routes(app) {
    app.use('/hello', hello);

    app.use((req, res) => {
      res.status(404).send('Not Found');
    });
  }
}

module.exports = Router;
