import bodyParser from 'body-parser'; //Get the correct id sent by the user
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { API_PREFIX, PORT } from './core/config/env-config';
import { ExceptionHandler } from './core/handlers/exception.handler';
import { connectDatabase } from './database/data-source';
import './modules/relationship';
import { routes } from './routes';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(cors({ origin: true, credentials: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect database
connectDatabase();

/**@type {swaggerJSDoc.Options} */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking Care API',
      description: 'Booking Care API Documentation',
      version: '1.0.0'
    },
    host: `http://127.0.0.1:${PORT}${API_PREFIX}`,
    produces: ['application/json'],
    components: {
      securitySchemes: {
        bearer: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT'
        }
      }
    }
    // servers: [
    //   {
    //     url: `http://127.0.0.1:${PORT}${API_PREFIX}`
    //   }
    // ]
  },
  apis: [
    // './**/*/*.router.js',
    // './**/*/*.model.js',
    // './**/*/*.validator.js',
    './**/*.docs.yaml'
  ]
};

const specs = swaggerJSDoc(options);

app.use(API_PREFIX, routes);
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));
ExceptionHandler.notFoundHandler(app);
app.use(ExceptionHandler.errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
