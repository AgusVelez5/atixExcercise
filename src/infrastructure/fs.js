const FILE = process.env.FILE;
const fs = require('fs');
const lineReader = require('line-reader');
const readLastLines = require('read-last-lines');
const { ResponseError } = require('../utils/response.model');
const path = require('path');

module.exports = {
    addLine: async line => {

        try { 

            const pathToFile = path.resolve("outputFiles", FILE);
            return await fs.promises.appendFile(pathToFile, line + "\n");

        } catch (err){
            console.log(err);
            return new ResponseError('500', 'Server error', err);
        }
    },

    getLastLine: async () => {

        try {
            
            /* let lastLine = "";

            const pathToFile = path.resolve("outputFiles", FILE);
            lineReader.eachLine(pathToFile, (line, last) => {
                if (last){
                    console.log('prev line')
                    console.log(line);
                    console.log(last);
                    lastLine = line;
                }
            });

            console.log('----')
            console.log(lastLine);
            console.log('----')
            return lastLine; */

            const pathToFile = path.resolve("outputFiles", FILE);
            return await readLastLines.read(pathToFile, 1);
                

        } catch (err){
            console.log(err);
            return new ResponseError('500', 'Server error', err);
        }
    }
}
