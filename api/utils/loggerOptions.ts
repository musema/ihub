import * as winston from 'winston';
import * as expressWinston from 'express-winston';

export const loggerOptions: expressWinston.LoggerOptions = {
    meta: process.env.DEBUG !== undefined,
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

export default loggerOptions;
