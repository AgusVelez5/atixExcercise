const path = require('path');
const mime = require('mime');
const fs = require('fs');
const { ResponseError } = require('../../utils/response.model');
const FILE = process.env.FILE;
const pathToFile = path.resolve("outputFiles", FILE);
const { logger } = require('../../utils/logger');

exports.get = (req, res) => {

    try {
        const file = pathToFile;

        const filename = path.basename(file);
        const mimetype = mime.getType(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        let filestream = fs.createReadStream(file);
        filestream.pipe(res);
    } catch (err){
        logger.error("500 Server error: " + err);
        const response = new ResponseError("500", "Server error", err);
        return res.status(response.error.code).json(response);
    }
    
};
