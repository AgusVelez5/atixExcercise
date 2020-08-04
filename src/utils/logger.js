const winston = require('winston');
const path = require('path');

pathToLogs = path.resolve();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: path.join(pathToLogs, 'combined.log')})
    ]
});

exports.logger = logger;