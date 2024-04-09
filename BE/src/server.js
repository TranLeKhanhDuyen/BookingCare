import bodyParser from 'body-parser'; //Get the correct id sent by the user
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { ExceptionHandler } from './core/handlers/exception.handler';
import { connectDatabase } from './database/data-source';
import './modules/relationship';
import { routes } from './routes';
const app = express();
const corsOptions = {
  origin: '*' //(https://your-client-app.com)
};

app.use(cors(corsOptions));
app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect database
connectDatabase();

app.use('/api/v1', routes);
ExceptionHandler.notFoundHandler(app);
app.use(ExceptionHandler.errorHandler);

app.listen(9000, () => {
  console.log(`Server is running at http://localhost:${9000}`);
});

export default app;
