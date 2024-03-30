import bodyParser from 'body-parser'; //Get the correct id sent by the user
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { API_PREFIX, PORT } from './core/config/env-config';
import { ExceptionHandler } from './core/handlers/exception.handler';
import { connectDatabase } from './database/data-source';
import './modules/relationship';
import { routes } from './routes';

const app = express();
app.use(cors({ origin: true, credentials: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect database
connectDatabase();

app.use(API_PREFIX, routes);
ExceptionHandler.notFoundHandler(app);
app.use(ExceptionHandler.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
