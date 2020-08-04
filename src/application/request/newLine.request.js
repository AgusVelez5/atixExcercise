const Joi = require('joi');
const { Response, ResponseError } = require("../../utils/response.model");
const { logger } = require('../../utils/logger');

const schemaNewLine = Joi.object().keys({
    message: Joi.string().alphanum().required(),
});

module.exports = {

    validate: (data) => {

        const {error, value} = schemaNewLine.validate(data);

        if(!error){
            return new Response(value);
        }

        logger.error("400 Bad request");
        return new ResponseError("400", "Bad Request", "Message has incorrect characters.");
    }

};

