const bye = require('./../../api/bye');

class Router {
  static routes(app) {
    app.use('/bye', bye);

    app.use((req, res) => {
      res.status(404).send('Not Found');
    });
  }
}

module.exports = Router;
