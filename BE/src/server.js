import express from 'express';
import bodyParser from 'body-parser'; //Get the correct id sent by the user
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log('runing with port: ' + port);
});
