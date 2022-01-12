import express from 'express';
import http from 'http';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import expressWinston from 'express-winston';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import ideaRouter from './routes/ideaRouter';
import loggerOptions from './utils/loggerOptions';
import swaggerOptions from './utils/swaggerOptions';


const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(['/swagger'], swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/ideas', ideaRouter);


server.listen(port, () => {
    console.log(`Idea API server is up and running at ${port}`);
});