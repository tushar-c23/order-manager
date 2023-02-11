const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({

})

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .required(),

    password: Joi.string(),
})