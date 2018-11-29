import express from 'express';
import path from 'path';
import datasource from './datasource';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => res.render('pages/index'));

app.datasource = datasource();
app.datasource.models.Users.create({ username: '123' });

app.listen(process.env.PORT || 4200, () => console.info('app running on http://localhost:4200'));
