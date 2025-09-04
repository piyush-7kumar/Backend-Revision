const Joi = require("joi")


const schema = Joi.object().keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male","female")
}).min(1);


const getQueryErrors = (data)=>{
    const result = schema.validate(data);
    return result.error;
}


module.exports = getQueryErrors