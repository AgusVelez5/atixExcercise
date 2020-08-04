const FILE = process.env.FILE;
const fs = require('fs');
const lineReader = require('line-reader');
const readLastLines = require('read-last-lines');
const { ResponseError } = require('../utils/response.model');
const path = require('path');
const { logger } = require('../utils/logger');

module.exports = {
    addLine: async line => {

        try { 

            logger.info("Generated line: " + line);
            const pathToFile = path.resolve("outputFiles", FILE);
            return await fs.promises.appendFile(pathToFile, line + "\n");

        } catch (err){
            logger.error("500 Server error: " + err);
            return new ResponseError('500', 'Server error', err);
        }
    },

    getLastLine: async () => {

        try {

            const pathToFile = path.resolve("outputFiles", FILE);
            return await readLastLines.read(pathToFile, 1);

        } catch (err){
            logger.error("500 Server error: " + err);
            return new ResponseError('500', 'Server error', err);
        }
    }
}
