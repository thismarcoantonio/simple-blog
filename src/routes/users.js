export default (app) => {
  const { Users } = app.datasource.models;

  return app
    .get('/users', (req, res) => {
      return Users.findAll()
        .then(response => res.json(response));
    })
    .post('/users', (req, res) => {
      return Users.create(req.body)
        .then(response => res.json(response));
    });
};
