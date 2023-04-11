import joi from 'joi'

export const schemaUserSignUp = joi.object({
    nickname: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,15}$')).required(),
    repeat_password: joi.ref('password')
})

export const schemaUserSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,15}$')).required()
})