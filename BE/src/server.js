import express from 'express';
import bodyParser from 'body-parser'; //Get the correct id sent by the user
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import cors from 'cors';
import { ExceptionHandler } from './core/handlers/exception.handler';
import { routes } from './routes';
import { ENV_CONFIG } from './core/config/env-config';

require('dotenv').config();

const app = express();
app.use(cors({ origin: true, credentials: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
app.use(ENV_CONFIG.API_PREFIX, routes);
ExceptionHandler.notFoundHandler(app);
app.use(ExceptionHandler.errorHandler);

connectDB();

app.listen(ENV_CONFIG.PORT, () => {
  console.log(`Server is running at http://localhost:${ENV_CONFIG.PORT}`);
});
