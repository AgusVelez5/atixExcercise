const newLineRequest = require('../request/newLine.request');
const newLineService = require('../../domain/newLine.domain');
const { ResponseError } = require('../../utils/response.model');


exports.post = async (req, res) => {
    const requestData =  Object.assign({}, {
        message: req.body.message,
    });

    const requestResponse = newLineRequest.validate(requestData);
    if(requestResponse instanceof ResponseError){
        return res.status(requestResponse.error.code).json(requestResponse);
    }

    const response = await newLineService.buildLine(requestData.message);
    if(response instanceof ResponseError){
        return res.status(response.error.code).json(response);
    }

    return res.status(200).json(response);
};
