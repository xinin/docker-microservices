
class Router {
  static routes(app) {
    app.use('/bye', require('./../../api/bye'));

    app.use((req, res) => {
      res.status(404).send('Not Found');
    });
  }
}

module.exports = Router;
