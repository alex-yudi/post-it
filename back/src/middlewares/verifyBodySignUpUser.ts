import { Request, Response, NextFunction } from 'express'
import { schemaUserSignUp } from '../schemas/user'

export const verifyBodySignUpUser = async (req: Request, res: Response, next: NextFunction) => {
    const { apelido: nickname, email, senha: password, repetirSenha: repeatPassword } = req.body;
    try {
        await schemaUserSignUp.validateAsync({
            nickname,
            email,
            password,
            repeatPassword
        })
        return next();
    } catch (error: any) {
        const errorMessage = error.details[0].message
        if (errorMessage) {
            return res.status(400).json(errorMessage)
        }
        return res.status(500).json("Erro interno do servidor.")
    }
}