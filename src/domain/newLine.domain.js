const fs = require('../infrastructure/fs');
const { getLastLineHash, getNonce } = require('../utils/calculateHashes');
const { ResponseError, Response } = require('../utils/response.model');
const { logger } = require('../utils/logger');

module.exports.buildLine = async message => {

    try {
        const prevLineHash = await getLastLineHash();
        const nonce = await getNonce(prevLineHash, message);
        const line = `${prevLineHash},${message},${nonce}`;
        fs.addLine(line);
        return new Response(line);
    } catch(err){
        logger.error("500 Server error: " + err);
        return new ResponseError('500', 'Server Error', err);
    }
    
}