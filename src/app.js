import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import datasource from './datasource';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => res.render('pages/index'));

app.datasource = datasource();

postsRoutes(app);
usersRoutes(app);

app.listen(process.env.PORT || 4200, () => console.info('app running on http://localhost:4200'));
