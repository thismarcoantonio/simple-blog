export default (app) => {
  const { Posts } = app.datasource.models;

  return app
    .get('/posts', (req, res) => {
      return Posts.findAll()
        .then(response => res.json(response));
    })
    .post('/posts', (req, res) => {
      return Posts.create(req.body).then(response => res.json(response));
    });
};
