export default {
  database: 'simple-blog',
  username: '',
  password: '',
  databaseOptions: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}-simple-blog.sqlite`
  }
};
