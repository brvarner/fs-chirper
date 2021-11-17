import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as compression from 'compression';
import routes from './routes';
import config from './config';
// import apiRouter from './routes'

const app = express();

app.use(morgan('dev'));
app.use(compression());
app.use(express.static('public'));
app.use(express.json());
app.use(config.apiPrefix, routes);
// app.use('/api', apiRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));
