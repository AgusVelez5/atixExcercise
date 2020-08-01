const Joi = require('joi');
const { Response, ResponseError } = require("../../utils/response.model");

const schemaNewLine = Joi.object().keys({
    message: Joi.string().alphanum().required(),
});

module.exports = {

    validate: (data) => {
        console.log(data);

        const {error, value} = Joi.validate(data, schemaNewLine);

        if(!error){
            return new Response(value);
        }

        return new ResponseError("400", "Bad Request", "Message has incorrect characters.");
    }

};

