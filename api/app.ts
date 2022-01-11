import express from 'express';
import * as http from 'http';
import * as expressWinston from 'express-winston';
import cors from 'cors';

import { loggerOptions } from './utils/logger';
import ideaRouter from './routes/idea';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        components: {},
        info: {
            title: 'Idea API',
            version: '0.0.1',
        },
    },
    apis: ['./routes/*.ts']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/ideas', ideaRouter);


server.listen(port, () => {
    console.log(`Server is up and running at ${port}`);
});