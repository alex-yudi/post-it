import joi from 'joi'

export const schemaUserSignUp = joi.object({
    nickname: joi.string().min(3).max(30).required().messages({
        'any.required': 'O campo apelido é obrigatório!'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo e-mail é obrigatório!',
        'string.email': 'É necessário fornecer um e-mail válido.'
    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,15}$')).required().messages({
        'string.pattern.base': 'A senha precisa possuir, no mínimo, 8 caracteres e, no máximo, 15 caracteres!',
        'any.required': 'O campo senha e a verificação de senha são obrigatórios!'
    }),
    repeatPassword: joi.string().required().messages({
        'any.required': 'Por favor, forneça a verificação de senha.'
    })
})

export const schemaUserSignIn = joi.object({
    email: joi.string().email().required().messages({
        'any.required': 'O campo e-mail é obrigatório!'
    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,15}$')).required().messages({
        'any.required': 'O campo senha é obrigatório!'
    })
})