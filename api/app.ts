import express from 'express';
import * as http from 'http';
import * as expressWinston from 'express-winston';
import cors from 'cors';

import { loggerOptions } from './utils/logger';
import { IdeasRoutes } from './routes/idea';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));

new IdeasRoutes().addRoutes(app);


server.listen(port, () => {
    console.log(`Server is up and running at ${port}`);
});